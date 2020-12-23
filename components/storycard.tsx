
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Link from "next/link"
import "./card.module.css"


export default function Header(props){
    // needed for when calling images in locla dev.
const {API_URL} = process.env
console.log(props.blog);
    return(
        <>
    <div className="card-container">
        <div key={props.blog.id} >
        <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Img variant="top"src="" />
        <Card.Body>
            <img className="movie-poster" src={props.blog.poster.url}/>
        <Card.Title>{props.blog.title}</Card.Title>
        <Button variant="primary">Watch</Button>
     
        </Card.Body>
        {/* /movies/[genre]/[slug] will act as the template] */}
        {/* /movies/${props.movie.genre.slug}/${props.movie.slug} will be the actual slugs from API pulled from strapi*/}
        {/* href = the way to find the link
        as = the link it will show up as in the URL */}
        {/* <Link href="/movies/[genre]/[slug]" as={`/movies/${props.movie.genre.slug}/${props.movie.slug}`}>
            <a>More about this movie</a>
        </Link> */}
        </Card>
        </div>  
    </div>

        </>
    );
} 