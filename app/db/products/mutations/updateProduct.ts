import db from "db"
import { resolver } from "@blitzjs/rpc"
import { array, boolean, number, object, string } from "zod"
import { id } from "../../validation"
import { Role } from "@prisma/client"
import { xor } from "lodash"

export default resolver.pipe(
  resolver.zod(
    object({
      id,

      categoryId: id.optional(),
      setId: id.optional(),
      attributeIds: array(id).optional(),

      isbn: string().optional(),
      name: string().optional(),
      description: string().optional(),
      active: boolean().optional(),
      thumbnailKey: string().optional(),

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
  ),
  resolver.authorize(Role.ADMIN),
  async ({ id, categoryId, setId, attributeIds, ...data }) => {
    // Get data
    const product = await db.product.findUnique({
      where: { id },
      select: { attributes: { select: { id: true } } },
      rejectOnNotFound: true,
    })
    const currentAttributeIds = product.attributes.map((v) => v.id)
    const addedAttributes = xor(currentAttributeIds, attributeIds)
    const removedAttributes = xor(attributeIds, currentAttributeIds)

    // Update
    return db.product.update({
      where: { id },
      data: {
        category: { connect: { id: categoryId } },
        set: { connect: { id: setId } },
        attributes: {
          connect: addedAttributes.map((id) => ({ id })),
          disconnect: removedAttributes.map((id) => ({ id })),
        },
        ...data,
      },
    })
  }
)
