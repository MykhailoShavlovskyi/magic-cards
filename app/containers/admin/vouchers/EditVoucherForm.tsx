import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import { VoucherForm } from "../../../components/admin/vouchers/VoucherForm"
import updateVoucher from "../../../db/vouchers/mutations/updateVoucher"

export const EditVoucherForm = () => {
  const [updateVoucherMutation] = useMutation(updateVoucher)
  const router = useRouter()
  const onSubmit = (v) => updateVoucherMutation(v).then(router.reload)

  return <VoucherForm onSubmit={onSubmit} />
}
