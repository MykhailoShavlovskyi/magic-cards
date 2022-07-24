import { useQuery } from "@blitzjs/rpc"
import getCurrentUser from "app/data/auth/queries/getCurrentUser"

export const useCurrentUser = () => {
  const [user] = useQuery(getCurrentUser, null)
  return user
}
