import { AdminLayout } from "../../app/layouts/AdminLayout"
import { AdminCards } from "../../app/components/admin/AdminCards"
import { Breadcrumb } from "../../app/components/Breadcrumb"
import { getAdminMessage, getHomeMessage } from "../../app/localization/common"

const AdminHomePage = () => (
  <AdminLayout title={getAdminMessage()}>
    <Breadcrumb items={[{ value: getHomeMessage() }]}></Breadcrumb>
    <AdminCards />
  </AdminLayout>
)

export default AdminHomePage
