// Write your code here
import './index.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem/index'

const settings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const MovieSlider = props => {
  const {moviesListDetails} = props
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesListDetails.map(eachMovie => (
          <MovieItem movieDetails={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider

// <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
