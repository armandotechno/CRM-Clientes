import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="space-y-8">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">CRM - Clientes</h1>
            <p className="text-center font-bold uppercase p-2 bg-blue-500 text-white">Hubo un error</p>
            <p className="text-center font-bold uppercase p-2 bg-blue-500 text-white">{ error.statusText || error.message }</p>
        </div>
    
    )
}
