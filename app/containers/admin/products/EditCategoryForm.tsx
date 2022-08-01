import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { ProductCategory } from "@prisma/client"
import updateCategory from "../../../db/products/mutations/updateCategory"
import { CategoryForm } from "../../../components/admin/products/CategoryForm"

export const EditCategoryForm = ({ category }: { category: ProductCategory }) => {
  const [updateCategoryMutation] = useMutation(updateCategory)
  const router = useRouter()
  const onSubmit = (v) => updateCategoryMutation(v).then(router.reload)

  return <CategoryForm category={category} onSubmit={onSubmit} />
}
