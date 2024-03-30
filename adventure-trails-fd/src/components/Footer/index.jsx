import git from '../../assets/logo-github.png'
import linkedin from '../../assets/logo-linkedin.png'
import instagram from '../../assets/logo-instagram.png'


function Footer() {
    return (
      <div>
        <div>Adventure Trails FD</div>
        <a target='_blank' href="https://github.com/BiancaBarcelos"><img src={git} alt="" /></a>
        <a target='_blank' href="https://www.linkedin.com/in/bianca-barcelos-a98255114/"><img src={linkedin} alt="" /></a>
        <a target='_blank' href="https://www.instagram.com/bisilvabarcelos/"><img src={instagram} alt="" /></a>
      </div>
    )
  }

export default Footer;