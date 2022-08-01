import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import updateCurrency from "../../../db/misc/mutations/updateCurrency"
import { CurrencyForm } from "../../../components/admin/misc/CurrencyForm"
import { Currency } from "@prisma/client"

export const EditCurrencyForm = ({ currency }: { currency: Currency }) => {
  const [updateCurrencyMutation] = useMutation(updateCurrency)
  const router = useRouter()
  const onSubmit = (v) => updateCurrencyMutation(v).then(router.reload)

  return <CurrencyForm currency={currency} onSubmit={onSubmit} />
}
