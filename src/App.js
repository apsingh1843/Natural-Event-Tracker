import { useState, useEffect } from 'react';
import './App.css';
//import Map from './components/map';
import Header from './components/header';
import Map from './components/map';
import Loader from './components/loader';

function App() {
  const[eventData, setEventData] = useState([]);
  const[isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      setEventData(events)
      setIsLoading(false)
    }

    fetchEvents()
    console.log(eventData);
  }, [])

  return (
    <div>
      <Header />
      {!isLoading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;
