import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return(
        <div>
            <h1> Error An unexpected error has ocurred </h1>
            <p> {error.message || error.statusText} </p>
        </div>
    )


}