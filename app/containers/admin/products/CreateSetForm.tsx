import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import createSet from "../../../db/products/mutations/createSet"
import { SetForm } from "../../../components/admin/products/SetForm"

export const CreateSetForm = () => {
  const [createSetMutation] = useMutation(createSet)
  const router = useRouter()
  const onSubmit = (v) => createSetMutation(v).then(router.reload)

  return <SetForm onSubmit={onSubmit} />
}
