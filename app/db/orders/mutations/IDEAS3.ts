import { Role } from "@prisma/client"
import { number, object, string } from "zod"
import db from "../../../../db"

const id = number().int().positive()
const GetCompany = object({})
const getCompany = object({})

const CreateCompany = object({})
const createCompany = object({})

const UpdateCompany = object({})
const updateCompany = object({})

const DeleteCompany = object({})
const deleteCompany = object({})

const GetProducts = object({})
const getProducts = object({})

const CreateProduct = object({})
const createProduct = object({})

const UpdateProduct = object({})
const updateProduct = object({})

const DeleteProduct = object({})
const deleteProduct = object({})

export default {
  // Companies
  getCompany: {
    auth: Role.USER,
    zod: GetCompany,
    query: getCompany,
  },
  createCompany: {
    auth: Role.ADMIN,
    zod: CreateCompany,
    mutation: createCompany,
  },
  updateCompany: {
    auth: Role.ADMIN,
    zod: UpdateCompany,
    mutation: updateCompany,
  },
  deleteCompany: {
    auth: Role.ADMIN,
    zod: DeleteCompany,
    mutation: deleteCompany,
  },

  // Products
  getProduct: {
    auth: Role.USER,
    zod: GetProducts,
    query: getProducts,
  },
  createProduct: {
    auth: Role.ADMIN,
    zod: CreateProduct,
    mutation: createProduct,
  },
  updateProduct: {
    auth: Role.ADMIN,
    zod: UpdateProduct,
    mutation: updateProduct,
  },
  deleteProduct: {
    auth: Role.ADMIN,
    zod: DeleteProduct,
    mutation: deleteProduct,
  },
}
