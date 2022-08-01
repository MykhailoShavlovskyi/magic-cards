import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import createVoucher from "../../../db/vouchers/mutations/createVoucher"
import { VoucherForm } from "../../../components/admin/vouchers/VoucherForm"

export const CreateVoucherForm = () => {
  const [createVoucherMutation] = useMutation(createVoucher)
  const router = useRouter()
  const onSubmit = (v) => createVoucherMutation(v).then(router.reload)

  return <VoucherForm onSubmit={onSubmit} />
}
