import db from "db"
import { resolver } from "@blitzjs/rpc"
import { Role } from "@prisma/client"
import { CreateProduct } from "../products.validation"

export default resolver.pipe(
  resolver.zod(CreateProduct),
  resolver.authorize(Role.ADMIN),
  ({ categoryId, setId, attributeIds, ...data }) =>
    db.product.create({
      data: {
        category: { connect: { id: categoryId } },
        set: { connect: { id: setId } },
        attributes: { connect: attributeIds.map((id) => ({ id })) },
        ...data,
      },
    })
)
