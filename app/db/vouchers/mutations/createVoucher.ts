import { resolver } from "@blitzjs/rpc"
import * as zod from "zod"
import { array, boolean, date, number, object, string } from "zod"
import { Role, VoucherType } from "@prisma/client"
import { id } from "../../validation"
import db from "../../../../db"

export default resolver.pipe(
  resolver.zod(
    object({
      categoryIds: array(id),
      setIds: array(id),
      productIds: array(id),

      name: string().max(20),
      code: string(),
      discountType: zod
        .enum(Object.values(VoucherType) as [string])
        .transform((v) => v as VoucherType),
      discount: number().positive(),
      amount: number().positive(),
      forRegistered: boolean(),

      maxUse: number().int().positive(),
      maxUseUser: number().int().positive(),
      startDate: date(),
      endDate: date(),
      active: boolean(),
    })
  ),
  resolver.authorize(Role.ADMIN),
  ({ categoryIds, setIds, productIds, ...data }) =>
    db.voucher.create({
      data: {
        ...data,
        categories: { connect: categoryIds.map((id) => ({ id })) },
        sets: { connect: setIds.map((id) => ({ id })) },
        products: { connect: productIds.map((id) => ({ id })) },
      },
    })
)
