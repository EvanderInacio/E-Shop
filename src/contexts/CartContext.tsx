import { ReactNode, createContext, useContext, useState } from "react";

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface CartContextData {
  cartItems: IProduct[]
  favoriteItems: IProduct[]
  addFavorite: (product: IProduct) => void
  removeFavorite: (productId: string) => void
  addToCart: (product: IProduct) => void
  removeCart: (productId: string) => void
  checkItemExists: (productId: string) => boolean
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])
  const [favoriteItems, setFavoriteItems] = useState<IProduct[]>([])
  
  function addFavorite(product: IProduct) {
    setFavoriteItems(state => [...state, product])
  }

  function removeFavorite(productId: string) {
    setFavoriteItems(state => state.filter(product => product.id !== productId))
  }

  function addToCart(product: IProduct) {
    setCartItems(state => [...state, product])
  }

  function removeCart(productId: string) {
    setCartItems(state => state.filter(product => product.id !== productId))
  }

  function checkItemExists(productId: string) {
    return cartItems.some((product) => product.id === productId)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeCart, checkItemExists, addFavorite, removeFavorite, favoriteItems }}>
      {children}
    </CartContext.Provider>
  )
}


export const useCart = () => useContext(CartContext)