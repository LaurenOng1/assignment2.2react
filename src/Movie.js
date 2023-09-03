function Movie(props) {
    return(
        <div className="componentStyle">
        <ul>
            <li><p><span style={{fontWeight: "bold"}}>Movie Title</span>: {props.title} </p></li>
            <p><span style={{fontWeight: "bold"}}>Year of Release</span>: {props.year} </p>
            <p><span style={{fontWeight: "bold"}}>Description</span>: {props.description}</p>
        </ul>    
        </div>
    )
}

export default Movie;
