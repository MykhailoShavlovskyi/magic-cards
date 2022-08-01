import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import updateAttribute from "../../../db/products/mutations/updateAttribute"
import { Attribute } from "../../../../db"
import { AttributeForm } from "../../../components/admin/products/AttributeForm"

export const EditAttributeForm = ({ attribute }: { attribute: Attribute }) => {
  const [updateAttributeMutation] = useMutation(updateAttribute)
  const router = useRouter()
  const onSubmit = (v) => updateAttributeMutation(v).then(router.reload)

  return <AttributeForm attribute={attribute} onSubmit={onSubmit} />
}
