import { useState } from "react";

const SongInfo = ({ song }) => {
  const [expand, setExpand] = useState(false)

  const showInfo = () => {
    if (expand) {
      setExpand(false)
      return;
    }
    setExpand(true);
  }
  return <article className="artist-container">
    <div className="top">

      <p className="info">info</p>

      <div className="toggle-btn-container">
        {
          expand ? <button className="minus-btn btn" onClick={showInfo}><i className="fa fa-minus"></i></button> : <button className="plus-btn btn" onClick={showInfo}><i className="fa fa-plus"></i></button>
        }
      </div>
    </div>
    <div className="bottom">
      {
        expand ? <div className="details">

          <h4>{song.artist}</h4>
        </div> :
          <div>

          </div>
      }
    </div>

  </article>
}

export default SongInfo;