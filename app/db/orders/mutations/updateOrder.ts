import { resolver } from "@blitzjs/rpc"
import * as zod from "zod"
import { array, number, object, string } from "zod"
import { OrderStatus, Payment, Role } from "@prisma/client"
import { id, ip } from "../../validation"
import db from "../../../../db"

export default resolver.pipe(
  resolver.zod(
    object({
      id,

      customerId: id.optional(),
      currencyId: id.optional(),
      productIds: array(id).optional(),
      voucherId: id.optional().optional(),

      firstName: string().min(1).max(20).optional(),
      lastName: string().min(1).max(20).optional(),
      email: string().email().max(20).optional(),
      phone: string().max(20).optional(),
      telegram: string().max(20).optional(),
      address: string().max(20).optional(),

      total: number().optional(),
      payment: zod
        .enum(Object.values(Payment) as [string])
        .transform((v) => v as Payment)
        .optional(),
      discount: number().optional(),

      ip: ip.optional(),
      comment: string().max(1000).optional(),
      status: zod
        .enum(Object.values(OrderStatus) as [string])
        .transform((v) => v as OrderStatus)
        .optional(),
    })
  ),
  resolver.authorize(Role.ADMIN),
  async ({ id, customerId, currencyId, productIds, voucherId, ...data }) => {
    // Get current order state
    const currentOrder = await db.order.findUnique({
      where: { id },
      select: { voucherHistory: { select: { voucher: { select: { id: true } } } } },
    })

    return db.$transaction(async () => {
      // Update order
      const order = await db.order.update({
        where: { id },
        data: {
          customer: { connect: { id: customerId } },
          currency: { connect: { id: currencyId } },
          ...data,
        },
      })

      // Update voucher history
      let voucherHistory
      if (voucherId != null && currentOrder?.voucherHistory?.voucher.id !== voucherId)
        voucherHistory = await db.voucherHistory.create({
          data: { voucherId, orderId: order.id, amount: 0 },
        })

      return [order, voucherHistory]
    })
  }
)
