import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { CreateProductForm } from "../../../../app/containers/admin/products/CreateProductForm"
import { getCreateAttributeCategoryMessage } from "../../../../app/localization/admin"
import { getCreateMessage, getHomeMessage } from "../../../../app/localization/common"
import {
  getAttributeCategoriesMessage,
  getProductsMessage,
} from "../../../../app/localization/magic-cards"
import { CreateAttributeCategoryForm } from "../../../../app/containers/admin/products/CreateAttributeCategoryForm"

const CreateAttributeCategoryPage = () => (
  <AdminLayout title={getCreateAttributeCategoryMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getAttributeCategoriesMessage(), href: Routes.AttributeCategoriesPage() },
        { value: getCreateMessage() },
      ]}
    />
    <CreateAttributeCategoryForm />
  </AdminLayout>
)
export default CreateAttributeCategoryPage
