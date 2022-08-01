import { resolver } from "@blitzjs/rpc"
import db from "../../../../db"
import { CreateOrder } from "../orders.validation"

export default resolver.pipe(
  resolver.zod(CreateOrder),
  ({ customerId, currencyId, productIds, voucherId, ...data }) => {
    return db.$transaction(async (db) => {
      // Create order
      const order = await db.order.create({
        data: {
          customer: { connect: { id: customerId } },
          currency: { connect: { id: currencyId } },
          products: { connect: productIds.map((id) => ({ id })) },
          ...data,
        },
      })

      // Update voucher history
      let voucherHistory
      if (voucherId != null)
        voucherHistory = await db.voucherHistory.create({
          data: { voucherId, orderId: order.id, amount: 0 },
        })

      return [order, voucherHistory]
    })
  }
)
