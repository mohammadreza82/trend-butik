import Image from "next/image";
import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { Metadata } from "next";


const ProductDetails = () => {
  const { productId } = useParams(); 
  const product = newArrivals.find((p) => p.id === Number(productId)); 

  if (!product) {
    return <div>Product not found!</div>;
  }

  const { img, title, price,  } = product; // Extract product details

  return (
    <div className="product-details">
      <Image src={img} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      {/* Display other product details from "otherDetails" object */}
    </div>
  );
};

export default ProductDetails;