import db from "../../../../db"
import { Role } from "@prisma/client"
import { resolver } from "@blitzjs/rpc"
import { id } from "../../validation"

export default resolver.pipe(resolver.zod(id), resolver.authorize(Role.ADMIN), async (id) => {
  const {
    id: _id,
    createdAt,
    ...data
  } = await db.voucherHistory.findUnique({
    where: { id },
    rejectOnNotFound: true,
  })
  return db.voucherHistory.create({ data })
})
