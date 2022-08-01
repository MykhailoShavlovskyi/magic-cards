import { AdminLayout } from "../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { CreateOrderForm } from "../../../app/containers/admin/orders/CreateOrderForm"
import { getCreateOrderMessage } from "../../../app/localization/admin"
import { getCreateMessage, getHomeMessage } from "../../../app/localization/common"
import { getOrdersMessage } from "../../../app/localization/magic-cards"

const CreateOrderPage = () => (
  <AdminLayout title={getCreateOrderMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getOrdersMessage(), href: Routes.OrdersPage() },
        { value: getCreateMessage() },
      ]}
    />
    <CreateOrderForm />
  </AdminLayout>
)

export default CreateOrderPage
