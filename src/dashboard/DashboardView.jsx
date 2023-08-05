import ProductCard from "../components/productCard"

function DashboardView({ data = [] }) {
    return (
        <div className="main-container">
            {
                data.length > 0 && (
                    data.map((product => 
                    <ProductCard key = {product.id} productData={product} />))
                )
            }

        </div>
    )
}

export default DashboardView