import { useGlobalContext } from '../context/GlobalContext'


function CartPage() {
    const { state } = useGlobalContext()
    console.log(state)

    return (
        <div>
            <h1>Cart in production...</h1>
            {/* {
          state.products.length > 0 && state.products.map(producto => {
            return (
              <span key={producto.id}>
                { producto.title}
              </span>
            )
          })
        } */}
        </div>
    )
}

export default CartPage