
const Timeline = ({ time }) => {
  const min = parseInt(time / 60);
  const sec = parseInt(time % 60);
  return <div>
    <p>{min}:{sec}</p>
  </div>
}
export default Timeline;