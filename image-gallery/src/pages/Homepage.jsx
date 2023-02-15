import Picture from "../components/Picture";
import data from "../helper/data";

function Homepage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>Image Gallery</h1>
      <div className="pictures">
        {data.map(({ photographer, src }) => (
          <Picture photograher={photographer} src={src} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
