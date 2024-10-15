import CardsWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <a href=""><img src="https://porthogelatto.com/ventas/img/logolargo.png" alt="Logo de la tienda" className="logo" /></a>
            <div>
                <button>Helado</button>
                <button>Postres</button>
                <button>Tortas</button>
                <button>Stick</button>
                <button>Pasteleria</button>
            </div>
            <CardsWidget/>
        </nav>
    )
}

export default NavBar