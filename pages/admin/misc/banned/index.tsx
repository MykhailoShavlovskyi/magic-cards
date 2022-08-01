import { GetServerSideProps } from "next"
import db from "../../../../db"
import { Banned } from "@prisma/client"
import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { BannedTable } from "../../../../app/containers/admin/misc/BannedTable"
import { getHomeMessage } from "../../../../app/localization/common"
import { getBannedMessage } from "../../../../app/localization/magic-cards"

const BannedPage = ({ banned }: { banned: Banned[] }) => (
  <AdminLayout>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getBannedMessage() },
      ]}
    />
    <BannedTable banned={banned} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const banned = await db.banned.findMany({ take: 100 })
  return { props: { banned } }
}

export default BannedPage
