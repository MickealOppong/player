import { useRef, useState } from "react";
import Backward from './components/Backward';
import Forward from './components/Forward';
import Img from "./components/Img";
import Next from "./components/Next";
import Pause from "./components/Pause";
import Play from "./components/Play";
import Previous from "./components/Previous";
import Slider from "./components/Slider";
import SongInfo from "./components/songInfo/SongInfo";
import { playList } from "./data";

const Player = () => {

  const [currIndex, setCurrIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const song = playList[currIndex];
  let myRef = useRef(null);
  //const time = { min: '', sec: '' }

  const playSong = () => {
    if (!isPlaying) {
      myRef.current.play();
      setIsPlaying(true)
    }

  }

  const pauseSong = () => {
    if (isPlaying) {
      myRef.current.pause();
      setIsPlaying(false);
    }

  }
  const getDuration = () => {
    if (myRef) {
      return myRef.current.duration;

    }
    return null;
  }

  const handleChange = () => {

  }

  const nextSong = () => {
    if (currIndex >= playList.length - 1) {
      setCurrIndex(0);
      myRef.current.pause();
      myRef.current.load();
      myRef.current.play();
    } else {
      setCurrIndex(currIndex + 1);

      myRef.current.pause();
      myRef.current.load();
      myRef.current.play();
    }
    console.log(currIndex);
  }

  const prevSong = () => {
    if (currIndex <= 0) {
      setCurrIndex(playList.length - 1);
      myRef.current.pause();
      myRef.current.load();
      myRef.current.play();
    } else {
      setCurrIndex(currIndex - 1);

      myRef.current.pause();
      myRef.current.load();
      myRef.current.play();
    }
    console.log(currIndex);
  }

  return (
    <section className="player">
      <article>
        <Img />
        <audio ref={myRef}>
          <source src={song.url} type="audio/mpeg"></source>
        </audio>
        <div>
          {
            isPlaying && <Slider duration={getDuration() + ''} handleOnChange={handleChange} />
          }
        </div>
        <div className="btns">
          <Previous btnEvent={prevSong} />
          <Backward />
          {isPlaying ? <Pause handleClick={pauseSong} />
            : <Play handleClick={playSong} />
          }
          <Forward />
          <Next btnEvent={nextSong} />
        </div>
        <SongInfo song={song} />
      </article>

    </section>
  )
}

export default Player;