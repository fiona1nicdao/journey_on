import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar';

export default function Header(){
    return(
        <header className='header'>
            <div className="dropdown">
                <button className='dropdown-menu-button'>
                    <i className="menu-icon fa-solid fa-bars" ></i>
                </button>
                <div className='menu'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/travel'>Travel</NavLink>
                    <NavLink to='/code'>Code</NavLink>
                    <NavLink to='/test'>Test</NavLink>
                </div>
            </div>
            <NavBar/>
        </header>
    )
}