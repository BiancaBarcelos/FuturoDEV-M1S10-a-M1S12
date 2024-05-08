import './style.css'
import { Link } from "react-router-dom"

// Esse componente poderia ser chamado de Navbar

function Menu(){

    return (
        <div className='menu'>
            <div className='container menu'>
                <div><Link to="/"> Adventure Trails FD</Link></div>
                <nav>
                    <ul>
                        <li><Link to="/trilhas">Explorar Trilhas </Link></li>
                        <li><Link to="/cadastro">Cadastrar Trilhas</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu;