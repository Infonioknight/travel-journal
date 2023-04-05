import cardInfo from "./cardInfo.js";
import CardModel from "./CardModel.js";

export default function Cards() {
  const cardData = cardInfo.map((item) => {
    return <CardModel key={item.id} {...item} />;
  });

  return <div className="card-container">{cardData}</div>;
}
