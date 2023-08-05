import useSWR from "../hooks/useSWR";
import DashboardView from "./DashboardView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const API_URL = import.meta.env.VITE_API_URL

function DashboardHOC(){
    const {data: productData, loading, error} = useSWR({url: `${API_URL}/products`})
    
    return (
        <>
        {
            loading
                ? <span>  <FontAwesomeIcon icon={faSpinner}  className="fa fa-spinner fa-pulse fa-3x fa-fw" > </FontAwesomeIcon> </span>
                : <DashboardView data={productData} />
        }
        {
            !loading && error && (
                <h1> Error </h1>
            )
        }
        </>
    )
}
export default DashboardHOC;