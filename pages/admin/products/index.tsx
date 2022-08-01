import { AdminLayout } from "../../../app/layouts/AdminLayout"
import { ProductCards } from "../../../app/components/admin/products/ProductCards"
import { Breadcrumb } from "../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { getProductsMessage } from "../../../app/localization/magic-cards"
import { getHomeMessage } from "../../../app/localization/common"

const AdminProductsHomePage = () => (
  <AdminLayout title={getProductsMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage() },
      ]}
    />
    <ProductCards />
  </AdminLayout>
)

export default AdminProductsHomePage
