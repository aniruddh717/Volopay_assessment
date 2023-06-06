import React from "react";
import "./Items.css";

const CardItem = ({ card }) => {
  const renderCardTypeIcon = () => {
    if (card.card_type === "burner") {
      return <i className="fas fa-fire"></i>; // Replace with appropriate icon for burner cards
    } else if (card.card_type === "subscription") {
      return <i className="fas fa-certificate"></i>; // Replace with appropriate icon for subscription cards
    } else {
      return null;
    }
  };

  return (
    <div className="card-item">
      <div className="card-type">{renderCardTypeIcon()}</div>
      <div className="card-details">
        <h3>{card.name}</h3>
        <p>{card.budget_name}</p>
        {card.card_type === "burner" && <p>Expiry: {card.expiry}</p>}
        {card.card_type === "subscription" && <p>Limit: {card.limit}</p>}
      </div>
    </div>
  );
};

export default CardItem;
{
  /* <p>
          Spent: {card.spent.value} {card.spent.currency}
        </p>
        <p>
          Available to spend: {card.available_to_spend.value}{" "}
          {card.available_to_spend.currency}
        </p>
        <p>Status: {card.status}</p> */
}
