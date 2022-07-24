import { SimpleRolesIsAuthorized } from "@blitzjs/auth"
import { User } from "db"
import { Role } from "@prisma/client"

declare module "@blitzjs/auth" {
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>
    PublicData: {
      userId: User["id"]
      role: Role
      views?: number
    }
  }
}
