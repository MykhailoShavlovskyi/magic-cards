import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { CreateProductForm } from "../../../../app/containers/admin/products/CreateProductForm"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { getCreateProductMessage } from "../../../../app/localization/admin"
import { getCreateMessage, getHomeMessage } from "../../../../app/localization/common"
import { getProductsMessage } from "../../../../app/localization/magic-cards"

const CreateProductPage = () => (
  <AdminLayout title={getCreateProductMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsPage() },
        { value: getCreateMessage() },
      ]}
    />
    <CreateProductForm />
  </AdminLayout>
)

export default CreateProductPage
