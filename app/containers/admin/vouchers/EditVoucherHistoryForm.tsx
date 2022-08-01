import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import updateVoucherHistory from "../../../db/vouchers/mutations/updateVoucherHistory"
import { VoucherHistoryForm } from "../../../components/admin/vouchers/VoucherHistoryForm"
import { VoucherHistory } from "../../../../db"

export const EditVoucherHistoryForm = ({ history }: { history: VoucherHistory }) => {
  const [updateVoucherHistoryMutation] = useMutation(updateVoucherHistory)
  const router = useRouter()
  const onSubmit = (v) => updateVoucherHistoryMutation(v).then(router.reload)

  return <VoucherHistoryForm history={history} onSubmit={onSubmit} />
}
