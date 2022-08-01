import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { getCreateVoucherHistoryMessage } from "../../../../app/localization/admin"

const CreateVoucherHistoryPage = () => (
  <AdminLayout title={getCreateVoucherHistoryMessage()}>Create voucher history</AdminLayout>
)

export default CreateVoucherHistoryPage
