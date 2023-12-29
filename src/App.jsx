import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="parent">
      <Card
        color="#E28625"
        src="./public/Group 2 (4).svg"
        title="Sedans"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />
      <Card
        color="#006971"
        src="./public/Group 3.svg"
        title="SUVs"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />
      <Card
        color="#004140"
        src="./public/Group 4 (4).svg"
        title="Luxury"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
      />
    </div>
  );
}

export default App;
