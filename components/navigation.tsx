
import Link from 'next/link';
import {useRouter} from 'next/router'
import Styles from './header.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import getConfig from 'next/config'
import navigation from "navigation.module.css"
// as = what yu would liek your link to look like
// href is the atual path to your template
// the other normal Link pages will do a static full page reload

export default function Navigation (props){

   const router = useRouter()
     console.log( props.navigation)
    return(
<>
      <Navbar style={{textDecoration:"none"}} bg="light" expand="lg">
      <Navbar.Brand href="/">Mock-APPP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <ul className="nav" >
        {props.navigation.map(item=>(
          <li key={props.navigation.id}>
            <Link href={item.slug}>
            <Nav.Link href={item.slug}>{item.title}</Nav.Link>
            </Link>
        </li>
        ))}
      </ul>
    
        </Nav>
      
      </Navbar.Collapse>
    </Navbar>
    </>
)
}


