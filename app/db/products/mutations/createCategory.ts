import { resolver } from "@blitzjs/rpc"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { CreateProductCategory } from "../products.validation"

export default resolver.pipe(
  resolver.zod(CreateProductCategory),
  resolver.authorize(Role.ADMIN),
  (data) => db.productCategory.create({ data })
)
