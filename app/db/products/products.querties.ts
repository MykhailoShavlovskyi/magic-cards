import db from "../../../db"
import { Product } from "@prisma/client"

export type ResolvedProduct = Omit<Product, "createdAt" | "updatedAt"> & {
  attributeIds: number[]
  createdAt: string
  updatedAt: string
}

export async function getProducts(): Promise<ResolvedProduct[]> {
  let products = await db.product.findMany({ include: { attributes: { select: { id: true } } } })

  return products.map(({ createdAt, updatedAt, attributes, ...rest }) => ({
    ...rest,
    attributeIds: attributes.map((v) => v.id),
    createdAt: createdAt.toString(),
    updatedAt: updatedAt.toString(),
  }))
}
