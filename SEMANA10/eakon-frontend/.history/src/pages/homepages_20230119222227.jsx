import { useEffect  } from "react";
import { useDispatch } from 'react-redux'
import HomeHero from "../components/home/homeHero";
import useHome from "../hooks/useHome";
import { fetchReadHeroProducts } from '../redux/thunks/homethunks';

const HomePages = ( ) => {
  const dispatch = useDispatch();
  const { heroProducts } = useHome();
  console.log(heroProducts);

  useEffect(() => {
    dispatch(fetchReadHeroProducts());  
  }, []);

  return (
    <HomeHero/>
  );
};

export default HomePages