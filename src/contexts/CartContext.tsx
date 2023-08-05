import { ReactNode, createContext, useContext, useState } from 'react'
import { produce } from 'immer'

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
  quantity: number
  unitAmount: number
}

interface CartContextData {
  cartTotal: number
  cartItems: IProduct[]
  favoriteItems: IProduct[]
  addFavorite: (product: IProduct) => void
  removeFavorite: (productId: string) => void
  addToCart: (product: IProduct) => void
  removeCart: (productId: string) => void
  checkItemExists: (productId: string) => boolean
  checkFavorite: (productId: string) => boolean
  increaseItemQuantity: (product: IProduct) => void
  decreaseItemQuantity: (product: IProduct) => void
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

  function checkFavorite(productId: string) {
    return favoriteItems.some(product => product.id === productId)
  }

  function addToCart(product: IProduct) {
    setCartItems(state => [...state, product])
  }

  function removeCart(productId: string) {
    setCartItems(state => state.filter(product => product.id !== productId))
  }

  function checkItemExists(productId: string) {
    return cartItems.some(product => product.id === productId)
  }

  function increaseItemQuantity(product: IProduct) {
    const checkItemExists = cartItems.findIndex(
      cartItems => cartItems.id === product.id
    )

    const updatedList = produce(cartItems, draft => {
      if (checkItemExists < 0) {
        draft.push(product)
      } else {
        draft[checkItemExists].quantity = product.quantity + 1
      }
    })

    setCartItems(updatedList)
  }

  function decreaseItemQuantity(product: IProduct) {
    const updatedList = produce(cartItems, draft => {
      const checkItemExists = cartItems.findIndex(
        cartItems => cartItems.id === product.id
      )

      if (checkItemExists !== -1 && draft[checkItemExists].quantity > 1) {
        draft[checkItemExists].quantity = product.quantity - 1
      }
    })

    setCartItems(updatedList)
  }

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice * product.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCart,
        checkItemExists,
        checkFavorite,
        addFavorite,
        removeFavorite,
        favoriteItems,
        cartTotal,
        increaseItemQuantity,
        decreaseItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
