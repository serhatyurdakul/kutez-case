import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  useEffect(() => {
    
  }, []);

  const params = useParams();
  console.log("params", params);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
