import { AdminLayout } from "../../../app/layouts/AdminLayout"
import { VoucherCards } from "../../../app/components/admin/vouchers/VoucherCards"
import { Breadcrumb } from "../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { getVouchersMessage } from "../../../app/localization/magic-cards"
import { getHomeMessage } from "../../../app/localization/common"

const AdminVouchersHomePage = () => (
  <AdminLayout title={getVouchersMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getVouchersMessage() },
      ]}
    />
    <VoucherCards />
  </AdminLayout>
)

export default AdminVouchersHomePage
