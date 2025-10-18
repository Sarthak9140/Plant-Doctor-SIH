import React from "react";
import { PRODUCTS } from "../../data/products";
import ProductCard from "../../components/productCard/ProductCard";
import "./AllProducts.scss";
export default function AllProducts() {
  return (
    <div className="all-products">
      {PRODUCTS.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}
