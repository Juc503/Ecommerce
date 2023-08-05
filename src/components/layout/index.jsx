 import { useStoreContext } from '../../context/StoreContext'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faShoppingCart} from '@fortawesome/free-solid-svg-icons'


function Layout ({ children }) {
  const { counterProducts } = useStoreContext()

  return (
    <>
      <div className='container'>

      <nav >
          <a href="/" className="nvb">  <FontAwesomeIcon icon={faHome} > </FontAwesomeIcon></a>
          <a href="#" className="nvb">STORE</a>
           
          <a href="/cart" className="nvb">  { counterProducts }<FontAwesomeIcon icon={faShoppingCart} > </FontAwesomeIcon></a>
      </nav>
      
      </div>
    </>
  )
}

export default Layout