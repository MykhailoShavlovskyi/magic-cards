import { resolver } from "@blitzjs/rpc"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { CreateProductSet } from "../products.validation"

export default resolver.pipe(
  resolver.zod(CreateProductSet),
  resolver.authorize(Role.ADMIN),
  (data) => db.productSet.create({ data })
)
