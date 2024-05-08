import git from '../../assets/logo-github.png'
import linkedin from '../../assets/logo-linkedin.png'
import instagram from '../../assets/logo-instagram.png'
import { Link } from "react-router-dom"
import "./style.css"

function Footer() {
    return (
      <div className='footer'>
        <div className='footer container'>
          <div><Link to="/"> Adventure Trails FD</Link></div>
          <div className='social'>
            <a target='_blank' href="https://github.com/BiancaBarcelos"><img src={git} alt="" /></a>
            <a target='_blank' href="https://www.linkedin.com/in/bianca-barcelos-a98255114/"><img src={linkedin} alt="" /></a>
            <a target='_blank' href="https://www.instagram.com/bisilvabarcelos/"><img src={instagram} alt="" /></a>
          </div>
        </div>
      </div>
    )
  }

export default Footer;