import RotatingHead from "./RotatingHead"
import TypingAnimation from "./TypingAnimation"

const Floater = () => {

  return (
    <div className="floater">
      <div className="floater__content">
        <div className="vertical-center">
          <div className="floater__title" style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
            {/* title */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <RotatingHead />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1>David G.<br /> Simmons</h1>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Floater;
