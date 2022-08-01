import { resolver } from "@blitzjs/rpc"
import { number, object, string } from "zod"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { id } from "../../validation"

export default resolver.pipe(
  resolver.zod(
    object({
      id,
      name: string().optional(),
      index: number().int().optional(),
    })
  ),
  resolver.authorize(Role.ADMIN),
  ({ id, ...data }) => db.productSet.update({ where: { id }, data })
)
