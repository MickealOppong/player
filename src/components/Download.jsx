import { useState } from "react";

const Download = () => {
  const [url, setUrl] = useState(null)
  const handleInput = (e) => {
    if (e) {
      setUrl(e)
      return;
    }
  }
  return <div>
    <form action="">
      <input type="text" onChange={(e) => handleInput(e.currentTarget.value)} />
      <button type="submit" >submit</button>
    </form>

    <a href={url} download target="_blank"></a>
  </div>
}
export default Download;