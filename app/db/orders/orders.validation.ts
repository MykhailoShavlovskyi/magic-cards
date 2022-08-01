import { array, boolean, number, object, string } from "zod"
import { id, ip } from "../validation"
import * as zod from "zod"
import { OrderStatus, Payment } from "@prisma/client"

export const CreateOrder = object({
  customerId: id,
  currencyId: id,
  productIds: array(id),
  voucherId: id.optional(),

  firstName: string().min(1).max(20),
  lastName: string().min(1).max(20),
  email: string().email().max(20),
  phone: string().max(20),
  telegram: string().max(20),
  address: string().max(20),

  total: number(),
  payment: zod.enum(Object.values(Payment) as [string]).transform((v) => v as Payment),
  discount: number(),

  ip,
  comment: string().max(1000),
  status: zod.enum(Object.values(OrderStatus) as [string]).transform((v) => v as OrderStatus),
})
