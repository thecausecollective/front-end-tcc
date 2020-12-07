
import Link from 'next/link';
import {useRouter} from 'next/router'
import Styles from './header.module.css'
import axios from "axios"; 
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import getConfig from 'next/config'
// as = what yu would liek your link to look like
// href is the atual path to your template
// the other normal Link pages will do a static full page reload

export default function Navigation (props){

   const router = useRouter()
     console.log(props.posts)



    return(
        <>
        <Navbar bg="light" expand="lg">
          
  <Navbar.Brand href="/">Movies</Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{ color:'blue'}} href="/">Home</Nav.Link>
      <Nav.Link style={{ color:'blue'}} href="/about">About</Nav.Link>
      <Link href="/blog[posts]"as={`/blog/${props.posts}`} >Blog</Link>
     
      {/* <Link href="/movies/[genre]/[slug]" as={`/movies/${props.movie.genre.slug}/${props.movie.slug}`}>
       */}
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </>
    );
} 







