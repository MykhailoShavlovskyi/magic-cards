import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { CreateProductForm } from "../../../../app/containers/admin/products/CreateProductForm"
import { getCreateSetMessage } from "../../../../app/localization/admin"
import { getCreateMessage, getHomeMessage } from "../../../../app/localization/common"
import { getProductsMessage, getSetsMessage } from "../../../../app/localization/magic-cards"
import { CreateSetForm } from "../../../../app/containers/admin/products/CreateSetForm"

const CreateSetPage = () => (
  <AdminLayout title={getCreateSetMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getSetsMessage(), href: Routes.SetsPage() },
        { value: getCreateMessage() },
      ]}
    />
    <CreateSetForm />
  </AdminLayout>
)

export default CreateSetPage
