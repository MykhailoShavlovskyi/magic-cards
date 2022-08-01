import db from "../../../../db"
import { Role } from "@prisma/client"
import { resolver } from "@blitzjs/rpc"
import { id } from "../../validation"

export default resolver.pipe(resolver.zod(id), resolver.authorize(Role.ADMIN), async (id) => {
  // Get data
  const {
    id: _id,
    products,
    customerId,
    currencyId,
    ...order
  } = await db.order.findUnique({
    where: { id },
    include: { products: { select: { id: true } } },
    rejectOnNotFound: true,
  })

  // Create
  return db.order.create({
    data: {
      products: { connect: products.map((id) => id) },
      customer: { connect: { id: customerId } },
      currency: { connect: { id: currencyId } },
      ...order,
    },
  })
})
