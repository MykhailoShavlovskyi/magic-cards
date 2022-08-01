import { useMutation } from "@blitzjs/rpc"
import { AdminNav as AdminNavBase } from "../../components/admin/AdminNav"
import logout from "../../db/auth/mutations/logout"

export const AdminNav = () => {
  const [logoutMutation] = useMutation(logout)
  return <AdminNavBase onLogOut={logoutMutation} />
}
