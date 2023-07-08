import './App.css'
import PreviewCard from './components/PreviewCard'
import sedanImage from "./components/assets/icon-sedans.svg"
import luxuryImage from "./components/assets/icon-luxury.svg"
import suvsImage from "./components/assets/icon-suvs.svg"

const data = [
  {
    id: 1,
    title: 'Sedans',
    text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    image: sedanImage,
    className: 'sedan',
  },
  {
    id: 2,
    title: 'SUVs',
    text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    image: luxuryImage,
    className: 'suv',
  },
  {
    id: 3,
    title: 'Luxury',
    text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    image: suvsImage,
    className: 'luxury',
  }
];

function App() {


  return (
    <>

      <div className='card-group'>
        {data.map(function (carItem) {
          return (
            <PreviewCard key={carItem.id} vehicleName={carItem.title} vehicleDescription={carItem.text} className={carItem.className} vehicleImage={carItem.image} />
          )
        })
        }
      </div>


      <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://nathanturkson.netlify.app/" target="_blank" rel="noreferrer">Nathan Turkson</a>.
            </div>


    </>
  )
}

export default App
