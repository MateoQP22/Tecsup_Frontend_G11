import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductsGallery from "../components/products/gallery/ProductsGallery";
// import { useDispatch } from "react-redux";
// import LoadersModal from "../components/common/loaders/LoadersModal";
import ProductsWrapper from "../components/products/ProductsWrapper";
import useProducts from "../hooks/useProducts";
import { fetchReadProducts } from "../redux/thunks/productsThunk";
// import ContactHero from "../components/contact/ContactHero";

const ProductsPage = () => {
  const dispatch = useDispatch();
  // const { loading, contactData } = useContact();
  const { loading, products, productsPage, productsPageSize } = useProducts();

  useEffect(() => {
    document.title = '¡Productos! I EAKON';
    dispatch(fetchReadProducts({ productsPage, productsPageSize }));
  }, []);

  useEffect(() => {
    dispatch(fetchReadProducts({ productsPage, productsPageSize }));
  }, [productsPage]);


  return (
    <ProductsWrapper
      loading={loading}
      title='Producto'
    >
      <ProductsGallery products={products}/>
    </ProductsWrapper>
  );
};
export default ProductsPage;