import logoheader from  '../../assets/logoheader.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
      <header>
        <Link to="/">
          <img src={logoheader} alt="Logo du site" />
        </Link>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/Propos">A Propos</Link>
      </nav>
      </header>
    )
  }
  
  export default Header