import MinusBtn from "./MinusBtn";
import PlusBtn from "./PlusBtn";

const Top = ({ expand }) => {
  return <article className="top-container">
    <div className="top">
      <span>show song information</span>
      {
        expand ? <MinusBtn /> : <PlusBtn />
      }
    </div>

  </article>
}

export default Top;