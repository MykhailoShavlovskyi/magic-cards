import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import createCategory from "../../../db/products/mutations/createCategory"
import { CategoryForm } from "../../../components/admin/products/CategoryForm"

export const CreateCategoryForm = () => {
  const [createCategoryMutation] = useMutation(createCategory)
  const router = useRouter()
  const onSubmit = (v) => createCategoryMutation(v).then(router.reload)

  return <CategoryForm onSubmit={onSubmit} />
}
