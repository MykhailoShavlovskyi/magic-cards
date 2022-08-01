import { resolver } from "@blitzjs/rpc"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { id } from "../../validation"
import { array } from "zod"

export default resolver.pipe(resolver.zod(array(id)), resolver.authorize(Role.ADMIN), (ids) =>
  db.attribute.deleteMany({ where: { id: { in: ids } } })
)
