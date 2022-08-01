import db from "../../../../db"
import { Role } from "@prisma/client"
import { resolver } from "@blitzjs/rpc"
import { id } from "../../validation"

export default resolver.pipe(resolver.zod(id), resolver.authorize(Role.ADMIN), async (id) => {
  const { id: _id, ...data } = await db.attributeCategory.findUnique({
    where: { id },
    rejectOnNotFound: true,
  })
  return db.attributeCategory.create({ data })
})
