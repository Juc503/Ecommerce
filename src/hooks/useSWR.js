import { useEffect,useState } from "react"

function useSWR ({ url = ""}){

    const [data,setData] = useState({})
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

        const getData = (URL) => {
            setLoading(true)
            fetch(URL)
            .then(res => res.json())
            .then(json => {
                setData(json)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
                return err
            })
        }

        useEffect (() => {
            console.log("render")
            getData(url)
        },[url])

        return {
            data,
            loading,
            error
        }
}

export default useSWR