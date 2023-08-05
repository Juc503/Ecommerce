import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faInfoCircle, faUsd } from '@fortawesome/free-solid-svg-icons'
import { useStoreContext } from '../context/StoreContext'


function ProductCard({productData}) {
console.log(productData)

const {data, addProduct} = useStoreContext()

const {title, price, image} = productData || {}

    return (
        <>
            {
                <div className='parent'>
                    <div className='div1 '> {title}  </div>

                    <div className="div2 card-img ">
                        {image &&
                            <img src={image} alt={title} />
                        }
                    </div>

                    <div className="div3 ">  $ {price} 
                    </div>

                    <div className='div4'>
                        <button className="button" onClick={() => addProduct(data)}>
                            <FontAwesomeIcon icon={faCartPlus} > </FontAwesomeIcon>

                        </button>
                    </div>
                    <div>
                        <Link to={`/product/${productData.id}`}>
                            <FontAwesomeIcon icon={faInfoCircle} className='fa-2x ' > </FontAwesomeIcon>
                        </Link>
                    </div>
                </div>


            }

        </>
    );
}

export default ProductCard;

// <div className='parent'>
// <h1 className = "div1"> {title} </h1>
//     <p>  
//         {image &&
//         <img  className = "div2 card-img "src={image} alt={title} />
//         }
//     </p>

//     <div className="div3">
//         <p className = "card-price">  {price} </p>
//     </div>
//     <button className="div4">Add to Cart</button>
// </div>