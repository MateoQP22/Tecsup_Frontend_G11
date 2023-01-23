import { useEffect  } from "react";
import { useDispatch } from 'react-redux'
import HomeBestSellers from "../components/home/homeBestSellers";
import HomeHero from "../components/home/homeHero";
import useHome from "../hooks/useHome";
import { fetchReadHeroProducts, fetchReadBeastSellersProducts } from '../redux/thunks/homethunks';

const HomePages = ( ) => {
  const dispatch = useDispatch();
  const { heroProducts } = useHome();

  useEffect(() => {
    dispatch(fetchReadHeroProducts());
    dispatch(fetchReadBeastSellersProducts());
  }, []);

  return (
    <>
      <HomeHero heroProducts={heroProducts}/>
      <HomeBestSellers/>
    </>
  );
};

export default HomePages