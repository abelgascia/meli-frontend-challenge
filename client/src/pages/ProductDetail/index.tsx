import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../context/Products";
import { getProductById } from "../../services/api";
import ProductDetail from "../../components/molecules/ProductDetail";
import Loader from "../../components/atoms/Loader";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { setSelectedProduct, selectedProduct, loading, setLoading } =
    useProductsContext();

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (id) {
        const data = await getProductById(id);
        setSelectedProduct(data.item);
        setLoading(false);
        return;
      }
    })();

    return () => {
      setSelectedProduct({});
    };
  }, [id]);

  if (loading) return <Loader />;

  return <ProductDetail {...selectedProduct} />;
};

export default ProductDetailPage;
