import { Currency } from "@prisma/client"
import { CurrencyTable as CurrencyTableBase } from "../../../components/admin/misc/CurrencyTable"
import { useMutation } from "@blitzjs/rpc"
import deleteCurrency from "../../../db/misc/mutations/deleteCurrency"
import duplicateCurrency from "../../../db/misc/mutations/duplicateCurrency"

export const CurrenciesTable = ({ currencies }: { currencies: Currency[] }) => {
  const [duplicateCurrencyMutation] = useMutation(duplicateCurrency)
  const [deleteCurrencyMutation] = useMutation(deleteCurrency)
  return (
    <>
      <CurrencyTableBase
        currencies={currencies}
        onDuplicate={duplicateCurrencyMutation}
        onDelete={deleteCurrencyMutation}
      />
    </>
  )
}
