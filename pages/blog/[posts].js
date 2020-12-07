import Link from 'next/link'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios";
import {useRouter} from "next/router"
// import Header from "../components/header" 


// get static props
function Posts(props) {
    const router = useRouter();
   console.log()
  return (
      <div>
      <Container fluid="md">
      {/* <h2 >{props.posts.title}</h2> */}
      Hellio im the blog<br/>
      {router.query.posts}
            <Row>
                <Col style={{justifyContent:'center'}}>
                   {/* {props.posts.Article} */}
                </Col>
            </Row>
        </Container>
      
      </div>
  )
}

export default Posts

// export async function getStaticProps(){
//   // using dotenv and getting the url from env file.
//   const {API_URL} = process.env

//   const response = await axios.get(`${API_URL}/posts`)
  
//   return {
//     props: {
//         posts: response.data[0]
//     }
// }

// }


