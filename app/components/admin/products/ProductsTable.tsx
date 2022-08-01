import { Product } from "@prisma/client"
import { Table } from "../../common/Table"
import { getNameMessage } from "../../../localization/common"
import {
  getActiveMessage,
  getAreYouSureDeleteProductMessage,
  getCreatedAtMessage,
  getDefaultMinimumQuantityMessage,
  getDefaultPriceMessage,
  getDescriptionMessage,
  getHeightMessage,
  getIndexMessage,
  getIsbnMessage,
  getLengthMessage,
  getRegularMinimumQuantityMessage,
  getRegularPriceMessage,
  getThumbnailKeyMessage,
  getUpdatedAtMessage,
  getWeightMessage,
  getWholesaleMinimumQuantityMessage,
  getWholesalePriceMessage,
  getWidthMessage,
} from "../../../localization/admin"

export const ProductsTable = ({
  products,
  ...rest
}: {
  products: Product[]
  onDuplicate: () => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={products}
    fields={[
      { value: "isbn", label: getIsbnMessage() },
      { value: "name", label: getNameMessage() },
      { value: "description", label: getDescriptionMessage() },
      { value: "active", label: getActiveMessage() },
      { value: "thumbnailKey", label: getThumbnailKeyMessage() },
      { value: "defaultPrice", label: getDefaultPriceMessage() },
      { value: "regularPrice", label: getRegularPriceMessage() },
      { value: "wholesalePrice", label: getWholesalePriceMessage() },
      { value: "defaultMinimumQuantity", label: getDefaultMinimumQuantityMessage() },
      { value: "regularMinimumQuantity", label: getRegularMinimumQuantityMessage() },
      { value: "wholesaleMinimumQuantity", label: getWholesaleMinimumQuantityMessage() },
      { value: "length", label: getLengthMessage() },
      { value: "width", label: getWidthMessage() },
      { value: "height", label: getHeightMessage() },
      { value: "weight", label: getWeightMessage() },
      { value: "index", label: getIndexMessage() },
      { value: "createdAt", label: getCreatedAtMessage() },
      { value: "updatedAt", label: getUpdatedAtMessage() },
    ]}
    searchKeys={[
      "isbn",
      "name",
      "description",
      "active",
      "thumbnailKey",
      "defaultPrice",
      "regularPrice",
      "wholesalePrice",
      "defaultMinimumQuantity",
      "regularMinimumQuantity",
      "wholesaleMinimumQuantity",
      "length",
      "width",
      "height",
      "weight",
      "index",
      "createdAt",
      "updatedAt",
      // TODO Category
      // TODO Set
    ]}
    deleteMessage={getAreYouSureDeleteProductMessage()}
    {...rest}
  />
)
