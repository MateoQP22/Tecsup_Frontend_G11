// import logo from './logo.svg';
import './App.css';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';
import Appointments from './components/Apointments/ApointmentsForm';

function App() {

  const company = {
      name: 'Patita Feliz',
      slogan: '🐱 La mejor Veterinaria del Perú 🐱'
  };

  const credits = {
    year: new Date().getFullYear(),
    author:'Mateo Quispe Pacheco'
};

return (
  <>
    <Header company={company}/>
    <main>
      <Appointments/>
    </main>
    <Footer credits={credits}/>
  </>
);
}

export default App;
