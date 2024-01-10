const Slider = ({ duration, handleOnChange }) => {
  const time = duration;
  const min = parseInt(time / 60);
  const sec = parseInt(time % 60);
  console.log(min, sec);
  return <input type="range" min={min} max={time} default={time} className="timeline" onChange={handleOnChange} />
}
export default Slider;