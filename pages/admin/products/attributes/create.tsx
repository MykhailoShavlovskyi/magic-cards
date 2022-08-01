import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { CreateProductForm } from "../../../../app/containers/admin/products/CreateProductForm"
import { getCreateAttributeMessage } from "../../../../app/localization/admin"
import { getCreateMessage, getHomeMessage } from "../../../../app/localization/common"
import { getAttributesMessage, getProductsMessage } from "../../../../app/localization/magic-cards"
import { CreateAttributeForm } from "../../../../app/containers/admin/products/CreateAttributeForm"

const CreateAttributePage = () => (
  <AdminLayout title={getCreateAttributeMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getAttributesMessage(), href: Routes.AttributesPage() },
        { value: getCreateMessage() },
      ]}
    />
    <CreateAttributeForm />
  </AdminLayout>
)

export default CreateAttributePage
