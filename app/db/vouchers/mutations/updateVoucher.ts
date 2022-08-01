import { resolver } from "@blitzjs/rpc"
import { array, boolean, date, number, object, string } from "zod"
import { Role, VoucherType } from "@prisma/client"
import db from "../../../../db"
import { id } from "../../validation"
import * as zod from "zod"
import { xor } from "lodash"

export default resolver.pipe(
  resolver.zod(
    object({
      id,

      categoryIds: array(id).optional(),
      setIds: array(id).optional(),
      productIds: array(id).optional(),

      name: string().max(20).optional(),
      code: string().optional(),
      discountType: zod
        .enum(Object.values(VoucherType) as [string])
        .transform((v) => v as VoucherType)
        .optional(),
      discount: number().positive().optional(),
      amount: number().positive().optional(),
      forRegistered: boolean().optional(),

      maxUse: number().int().positive().optional(),
      maxUseUser: number().int().positive().optional(),
      startDate: date().optional(),
      endDate: date().optional(),
      active: boolean().optional(),
    })
  ),
  resolver.authorize(Role.ADMIN),
  async ({ id, categoryIds, setIds, productIds, ...data }) => {
    // Get voucher
    const voucher = await db.voucher.findUnique({
      where: { id },
      rejectOnNotFound: true,
      select: {
        categories: { select: { id: true } },
        sets: { select: { id: true } },
        products: { select: { id: true } },
      },
    })

    // Prepare data
    let addedCategories: number[] = []
    let removedCategories: number[] = []
    if (categoryIds) {
      const currentCategoryIds = voucher.categories.map((v) => v.id)
      addedCategories = xor(currentCategoryIds, categoryIds)
      removedCategories = xor(categoryIds, currentCategoryIds)
    }
    let addedSets: number[] = []
    let removedSets: number[] = []
    if (setIds) {
      const currentSetIds = voucher.categories.map((v) => v.id)
      addedSets = xor(currentSetIds, setIds)
      removedSets = xor(setIds, currentSetIds)
    }
    let addedProducts: number[] = []
    let removedProducts: number[] = []
    if (productIds) {
      const currentProductIds = voucher.categories.map((v) => v.id)
      addedProducts = xor(currentProductIds, productIds)
      removedProducts = xor(productIds, currentProductIds)
    }

    // Update
    return db.voucher.update({
      where: { id },
      data: {
        categories: {
          connect: addedCategories.map((id) => ({ id })),
          disconnect: removedCategories.map((id) => ({ id })),
        },
        sets: {
          connect: addedSets.map((id) => ({ id })),
          disconnect: removedSets.map((id) => ({ id })),
        },
        products: {
          connect: addedProducts.map((id) => ({ id })),
          disconnect: removedProducts.map((id) => ({ id })),
        },
        ...data,
      },
    })
  }
)
