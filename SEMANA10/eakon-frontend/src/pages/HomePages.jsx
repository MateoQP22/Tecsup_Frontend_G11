import { useEffect  } from "react";
import { useDispatch } from 'react-redux'
import HomeBestSellers from "../components/home/homeBestSellers";
import LoadersModal from "../components/common/loaders/LoadersModal";
import HomeHero from "../components/home/homeHero";
import useHome from "../hooks/useHome";
import { fetchReadHeroProducts, fetchReadBeastSellersProducts } from '../redux/thunks/homethunks';

const HomePages = ( ) => {
  const dispatch = useDispatch();
  const { loading, heroProducts } = useHome();


  useEffect(() => {
    dispatch(fetchReadHeroProducts());
    dispatch(fetchReadBeastSellersProducts());
  }, []);

  return (
    <>
      {loading && <LoadersModal />}
      <HomeHero heroProducts={heroProducts}/>
      <HomeBestSellers/>
    </>
  );
};

export default HomePages