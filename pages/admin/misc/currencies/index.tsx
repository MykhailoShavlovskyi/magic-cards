import { GetServerSideProps } from "next"
import db, { Currency } from "../../../../db"
import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { CurrenciesTable } from "../../../../app/containers/admin/misc/CurrenciesTable"
import { getCurrenciesMessage } from "../../../../app/localization/magic-cards"
import { getHomeMessage } from "../../../../app/localization/common"

const CurrenciesPage = ({ currencies }: { currencies: Currency[] }) => (
  <AdminLayout title={getCurrenciesMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getCurrenciesMessage() },
      ]}
    />
    <CurrenciesTable currencies={currencies} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const currencies = await db.currency.findMany({ take: 100 })
  return { props: { currencies } }
}

export default CurrenciesPage
