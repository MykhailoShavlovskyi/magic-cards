import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { getCreateMessage, getHomeMessage } from "../../../../app/localization/common"
import { getCategoriesMessage, getProductsMessage } from "../../../../app/localization/magic-cards"
import { getCreateCategoryMessage } from "../../../../app/localization/admin"
import { CreateCategoryForm } from "../../../../app/containers/admin/products/CreateCategoryForm"

const CreateCategoryPage = () => (
  <AdminLayout title={getCreateCategoryMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getCategoriesMessage(), href: Routes.AdminCategoriesPage() },
        { value: getCreateMessage() },
      ]}
    />
    <CreateCategoryForm />
  </AdminLayout>
)

export default CreateCategoryPage
