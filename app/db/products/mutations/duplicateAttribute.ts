import db from "../../../../db"
import { Role } from "@prisma/client"
import { resolver } from "@blitzjs/rpc"
import { id } from "../../validation"

export default resolver.pipe(resolver.zod(id), resolver.authorize(Role.ADMIN), async (id) => {
  // Get data
  const {
    id: _id,
    categoryId,
    products,
    ...attribute
  } = await db.attribute.findUnique({
    where: { id },
    include: { products: { select: { id: true } } },
    rejectOnNotFound: true,
  })

  // Create
  return db.attribute.create({
    data: {
      category: { connect: { id: categoryId } },
      products: { connect: products.map((id) => id) },
      ...attribute,
    },
  })
})
