import create from "zustand"
import { useMemo } from "react"

type CartState = {
  productIds: number[]
}

const useCart = create<CartState>((set) => ({
  productIds: [],
  addProduct: (id: number) => set((s) => ({ productIds: s.productIds.concat([id]) })),
  removeProduct: (id: number) => set((s) => ({ productIds: s.productIds.filter((v) => v !== id) })),
}))

const useCartProductIds = () => useCart((v) => v.productIds)

const useCartProducts = () => {
  const ids = useCartProductIds()
  const products = [] as any[] // TODO
  return useMemo(() => products.filter((v) => ids.includes(v.id)), [ids, products])
}
