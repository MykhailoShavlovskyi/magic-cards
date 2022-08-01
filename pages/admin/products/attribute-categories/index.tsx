import { GetServerSideProps } from "next"
import db from "../../../../db"
import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { AttributeCategory } from "@prisma/client"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { AttributeCategoriesTable } from "../../../../app/containers/admin/products/AttributeCategoriesTable"
import {
  getAttributeCategoriesMessage,
  getProductsMessage,
} from "../../../../app/localization/magic-cards"
import { getHomeMessage } from "../../../../app/localization/common"

const AttributeCategoriesPage = ({ categories }: { categories: AttributeCategory[] }) => (
  <AdminLayout>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getAttributeCategoriesMessage() },
      ]}
    />
    <AttributeCategoriesTable categories={categories} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await db.attributeCategory.findMany({ take: 100 })
  return { props: { categories } }
}

export default AttributeCategoriesPage
