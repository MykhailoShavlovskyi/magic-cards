import { boolean, number, object, string } from "zod"

export const CreateCurrency = object({
  name: string(),
  primary: boolean(),
  rate: number(),
})
