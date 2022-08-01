import styled, { css } from "styled-components"
import { spacing } from "./spacing"
import { useCallback, useEffect, useMemo, useState } from "react"

const StyledPill = styled.div<{ selected: boolean }>`
  border: 1px solid black;
  border-radius: ${spacing.s8};
  padding: ${spacing.s2};
  margin: ${spacing.s2};
  width: fit-content;
  cursor: pointer;

  ${(v) =>
    v.selected &&
    css`
      background-color: dodgerblue;
      color: white;
    `}
`

const StyledContainer = styled.div`
  h3 {
    border-top: 1px solid black;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    width: 10rem;
  }
`

export const PillGroup = ({
  header,
  items,
  onChange,
}: {
  header: string
  items: { value: number; label: string }[]
  onChange?: (v: number[]) => void
}) => {
  const [selected, setSelected] = useState<number[]>(items.map((v) => v.value))
  const allSelected = useMemo(
    () => selected.length === items.length,
    [items.length, selected.length]
  )

  const handlePillClick = useCallback(
    (v: number) => {
      if (selected.includes(v)) setSelected((s) => s.filter((s) => s !== v))
      else setSelected((s) => s.concat([v]))
    },
    [selected]
  )

  const handleSelectClick = useCallback(() => {
    if (allSelected) setSelected([])
    else setSelected(items.map((v) => v.value))
  }, [allSelected, items])

  useEffect(() => {
    onChange && onChange(selected)
  }, [selected, onChange])

  return (
    <StyledContainer>
      <h3>
        {header}{" "}
        <button onClick={handleSelectClick}>{allSelected ? "Deselect all" : "Select all"}</button>
      </h3>
      <div>
        {items.map((v) => (
          <StyledPill
            key={v.value}
            selected={selected.includes(v.value)}
            onClick={() => handlePillClick(v.value)}
          >
            {v.label}
          </StyledPill>
        ))}
      </div>
    </StyledContainer>
  )
}
