import { Link } from "react-router-dom"
import UserInfo from "./userInfo"


const Navbar = () => {

    return (
        <div className="shadow p-5 flex justify-between items-center bg-main ">
            <Link to='/' className="text-primary text-5xl font-bold">Buy & sell</Link>
            <UserInfo></UserInfo>
        </div>
    )
}

export default Navbar