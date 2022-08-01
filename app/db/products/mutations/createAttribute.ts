import { resolver } from "@blitzjs/rpc"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { CreateAttribute } from "../products.validation"

export default resolver.pipe(
  resolver.zod(CreateAttribute),
  resolver.authorize(Role.ADMIN),
  (data) => db.attribute.create({ data })
)
