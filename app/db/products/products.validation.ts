import { array, boolean, number, object, string } from "zod"
import { id } from "../validation"

export const CreateProductCategory = object({
  name: string().optional(),
  index: number().int().optional(),
})

export const CreateProductSet = object({
  name: string().optional(),
  index: number().int().optional(),
})

export const CreateProduct = object({
  categoryId: id,
  setId: id,
  attributeIds: array(id),

  isbn: string(),
  name: string().optional(),
  description: string().optional(),
  active: boolean().optional(),
  thumbnailKey: string(),

  defaultPrice: number().positive().optional(),
  regularPrice: number().positive().optional(),
  wholesalePrice: number().positive().optional(),
  defaultMinimumQuantity: number().int().positive().optional(),
  regularMinimumQuantity: number().int().positive().optional(),
  wholesaleMinimumQuantity: number().int().positive().optional(),

  length: number().positive().optional(),
  width: number().positive().optional(),
  height: number().positive().optional(),
  weight: number().positive().optional(),
  index: number().int().optional(),
})

export const CreateAttributeCategory = object({
  name: string().optional(),
  index: number().int().optional(),
})

export const CreateAttribute = object({
  categoryId: id,
  name: string().optional(),
})
