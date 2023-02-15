function Picture({ photograher, src: { large: src } }) {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={src} alt="" />
      </div>
      <div className="info">
        <p style={{ color: "steelblue" }}>{photograher}</p>
      </div>
    </div>
  );
}

export default Picture;
