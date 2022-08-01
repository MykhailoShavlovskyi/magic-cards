import db from "../../../../db"
import { Role } from "@prisma/client"
import { resolver } from "@blitzjs/rpc"
import { id } from "../../validation"

export default resolver.pipe(resolver.zod(id), resolver.authorize(Role.ADMIN), async (id) => {
  // Get data
  const {
    id: _id,
    createdAt,
    categories,
    sets,
    products,
    ...data
  } = await db.voucher.findUnique({
    where: { id },
    include: {
      categories: { select: { id: true } },
      sets: { select: { id: true } },
      products: { select: { id: true } },
    },
    rejectOnNotFound: true,
  })

  // Create
  return db.voucher.create({
    data: {
      categories: { connect: categories.map((id) => id) },
      sets: { connect: sets.map((id) => id) },
      products: { connect: products.map((id) => id) },
      ...data,
    },
  })
})
