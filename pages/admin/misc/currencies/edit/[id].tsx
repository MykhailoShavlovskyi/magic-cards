import { GetServerSideProps } from "next"
import db, { Currency } from "../../../../../db"
import { AdminLayout } from "../../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { EditCurrencyForm } from "../../../../../app/containers/admin/misc/EditCurrencyForm"
import { getEditCurrencyMessage } from "../../../../../app/localization/admin"
import { getEditMessage, getHomeMessage } from "../../../../../app/localization/common"
import { getCurrenciesMessage } from "../../../../../app/localization/magic-cards"

const EditCurrencyPage = ({ currency }: { currency: Currency }) => (
  <AdminLayout title={getEditCurrencyMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getCurrenciesMessage(), href: Routes.CurrenciesPage() },
        { value: getEditMessage() },
      ]}
    />
    <EditCurrencyForm currency={currency} />
    {JSON.stringify(currency)}
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const currency = await db.currency.findUnique({ where: { id: parsedId } })
  return { props: { currency } }
}

export default EditCurrencyPage
