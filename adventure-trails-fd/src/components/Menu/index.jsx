import './style.css'
import { Link } from "react-router-dom"

function Menu(){

    return (
        <div className='menu'>
            <div><Link to="/"> Adventure Trails FD</Link></div>
            <nav>
                <ul>
                    <li><Link to="/trilhas">Explorar Trilhas </Link></li>
                    <li><Link to="/cadastro">Cadastrar Trilhas</Link></li>
                    <li><Link to="/cadastro">Login</Link></li> {/*mudar o link*/}
                </ul>
            </nav>
        </div>
    )
}

export default Menu;