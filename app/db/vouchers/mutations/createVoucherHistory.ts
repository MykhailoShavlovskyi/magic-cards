import { resolver } from "@blitzjs/rpc"
import { number, object } from "zod"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { id } from "app/db/validation"

export default resolver.pipe(
  resolver.zod(
    object({
      voucherId: id,
      orderId: id,
      amount: number().positive(),
    })
  ),
  resolver.authorize(Role.ADMIN),
  (data) => db.voucherHistory.create({ data })
)
