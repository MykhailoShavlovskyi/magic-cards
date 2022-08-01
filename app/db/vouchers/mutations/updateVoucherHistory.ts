import { resolver } from "@blitzjs/rpc"
import { number, object } from "zod"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { id } from "../../validation"

export default resolver.pipe(
  resolver.zod(
    object({
      id,
      voucherId: id.optional(),
      orderId: id.optional(),
      amount: number().positive().optional(),
    })
  ),
  resolver.authorize(Role.ADMIN),
  ({ id, ...data }) => db.voucherHistory.update({ where: { id }, data })
)
