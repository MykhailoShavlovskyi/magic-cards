import { GetServerSideProps } from "next"
import db, { VoucherHistory } from "../../../../db"
import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { VoucherHistoriesTable } from "../../../../app/containers/admin/vouchers/VoucherHistoriesTable"
import { getHomeMessage } from "../../../../app/localization/common"
import {
  getVoucherHistoriesMessage,
  getVouchersMessage,
} from "../../../../app/localization/magic-cards"

const VoucherHistoriesPage = ({ histories }: { histories: VoucherHistory[] }) => (
  <AdminLayout>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getVouchersMessage(), href: Routes.AdminVouchersHomePage() },
        { value: getVoucherHistoriesMessage() },
      ]}
    />
    <VoucherHistoriesTable histories={histories} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const histories = await db.voucherHistory.findMany({ take: 100 })
  return {
    props: {
      histories: histories.map(({ createdAt, ...v }) => ({
        createdAt: createdAt.toString(),
        ...v,
      })),
    },
  }
}

export default VoucherHistoriesPage
