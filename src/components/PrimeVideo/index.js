// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider/index'

const PrimeVideo = props => {
  const {moviesList} = props

  // categoryId: 'ACTION',

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="primevideo-app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="prime-video-bottom-container">
        <div className="action-movies-container">
          <h1 className="action-movies-heading">Action Movies</h1>
          <MoviesSlider moviesListDetails={actionMoviesList} />
        </div>
        <div className="comedy-movies-container">
          <h1 className="comedy-movies-heading">Comedy Movies</h1>
          <MoviesSlider moviesListDetails={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo

// import './index.css'
// import PlanetItem from '../PlanetItem/index'

// const settings = {
//   dots: false,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// }

// const PlanetsSlider = props => {
//   const {planetsList} = props
//   return (
//     <div className="app-container">
//       <div data-testid="planets" className="slider-container">
//         <Slider className="slider" {...settings}>
//           {planetsList.map(eachPlanet => (
//             <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
//           ))}
//         </Slider>
//       </div>
//     </div>
//   )
// }

// export default PlanetsSlider

// const PlanetItem = props => {
//   const {planetDetails} = props
//   const {name, imageUrl, description} = planetDetails

//   return (
//     <div className="planet-item-container">
//       <h1 className="planets-heading">PLANETS</h1>
//       <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
//       <h1 className="planet-name">{name}</h1>
//       <p className="planet-desc">{description}</p>
//     </div>
//   )
// }

// export default PlanetItem
