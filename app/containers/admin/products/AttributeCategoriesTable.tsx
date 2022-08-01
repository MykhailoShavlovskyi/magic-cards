import { AttributeCategoriesTable as AttributeCategoriesTableBase } from "../../../components/admin/products/AttributeCategoriesTable"
import { AttributeCategory } from "@prisma/client"
import { useMutation } from "@blitzjs/rpc"
import duplicateAttributeCategory from "../../../db/products/mutations/duplicateAttributeCategory"
import deleteAttributeCategory from "../../../db/products/mutations/deleteAttributeCategory"

export const AttributeCategoriesTable = ({ categories }: { categories: AttributeCategory[] }) => {
  const [duplicateAttributeCategoryMutation] = useMutation(duplicateAttributeCategory)
  const [deleteAttributeCategoryMutation] = useMutation(deleteAttributeCategory)
  return (
    <>
      <AttributeCategoriesTableBase
        categories={categories}
        onDuplicate={duplicateAttributeCategoryMutation}
        onDelete={deleteAttributeCategoryMutation}
      />
    </>
  )
}
