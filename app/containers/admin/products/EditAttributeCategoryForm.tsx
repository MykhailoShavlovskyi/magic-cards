import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { AttributeCategory } from "@prisma/client"
import updateAttributeCategory from "../../../db/products/mutations/updateAttributeCategory"
import { AttributeCategoryForm } from "../../../components/admin/products/AttributeCategoryForm"

export const EditAttributeCategoryForm = ({ category }: { category: AttributeCategory }) => {
  const [updateAttributeCategoryMutation] = useMutation(updateAttributeCategory)
  const router = useRouter()
  const onSubmit = (v) => updateAttributeCategoryMutation(v).then(router.reload)

  return <AttributeCategoryForm category={category} onSubmit={onSubmit} />
}
