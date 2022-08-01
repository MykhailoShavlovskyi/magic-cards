import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { ProductSet } from "@prisma/client"
import updateSet from "../../../db/products/mutations/updateSet"
import { SetForm } from "../../../components/admin/products/SetForm"

export const EditSetForm = ({ set }: { set: ProductSet }) => {
  const [updateSetMutation] = useMutation(updateSet)
  const router = useRouter()
  const onSubmit = (v) => updateSetMutation(v).then(router.reload)

  return <SetForm set={set} onSubmit={onSubmit} />
}
