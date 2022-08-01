import { useMutation } from "@blitzjs/rpc"
import logout from "../../db/auth/mutations/logout"
import { StoreNav as StoreNavBase } from "../../components/store/StoreNav"

export const StoreNav = () => {
  const [logoutMutation] = useMutation(logout)
  return <StoreNavBase onLogOut={logoutMutation} />
}
