import styled from "styled-components"
import { spacing } from "./spacing"
import {
  getCreateMessage,
  getDeleteMessage,
  getDuplicateMessage,
  getEditMessage,
} from "../../localization/common"
import { useMemo, useState } from "react"
import { searchAndFilter } from "../../lib/searchAndFilter"
import { useRouter } from "next/router"
import { DeleteModal } from "./modal/DeleteModal"

const StyledContainer = styled.div`
  position: absolute;

  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: ${spacing.s16};

    button {
      margin-left: ${spacing.s16};
    }
  }

  tr:not(:first-child):hover {
    & > td:not(:last-child) {
      background-color: #dcdcdc;
      cursor: pointer;
    }
  }
`

const HeaderRow = ({
  fields,
  onSortChange,
}: {
  fields: { value: string; label: string }[]
  onSortChange: (v: string) => void
}) => (
  <tr>
    <th />
    {fields.map((f) => (
      <th key={f.value}>
        <button onClick={() => onSortChange(f.value)}>↕</button>
        {f.label}
      </th>
    ))}
    <th>⚙</th>
  </tr>
)

export const Table = ({
  items,
  fields,
  searchKeys,
  deleteMessage,

  onDuplicate,
  onDelete,
}: {
  items: any[]
  fields: { value: string; label: string }[]
  searchKeys: string[]
  deleteMessage: string

  onDuplicate: (id: number) => void
  onDelete: (ids: number[]) => void
}) => {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("id")
  const [selected, setSelected] = useState<number[]>([])
  const [deleting, setDeleting] = useState<boolean>(false)

  const sorted = useMemo(
    () => searchAndFilter(items, search, searchKeys, sort),
    [items, search, searchKeys, sort]
  )

  const router = useRouter()
  const handleCreate = () => router.push(`${router.pathname}/create`)
  const handleEdit = (id) => router.push(`${router.pathname}/edit/${id}`)
  const handleClick = (added) =>
    setSelected((sel) => (sel.includes(added) ? sel.filter((v) => v !== added) : [...sel, added]))

  return (
    <>
      <StyledContainer>
        <div>
          <input
            type={"text"}
            placeholder={"Search..."}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <button onClick={handleCreate}>{getCreateMessage()}</button>
            <button onClick={() => setDeleting(true)}>{getDeleteMessage()}</button>
          </div>
        </div>
        <table>
          <HeaderRow fields={fields} onSortChange={setSort} />
          {sorted.map((v) => (
            <tr key={v.id} onClick={() => handleClick(v.id)}>
              <td>
                <input type={"checkbox"} checked={selected.includes(v.id)} />
              </td>
              {fields.map((f) => (
                <td key={f.value}>{v[f.value]}</td>
              ))}
              <td>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    void handleEdit(v.id)
                  }}
                >
                  {getEditMessage()}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onDuplicate(v.id)
                  }}
                >
                  {getDuplicateMessage()}
                </button>
              </td>
            </tr>
          ))}
        </table>
      </StyledContainer>
      {deleting && (
        <DeleteModal
          heading={deleteMessage}
          onDelete={() => onDelete(selected)}
          onCancel={() => setDeleting(false)}
        />
      )}
    </>
  )
}
