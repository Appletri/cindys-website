function Work(props) {
  return(
    <div className="work-portfolio">
      <div className="image">placeholder image</div>
      <h1>{props.title}</h1>
      <h3>{props.genre + ' / ' + props.year}</h3>
      <p>{props.about}</p>
    </div>
  )
}

export default Work