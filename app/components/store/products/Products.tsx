import { ProductCards } from "./ProductCards"
import { ProductPillGroups } from "./ProductPillGroups"
import { useMemo, useState } from "react"
import { intersection } from "lodash"
import { ResolvedProduct } from "../../../db/products/products.querties"
import { Attribute, ProductCategory, ProductSet } from "@prisma/client"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 15rem auto;
  height: 100vh;
`

export const Products = ({
  products,
  categories,
  sets,
  attributes,
}: {
  products: ResolvedProduct[]
  categories: ProductCategory[]
  sets: ProductSet[]
  attributes: Attribute[]
}) => {
  const [categoryIds, setCategoryIds] = useState(categories.map((v) => v.id))
  const [setIds, setSetIds] = useState(sets.map((v) => v.id))
  const [attributeIds, setAttributeIds] = useState(attributes.map((v) => v.id))

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (v) =>
          categoryIds.includes(v.categoryId) &&
          setIds.includes(v.setId) &&
          (intersection(attributeIds, v.attributeIds).length > 0 || v.attributeIds.length === 0)
      ),
    [attributeIds, categoryIds, products, setIds]
  )

  return (
    <StyledContainer>
      <ProductPillGroups
        categories={categories}
        sets={sets}
        attributes={attributes}
        onCategoriesChange={setCategoryIds}
        onSetsChange={setSetIds}
        onAttributesChange={setAttributeIds}
      />
      <ProductCards products={filteredProducts} />
    </StyledContainer>
  )
}
