import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { CreateVoucherForm } from "../../../../app/containers/admin/vouchers/CreateVoucherForm"
import { getCreateMessage, getHomeMessage } from "../../../../app/localization/common"
import { getVouchersMessage } from "../../../../app/localization/magic-cards"
import { getCreateVoucherMessage } from "../../../../app/localization/admin"

const CreateVoucherPage = () => (
  <AdminLayout title={getCreateVoucherMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getVouchersMessage(), href: Routes.AdminVouchersHomePage() },
        { value: getVouchersMessage(), href: Routes.VouchersPage() },
        { value: getCreateMessage() },
      ]}
    />
    <CreateVoucherForm />
  </AdminLayout>
)

export default CreateVoucherPage
