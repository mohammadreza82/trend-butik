// // pages/[product].jsx
// import { useRouter } from "next/router";
// import { getProductDetails } from "../../data"; // Assuming data fetching function
// import Image from "next/image";

// const ProductDetails = () => {
//   const router = useRouter();
//   const { product } = router.query; // Access the dynamic product ID

//   const productData = getProductDetails(product); // Fetch product details

//   if (!productData) {
//     return <div>Product not found!</div>;
//   }

//   const { img, title, price, description, ...otherDetails } = productData;

//   return (
//     <div className="product-details">
//       <Image src={img} alt={title} />
//       <h2>{title}</h2>
//       <p>{price}</p>
//       <p>{description}</p>
//       {/* Display other product details from "otherDetails" object */}
//     </div>
//   );
// };

// export default ProductDetails;