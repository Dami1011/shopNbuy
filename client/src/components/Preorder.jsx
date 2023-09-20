import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function Preorder({ data }) {
  const flattenDataArray = data.flatMap((item) => item);


  const filterPreorder = flattenDataArray?.filter(
    (product) => product.condition === "Preorder"
  );
 
  return (
    <>
      <div className="d-flex flex-column justify-content-center mb-3">
        <h1 className="fw-bold text-center">PREORDER</h1>
        <Link
          className="text-secondary fs-4 fw-bold text-center"
          to={`/collections`}
        >
          VIEW ALL
        </Link>
      </div>
      <div className="d-flex overflow-x-scroll overflow-y-hidden gap-3 px-3">
        {filterPreorder.slice(0, 4).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
