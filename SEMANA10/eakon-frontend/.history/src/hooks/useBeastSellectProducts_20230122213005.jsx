import { useSelector } from 'react-redux'

const useBeastSelectProducts = () => {
  return (
    useSelector(state => state.home)
  );
};

export default useBeastSelectProducts;