import { GetServerSideProps } from "next"
import db from "../../../../db"
import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { ProductSet } from "@prisma/client"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { SetsTable } from "../../../../app/containers/admin/products/SetsTable"
import { getHomeMessage } from "../../../../app/localization/common"
import { getProductsMessage, getSetsMessage } from "../../../../app/localization/magic-cards"

const SetsPage = ({ sets }: { sets: ProductSet[] }) => (
  <AdminLayout>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getSetsMessage() },
      ]}
    />
    <SetsTable sets={sets} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const sets = await db.productSet.findMany({ take: 100 })
  return { props: { sets } }
}

export default SetsPage
