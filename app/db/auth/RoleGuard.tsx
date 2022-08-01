import { PropsWithChildren } from "react"
import { Role } from "@prisma/client"
import { useSession } from "@blitzjs/auth"

export const RoleGuard = ({ role, children }: PropsWithChildren<{ role: Role }>) => {
  return <>{children}</>
  //return role === useSession().role ? <>{children}</> : <></>
}
