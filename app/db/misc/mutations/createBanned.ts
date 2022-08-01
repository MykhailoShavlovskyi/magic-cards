import { resolver } from "@blitzjs/rpc"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { ip } from "../../validation"

export default resolver.pipe(resolver.zod(ip), resolver.authorize(Role.ADMIN), (ip) =>
  db.banned.create({ data: { ip } })
)
