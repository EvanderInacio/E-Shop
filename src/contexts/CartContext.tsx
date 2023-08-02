import { produce } from 'immer'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
  quantity: number,
  unitAmount: number;
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

  amount: string;
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([])
  const [favoriteItems, setFavoriteItems] = useState<IProduct[]>([])
  const [amount, setAmount] = useState('');

  function addFavorite(product: IProduct) {
    setFavoriteItems(state => [...state, product])
  }

  function removeFavorite(productId: string) {
    setFavoriteItems(state => state.filter(product => product.id !== productId))
  }

  function addToCart(product: IProduct) {
    setCartItems(state => [ ...state, product])    
  }

  function removeCart(productId: string) {
    setCartItems(state => state.filter(product => product.id !== productId))
  }

  function checkItemExists(productId: string) {
    return cartItems.some(product => product.id === productId)
  }

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)



  // function decreaseItemQuantity(product: IProduct) {
  //   if(product.quantity <= 1) {
  //     return
  //   }

  //   // const updatedList = cartItems.map((item) => {
  //   //   if (item.id === product.id) {
  //   //     return { 
  //   //       ...item,
  //   //       quantity: item.quantity--,
  //   //     }
  //   //   }
  
  //   //   return { ...item };
  //   // })

  //   // setCartItems(updatedList)
  // } 

  // function increaseItemQuantity(product: IProduct ) {
  //   const checkItemExists = cartItems.findIndex((cartItems) => cartItems.id === product.id)

  //   const updatedList = produce(cartItems, (draft) => {
  //     if (checkItemExists < 0) {
  //       draft.push(product)
  //     } else {
  //       draft[checkItemExists].quantity += product.numberPrice
  //     }

  //   })

  //   setCartItems(updatedList);
  // }

  
  // useEffect(() => {
  //   const total = cartItems.reduce((acc, product) => {
  //     return (acc + (product.numberPrice * product.quantity));
  //   }, 0)
    
  //   const totalFormatted = new Intl.NumberFormat('pt-BR', {
  //     style: 'currency',
  //     currency: 'BRL',
  //   }).format(total / 100)

  //   setAmount(totalFormatted)
  // }, [cartItems])


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCart,
        checkItemExists,
        addFavorite,
        removeFavorite,
        favoriteItems,
        cartTotal,
        amount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
