import { resolver } from "@blitzjs/rpc"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { CreateAttributeCategory } from "../products.validation"

export default resolver.pipe(
  resolver.zod(CreateAttributeCategory),
  resolver.authorize(Role.ADMIN),
  (data) => db.attributeCategory.create({ data })
)
