import Marker from "../assets/location.png";

export default function CardModel(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-image" />
      <div>
        <div className="location-and-stuff">
          <img src={Marker} className="location-marker"></img>
          <h2 className="country">{props.country}</h2>
          <a href={props.mapLink} className="map-link">
            GOOGLE MAPS Link
          </a>
        </div>

        <h1 className="destination">{props.title}</h1>
        <h4 className="period">{props.period}</h4>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
