import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import createAttributeCategory from "../../../db/products/mutations/createAttributeCategory"
import { AttributeCategoryForm } from "../../../components/admin/products/AttributeCategoryForm"

export const CreateAttributeCategoryForm = () => {
  const [createAttributeCategoryMutation] = useMutation(createAttributeCategory)
  const router = useRouter()
  const onSubmit = (v) => createAttributeCategoryMutation(v).then(router.reload)

  return <AttributeCategoryForm onSubmit={onSubmit} />
}
