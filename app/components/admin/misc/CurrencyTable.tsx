import { Currency } from "@prisma/client"
import { Table } from "../../common/Table"
import { getNameMessage } from "../../../localization/common"
import {
  getAreYouSureDeleteCurrencyMessage,
  getPrimaryMessage,
  getRateMessage,
} from "../../../localization/admin"

export const CurrencyTable = ({
  currencies,
  ...rest
}: {
  currencies: Currency[]
  onDuplicate: (id: number) => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={currencies}
    fields={[
      { value: "name", label: getNameMessage() },
      { value: "primary", label: getPrimaryMessage() },
      { value: "rate", label: getRateMessage() },
    ]}
    searchKeys={["name", "primary", "rate"]}
    deleteMessage={getAreYouSureDeleteCurrencyMessage()}
    {...rest}
  />
)
