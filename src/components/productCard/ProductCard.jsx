import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

export default function ProductCard({ p }) {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/product/${p.id}`)}>
      <img src={p.image} alt={p.title} />
      <h2>{p.title}</h2>
      <p className="short">{p.short}</p>
      <div className="info">
        <span className="price">
          ₹{p.priceINR} {p.unit}
        </span>
        <button>View</button>
      </div>
    </div>
  );
}
