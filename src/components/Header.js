import Globe from "../assets/earth.png";

export default function Header() {
  return (
    <div className="header-container">
      <img src={Globe} className="globe-icon"></img>
      <h1 className="journal-title">My Travel Journal</h1>
    </div>
  );
}
