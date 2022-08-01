import { Voucher } from "@prisma/client"
import { VouchersTable as VouchersTableBase } from "../../../components/admin/vouchers/VouchersTable"
import { useMutation } from "@blitzjs/rpc"
import duplicateVoucher from "../../../db/vouchers/mutations/duplicateVoucher"
import deleteVoucher from "../../../db/vouchers/mutations/deleteVoucher"

export const VouchersTable = ({ vouchers }: { vouchers: Voucher[] }) => {
  const [duplicateVoucherMutation] = useMutation(duplicateVoucher)
  const [deleteVoucherMutation] = useMutation(deleteVoucher)
  return (
    <VouchersTableBase
      vouchers={vouchers}
      onDuplicate={duplicateVoucherMutation}
      onDelete={deleteVoucherMutation}
    />
  )
}
