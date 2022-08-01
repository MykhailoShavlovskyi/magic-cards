import { GetServerSideProps } from "next"
import db, { Voucher } from "../../../../../db"
import { AdminLayout } from "../../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { EditVoucherForm } from "../../../../../app/containers/admin/vouchers/EditVoucherForm"
import { getEditMessage, getHomeMessage } from "../../../../../app/localization/common"
import { getVouchersMessage } from "../../../../../app/localization/magic-cards"
import { getEditVoucherMessage } from "../../../../../app/localization/admin"

const EditVoucherPage = ({ voucher }: { voucher: Voucher }) => (
  <AdminLayout title={getEditVoucherMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getVouchersMessage(), href: Routes.AdminVouchersHomePage() },
        { value: getVouchersMessage(), href: Routes.VouchersPage() },
        { value: getEditMessage() },
      ]}
    />
    <EditVoucherForm />
    {JSON.stringify(voucher)}
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const voucher = await db.voucher.findUnique({ where: { id: parsedId } })
  return { props: { voucher } }
}

export default EditVoucherPage
