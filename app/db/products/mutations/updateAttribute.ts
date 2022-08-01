import { resolver } from "@blitzjs/rpc"
import { object, string } from "zod"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { id } from "../../validation"

export default resolver.pipe(
  resolver.zod(
    object({
      id,
      name: string().optional(),
    })
  ),
  resolver.authorize(Role.ADMIN),
  ({ id, ...data }) => db.attribute.update({ where: { id }, data })
)
