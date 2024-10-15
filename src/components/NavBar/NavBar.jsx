import CardsWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <img src="https://porthogelatto.com/ventas/img/logolargo.png" alt="Logo de la tienda" className="logo" />
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/helado`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Helado</NavLink>
                <NavLink to={`/category/postres`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Postre</NavLink>
                <NavLink to={`/category/tortas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tortas</NavLink>
                <NavLink to={`/category/stick`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Stick</NavLink>
                <NavLink to={`/category/pasteleria`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pastel</NavLink>
            </div>
            <CardsWidget/>
        </nav>
    )
}

export default NavBar