import Link from 'next/link'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios";
// import Header from "../components/header" 


// get static props
function Contact(props) {
//    console.log(props.posts)
  return (
      <div>
      <Container fluid="md">
      <h2> Contact Page </h2>
            <Row>
                <Col style={{justifyContent:'center'}}>
                 this the contact Page 
                </Col>
            </Row>
        </Container>
      
      </div>
  )
}

export default Contact

