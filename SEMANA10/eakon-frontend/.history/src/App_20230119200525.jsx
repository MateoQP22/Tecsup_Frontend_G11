import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store';
import { primaryRoute } from './routes/primaryRoute';

function App() {
  console.log("s")
  return (
    <Provider store={store}>
      <RouterProvider router={primaryRoute} />
    </Provider>
  );
}

export default App;