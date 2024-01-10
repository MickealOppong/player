
const Playlist = ({ songs }) => {
  return <ul className="playlist">
    {
      songs.map((song) => {
        const { id, artist, title } = song
        return <li key={id}>
          <span>{artist}</span>
          <span>{title}</span>
        </li>
      })
    }
  </ul>
}
export default Playlist;