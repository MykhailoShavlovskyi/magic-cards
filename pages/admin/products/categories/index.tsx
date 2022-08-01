import { GetServerSideProps } from "next"
import db from "../../../../db"
import { ProductCategory } from "@prisma/client"
import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { CategoriesTable } from "../../../../app/containers/admin/products/CategoriesTable"
import { getHomeMessage } from "../../../../app/localization/common"
import { getCategoriesMessage, getProductsMessage } from "../../../../app/localization/magic-cards"

const AdminCategoriesPage = ({ categories }: { categories: ProductCategory[] }) => (
  <AdminLayout>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getCategoriesMessage() },
      ]}
    />
    <CategoriesTable categories={categories} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await db.productCategory.findMany({ take: 100 })
  return { props: { categories } }
}

export default AdminCategoriesPage
