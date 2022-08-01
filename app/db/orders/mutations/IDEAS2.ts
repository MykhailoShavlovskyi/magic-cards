import { Role } from "@prisma/client"
import { number, object, string } from "zod"
import db from "../../../../db"

const id = number().int().positive()

// @ts-ignore
//@Pipes()
export default {
  // Companies
  getCompany: {
    auth: Role.USER,
    zod: id,
    query: (id) => db.productCategory.findUnique({ where: { id }, rejectOnNotFound: true }),
  },
  createCompany: {
    auth: Role.ADMIN,
    zod: object({
      name: string(),
      index: number(),
    }),
    mutation: (data) => db.productCategory.create({ data }),
  },
  updateCompany: {
    auth: Role.ADMIN,
    zod: object({
      name: string().optional(),
      index: number().optional(),
    }),
    mutation: (data) => db.productCategory.create({ data }),
  },
  deleteCompany: {
    auth: Role.ADMIN,
    zod: id,
    mutation: (id) => db.productCategory.delete({ where: { id } }),
  },

  // Products
  getProducts: {
    auth: Role.USER,
    zod: id,
    query: (id) => db.productSet.findMany({ where: { id } }),
  },
  createProduct: {
    auth: Role.ADMIN,
    zod: object({
      name: string(),
      index: number(),
    }),
    mutation: (data) => db.productSet.create({ data }),
  },
  updateProduct: {
    auth: Role.ADMIN,
    zod: object({
      name: string().optional(),
      index: number().optional(),
    }),
    mutation: (data) => db.productSet.create({ data }),
  },
  deleteProduct: {
    auth: Role.ADMIN,
    zod: id,
    mutation: (id) => db.productSet.delete({ where: { id } }),
  },
}
