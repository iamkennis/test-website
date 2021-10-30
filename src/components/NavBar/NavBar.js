// import { NavLink } from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'
import NavData from '../../Utils/NavData'
import logo from '../../assets/logo.svg'

function NavBarSection () {
    return (
        <>
            <Navbar bg='black' varient='black' className="justify-content-center nav">
                <img src={ logo } alt='logo'
                    width="90"
                    height="90"
                    className="d-inline-block align-top pt-4 logo"
                />
            { NavData.map((item, index) => {
                return (
                   
                        <Nav.Link as='a' key={ index } to={ item.path } className='nav-item'>
                            <span>{ item.title }</span>
                        </Nav.Link>
                   
                )
            }) }
                 </Navbar>
        </>
    );
}

export default NavBarSection