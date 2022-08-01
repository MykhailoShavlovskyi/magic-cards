import { resolver } from "@blitzjs/rpc"
import { PrismaPromise, Role } from "@prisma/client"
import db from "../../../../db"
import { CreateCurrency } from "../misc.validation"

export default resolver.pipe(
  resolver.zod(CreateCurrency),
  resolver.authorize(Role.ADMIN),
  async (data) => {
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

    // Create currency
    update.push(db.currency.create({ data }))
    const [currency] = await db.$transaction(update)

    return currency
  }
)
