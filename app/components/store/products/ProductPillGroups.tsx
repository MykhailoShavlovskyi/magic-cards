import { PillGroup } from "../../common/PillGroup"
import {
  getAttributesMessage,
  getCategoriesMessage,
  getSetsMessage,
} from "../../../localization/magic-cards"
import { Attribute, ProductCategory, ProductSet } from "@prisma/client"
import styled from "styled-components"
import { spacing } from "../../common/spacing"

const StyledContainer = styled.div`
  margin-right: ${spacing.s32};
`

export const ProductPillGroups = ({
  categories,
  sets,
  attributes,
  onCategoriesChange,
  onSetsChange,
  onAttributesChange,
}: {
  categories: ProductCategory[]
  sets: ProductSet[]
  attributes: Attribute[]
  onCategoriesChange: (v: number[]) => void
  onSetsChange: (v: number[]) => void
  onAttributesChange: (v: number[]) => void
}) => (
  <StyledContainer>
    <PillGroup
      header={getCategoriesMessage()}
      items={categories.map((v) => ({ value: v.id, label: v.name }))}
      onChange={onCategoriesChange}
    />
    <PillGroup
      header={getSetsMessage()}
      items={sets.map((v) => ({ value: v.id, label: v.name }))}
      onChange={onSetsChange}
    />
    <PillGroup
      header={getAttributesMessage()}
      items={attributes.map((v) => ({ value: v.id, label: v.name }))}
      onChange={onAttributesChange}
    />
  </StyledContainer>
)
