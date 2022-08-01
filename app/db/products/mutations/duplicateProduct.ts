import db from "../../../../db"
import { Role } from "@prisma/client"
import { resolver } from "@blitzjs/rpc"
import { id } from "../../validation"

export default resolver.pipe(resolver.zod(id), resolver.authorize(Role.ADMIN), async (id) => {
  // Get data
  const {
    id: _id,
    categoryId,
    setId,
    attributes,
    createdAt,
    updatedAt,
    ...data
  } = await db.product.findUnique({
    where: { id },
    include: { attributes: { select: { id: true } } },
    rejectOnNotFound: true,
  })

  // Create
  return db.product.create({
    data: {
      category: { connect: { id: categoryId } },
      set: { connect: { id: setId } },
      attributes: { connect: attributes.map((id) => id) },
      ...data,
    },
  })
})
