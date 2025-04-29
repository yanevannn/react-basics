import { Link } from "react-router";

const ErorPage = () =>{
    return (
        <>
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <h1 className="text-3xl">EROR</h1>
            <h2 className="text-5xl font-bold">404</h2>
            <Link to={"/"} className="text-xs text-white font-semibold p-3 rounded-xl underline uppercase text-center">Back to Homepage</Link>
        </div>
        </>
    )
}

export default ErorPage;