import { Link } from "react-router-dom"

export const NavBar = () => {
    const iconStyle = {
        fontSize:'1.2rem'
    }
    return (
        <div className='card bg-gray-900 p-3 flex justify-content-evenly align-items-start'>
            <Link to='/'>
                Shop 
            </Link>
            
            <Link to='/cart'>
                <i className="pi pi-shopping-cart" style={iconStyle}></i>
            </Link>
        </div>
    )
}