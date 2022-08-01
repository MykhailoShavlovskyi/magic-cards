import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Routes } from "@blitzjs/next"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { CreateBannedForm } from "../../../../app/containers/admin/misc/CreateBannedForm"
import { getCreateMessage, getHomeMessage } from "../../../../app/localization/common"
import { getBannedMessage } from "../../../../app/localization/magic-cards"
import { getCreateBannedMessage } from "../../../../app/localization/admin"

const CreateBannedPage = () => (
  <AdminLayout title={getCreateBannedMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getBannedMessage(), href: Routes.BannedPage() },
        { value: getCreateMessage() },
      ]}
    />
    <CreateBannedForm />
  </AdminLayout>
)

export default CreateBannedPage
