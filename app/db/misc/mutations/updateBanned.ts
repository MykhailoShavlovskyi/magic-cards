import { resolver } from "@blitzjs/rpc"
import { object } from "zod"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { id, ip } from "../../validation"

export default resolver.pipe(
  resolver.zod(object({ id, ip })),
  resolver.authorize(Role.ADMIN),
  ({ id, ...data }) => db.banned.update({ where: { id }, data })
)
