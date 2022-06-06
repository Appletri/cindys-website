import { Link } from "react-router-dom";

function Work(props) {
  return(
    <div className="work-portfolio">
      <div className="image">
        <img src={props.img} alt={props.img}></img>
      </div>
      <h1>{props.title}</h1>
      <h3>{props.genre + ' / ' + props.year}</h3>
      <p>{props.about}</p>
      <Link to={props.link}><div className="link">More Details</div></Link>
    </div>
  )
}

export default Work