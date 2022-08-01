import { ProductCategory } from "@prisma/client"
import { useMutation } from "@blitzjs/rpc"
import duplicateCategory from "../../../db/products/mutations/duplicateCategory"
import deleteCategory from "../../../db/products/mutations/deleteCategory"
import { CategoriesTable as CategoriesTableBase } from "../../../components/admin/products/CategoriesTable"

export const CategoriesTable = ({ categories }: { categories: ProductCategory[] }) => {
  const [duplicateCategoryMutation] = useMutation(duplicateCategory)
  const [deleteCategoryMutation] = useMutation(deleteCategory)
  return (
    <>
      <CategoriesTableBase
        categories={categories}
        onDuplicate={duplicateCategoryMutation}
        onDelete={deleteCategoryMutation}
      />
    </>
  )
}
