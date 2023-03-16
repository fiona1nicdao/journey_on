import { NavLink } from 'react-router-dom';

export default function Header(){
    return(
        <header className='header'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/travel'>Travel</NavLink>

        </header>
    )
}