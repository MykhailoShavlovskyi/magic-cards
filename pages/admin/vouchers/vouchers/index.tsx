import { GetServerSideProps } from "next"
import db, { Voucher } from "../../../../db"
import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { VouchersTable } from "../../../../app/containers/admin/vouchers/VouchersTable"
import { getHomeMessage } from "../../../../app/localization/common"
import { getVouchersMessage } from "../../../../app/localization/magic-cards"

const VouchersPage = ({ vouchers }: { vouchers: Voucher[] }) => (
  <AdminLayout>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getVouchersMessage(), href: Routes.AdminVouchersHomePage() },
        { value: getVouchersMessage() },
      ]}
    />
    <VouchersTable vouchers={vouchers} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const vouchers = await db.voucher.findMany({ take: 100 })
  return {
    props: {
      vouchers: vouchers.map(({ createdAt, startDate, endDate, ...v }) => ({
        createdAt: createdAt.toString(),
        startDate: startDate.toString(),
        endDate: endDate.toString(),
        ...v,
      })),
    },
  }
}

export default VouchersPage
