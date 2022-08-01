export const Pre = ({ value }: { value: any }) => {
  return <pre>{JSON.stringify(value, null, "\t")}</pre>
}
