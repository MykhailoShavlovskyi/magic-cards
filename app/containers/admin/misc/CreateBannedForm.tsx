import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import createBanned from "../../../db/misc/mutations/createBanned"
import { BannedForm } from "../../../components/admin/misc/BannedForm"

export const CreateBannedForm = () => {
  const [createBannedMutation] = useMutation(createBanned)
  const router = useRouter()
  const onSubmit = (v) => createBannedMutation(v).then(router.reload)

  return <BannedForm onSubmit={onSubmit} />
}
