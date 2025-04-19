import { useRouteError } from "react-router";

const ErrorPage = ()=>{
  const err=  useRouteError()
    return (
        <div>
            <h1>OPP!! Some thing is wrongf</h1>
            <p>{err.code}</p>
        </div>
    );
}

export default ErrorPage