import db from "../../../../db"
import { Role } from "@prisma/client"
import { number, object, string } from "zod"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth: Role.ADMIN,
  zod: object({
    name: string(),
    age: number().int().positive(),
    description: string().optional(),
  }),
  mutation: (data) => db.order.create({ data }),
}

const pipe = {
  auth: [Role.ADMIN, Role.ADMIN],
  zod: number().int().positive(),
  query: (id) => db.order.findUnique({ where: { id } }),
}
