import Fuse from "fuse.js"

export function searchAndFilter<T>(
  input: T[],
  search: string,
  searchKeys: string[],
  sortKey: string
) {
  input = (
    search !== "" ? new Fuse(input, { keys: searchKeys }).search(search).map((v) => v.item) : input
  ) as any

  return input.sort((a, b) => {
    if (a[sortKey] > b[sortKey]) return 1
    if (a[sortKey] < b[sortKey]) return -1
    return 0
  }) as any[]
}
