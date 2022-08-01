import db, { VoucherHistory } from "../../../../../db"
import { AdminLayout } from "../../../../../app/layouts/AdminLayout"
import { GetServerSideProps } from "next"
import { Breadcrumb } from "../../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { EditVoucherHistoryForm } from "../../../../../app/containers/admin/vouchers/EditVoucherHistoryForm"
import { getEditVoucherHistoryMessage } from "../../../../../app/localization/admin"
import { getEditMessage, getHomeMessage } from "../../../../../app/localization/common"
import {
  getVoucherHistoriesMessage,
  getVouchersMessage,
} from "../../../../../app/localization/magic-cards"

const EditVoucherHistoryPage = ({ history }: { history: VoucherHistory }) => (
  <AdminLayout title={getEditVoucherHistoryMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getVouchersMessage(), href: Routes.AdminVouchersHomePage() },
        { value: getVoucherHistoriesMessage(), href: Routes.VoucherHistoriesPage() },
        { value: getEditMessage() },
      ]}
    />
    <EditVoucherHistoryForm history={history} />
    {JSON.stringify(history)}
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const history = await db.voucherHistory.findUnique({ where: { id: parsedId } })
  return { props: { history } }
}

export default EditVoucherHistoryPage
