
function ProductView({data, addProduct}){

    return (
        <div>

        <div className="product-details">
            <div className="card-i">
                <img className = 'card-img'src={data.image}></img>
                <h1 className="card-price"> $ {data.price}</h1>
            </div>
            <div className="card-t">
                <h1 > {data.title}</h1>
                
                
            </div>

            <div className="card-d">
                <p >{data.description}</p>
            </div>
                
            <div  className="card-b ">
               
                <button className = "button" onClick={() => addProduct(data)}>Add to Cart</button>
                {/* <button onClick={() => removeProduct(data)}>Remove from Cart</button> */}
            </div> 
            
        </div>

 
        </div>
    )
}

export default ProductView