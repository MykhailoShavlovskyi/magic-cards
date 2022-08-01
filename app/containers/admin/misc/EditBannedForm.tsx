import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import updateBanned from "../../../db/misc/mutations/updateBanned"
import { BannedForm } from "../../../components/admin/misc/BannedForm"
import { Banned } from "@prisma/client"

export const EditBannedForm = ({ banned }: { banned: Banned }) => {
  const [updateBannedMutation] = useMutation(updateBanned)
  const router = useRouter()
  const onSubmit = (v) => updateBannedMutation(v).then(router.reload)

  return <BannedForm banned={banned} onSubmit={onSubmit} />
}
