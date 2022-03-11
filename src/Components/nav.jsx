import { Link } from 'react-router-dom';
import Logo from '../Logo.png';

const Nav = () => {
  return (
    <nav className='navbar'>
      <Link to="/"><img src={Logo} alt="-" /></Link>
    </nav>
  );
}

export default Nav;