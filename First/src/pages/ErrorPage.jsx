import { useRouteError } from "react-router";

const ErrorPage = ()=>{
  const err=  useRouteError()
    return (
        <div className="px-5 md:px-10 mt-5 flex justify-center flex-col">
            <h1 className="text-md">OPP!! Some thing is wrongf</h1>
            <p className="text-sm">{err.code}</p>
        </div>
    );
}

export default ErrorPage