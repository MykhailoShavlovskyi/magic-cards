import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { AttributeForm } from "../../../components/admin/products/AttributeForm"
import createAttribute from "../../../db/products/mutations/createAttribute"

export const CreateAttributeForm = () => {
  const [createAttributeMutation] = useMutation(createAttribute)
  const router = useRouter()
  const onSubmit = (v) => createAttributeMutation(v).then(router.reload)

  return <AttributeForm onSubmit={onSubmit} />
}
