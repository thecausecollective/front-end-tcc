import Link from 'next/link'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios";
// import Header from "../components/header" 


// get static props
function About(props) {
   console.log(props.posts)
  return (
      <div>
      <Container fluid="md">
      <h2 >{props.pages.Title}</h2>
            <Row>
                <Col style={{justifyContent:'center'}}>
                   {props.pages.Content}
                </Col>
            </Row>
        </Container>
      
      </div>
  )
}

export default About

export async function getStaticProps(){
  // using dotenv and getting the url from env file.
  const {API_URL} = process.env

  const response = await axios.get(`${API_URL}/pages`)
  
  return {
    props: {
        pages: response.data[0]
    }
}

}


