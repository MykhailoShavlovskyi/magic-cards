import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import createVoucherHistory from "../../../db/vouchers/mutations/createVoucherHistory"
import { VoucherHistoryForm } from "../../../components/admin/vouchers/VoucherHistoryForm"

export const CreateVoucherHistoryForm = () => {
  const [createVoucherHistoryMutation] = useMutation(createVoucherHistory)
  const router = useRouter()
  const onSubmit = (v) => createVoucherHistoryMutation(v).then(router.reload)

  return <VoucherHistoryForm onSubmit={onSubmit} />
}
