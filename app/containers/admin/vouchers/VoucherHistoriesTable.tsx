import { VoucherHistory } from "@prisma/client"
import { useMutation } from "@blitzjs/rpc"
import { VoucherHistoriesTable as VoucherHistoriesTableBase } from "../../../components/admin/vouchers/VoucherHistoriesTable"
import duplicateVoucherHistory from "../../../db/vouchers/mutations/duplicateVoucherHistory"
import deleteVoucherHistory from "../../../db/vouchers/mutations/deleteVoucherHistory"

export const VoucherHistoriesTable = ({ histories }: { histories: VoucherHistory[] }) => {
  const [duplicateVoucherHistorieMutation] = useMutation(duplicateVoucherHistory)
  const [deleteVoucherHistorieMutation] = useMutation(deleteVoucherHistory)
  return (
    <VoucherHistoriesTableBase
      histories={histories}
      onDuplicate={duplicateVoucherHistorieMutation}
      onDelete={deleteVoucherHistorieMutation}
    />
  )
}
