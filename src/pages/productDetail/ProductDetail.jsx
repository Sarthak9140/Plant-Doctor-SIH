import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import "./ProductDetail.scss";

export default function ProductDetail() {
  const { id } = useParams();
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return <div className="product-detail">Item not found</div>;
  return (
    <div className="product-detail">
      <img src={p.image} alt={p.title} />
      <div className="detail-info">
        <h2>{p.title}</h2>
        <p className="short">{p.short}</p>
        <p className="desc">{p.desc}</p>
        <div className="price">
          Price: ₹{p.priceINR} {p.unit}
        </div>
        <div className="actions">
          <button>Add to cart</button>
          <button>Contact seller</button>
        </div>
        <div className="note">
          Prices are indicative and can vary by region, variety, and date.
          Always confirm with local markets before buying.
        </div>
      </div>
    </div>
  );
}
