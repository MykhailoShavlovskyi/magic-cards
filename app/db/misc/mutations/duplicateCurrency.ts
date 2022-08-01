import { resolver } from "@blitzjs/rpc"
import { Role } from "@prisma/client"
import db from "../../../../db"
import { id } from "../../validation"

export default resolver.pipe(resolver.zod(id), resolver.authorize(Role.ADMIN), async (id) => {
  const currency = await db.currency.findUnique({ where: { id }, rejectOnNotFound: true })
  return db.currency.create({ data: { ...currency, primary: false } })
})
