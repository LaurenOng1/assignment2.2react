import Movie from './Movie';

function Genre(props) {

    return (
        <div className="genreStyle">
            <h2 style={{fontFamily: "cursive", backgroundColor:"white"}}>Genre: {props.data.name}</h2> <hr />

            <Movie title = {props.data.movieTitle1} year = {props.data.year1} description = {props.data.description} />
            <Movie title = {props.data.movieTitle2} year = {props.data.year2} description = {props.data.description} />

        </div>
    )
}

export default Genre;