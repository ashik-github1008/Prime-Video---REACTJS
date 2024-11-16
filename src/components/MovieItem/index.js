// Write your code here

import './index.css'

import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={
        <button type="button" className="thumbnail-btn">
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="model-container">
          <button className="close-icon-btn" data-testid="closeButton" onClick={() => close()}>
            <IoMdClose  className="close-icon" alt="Close Icon" />
          </button>
          <ReactPlayer url={videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
