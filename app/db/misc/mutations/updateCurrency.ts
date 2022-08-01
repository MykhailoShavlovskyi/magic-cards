import { resolver } from "@blitzjs/rpc"
import { boolean, number, object } from "zod"
import { PrismaPromise, Role } from "@prisma/client"
import db from "../../../../db"
import { id } from "../../validation"

export default resolver.pipe(
  resolver.zod(
    object({
      id,
      primary: boolean().optional(),
      rate: number().optional(),
    })
  ),
  resolver.authorize(Role.ADMIN),
  async ({ id, ...data }) => {
    // Reset primary currency
    const update: PrismaPromise<any>[] = []
    if (data.primary) {
      const primary = await db.currency.findFirst({
        where: { primary: true },
        select: { id: true },
      })
      if (primary != null)
        update.push(db.currency.update({ where: { id: primary.id }, data: { primary: false } }))
    }

    // Update currency
    update.push(db.currency.update({ where: { id }, data }))
    const [currency] = await db.$transaction(update)

    return currency
  }
)
