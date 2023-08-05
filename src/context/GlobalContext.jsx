import {
  createContext,
  useContext,
  useEffect,
  useReducer
} from 'react'
 
const initialStore = {
  products: [],
  saved: [],
  loading: false
}

 const reducer = (state, action) => {
 
  if (action.type === 'ADD_PRODUCT') {
     return {
      ...state,
      products: [...state.products, action.payload]
    }
  }

  if (action.type === 'REMOVE_PRODUCT') {
     state.products.pop()
    return {
      ...state
    }
  }

  if (action.type === 'SAVE_PRODUCTOS') {
    return {
      ...state,
      saved: [...state.saved, action.payload]
    }
  }
 
}

 
const saveStateToLocalStorage = (state) => {
  const stringState = JSON.stringify(state)
 
  localStorage.setItem('cart', stringState)
}
 
 const loadStateFromLocalStorage = () => {
  const prevCart = localStorage.getItem('cart')
  if (prevCart === null) return initialStore
  return JSON.parse(prevCart)
}

// CREAR EL CONTEXTO
const context = createContext()
const Provider = context.Provider
const ContextGlobalProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialStore, loadStateFromLocalStorage)
  
  useEffect(() => {
     saveStateToLocalStorage(state)
  }, [state])

   const addProduct = (producto) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: producto
    })
  }

  const removeProduct = (producto) => {
    dispatch({
      type: 'REMOVE_PRODUCT'
    })
  }

  return (
    <Provider value={{
      state,
      addProduct,
      removeProduct,
    }}>
        { children }
    </Provider>
  )
}

function useGlobalContext () {
  return useContext(context)
}

export {
  ContextGlobalProvider as default,
  useGlobalContext
}
