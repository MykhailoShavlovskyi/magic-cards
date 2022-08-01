import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import createCurrency from "../../../db/misc/mutations/createCurrency"
import { CurrencyForm } from "../../../components/admin/misc/CurrencyForm"

export const CreateCurrencyForm = () => {
  const [createCurrencyMutation] = useMutation(createCurrency)
  const router = useRouter()
  const onSubmit = (v) => createCurrencyMutation(v).then(router.reload)

  return <CurrencyForm onSubmit={onSubmit} />
}
