import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Routes } from "@blitzjs/next"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { CreateCurrencyForm } from "../../../../app/containers/admin/misc/CreateCurrencyForm"
import { getCreateCurrencyMessage } from "../../../../app/localization/admin"
import { getCreateMessage, getHomeMessage } from "../../../../app/localization/common"
import { getCurrenciesMessage } from "../../../../app/localization/magic-cards"

const CreateCurrencyPage = () => (
  <AdminLayout title={getCreateCurrencyMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getCurrenciesMessage(), href: Routes.CurrenciesPage() },
        { value: getCreateMessage() },
      ]}
    />
    <CreateCurrencyForm />
  </AdminLayout>
)

export default CreateCurrencyPage
