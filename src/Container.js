import Genre from './Genre';

function Container() {

    const genre1 = {
        name:"Comedy",
        description:"This is a description for comedy. This is a description for comedy. This is a description for comedy. This is a description for comedy.", 
        movieTitle1:"Comedy1", 
        movieTitle2:"Comedy2", 
        year1:"2023",
        year2:"2024"
    }

    const genre2 = {
        name:"Romance",
        description:"This is a description for romance. This is a description for romance. This is a description for romance. This is a description for romance.", 
        movieTitle1:"Romance1", 
        movieTitle2:"Romance2",
        year1:"2020",
        year2:"2021"
    }

    return (
      <div>
        <h1>Movie App</h1>
        <Genre data = {genre1} />
        <Genre data = {genre2} />
      </div>
    );
  }
  
  export default Container;