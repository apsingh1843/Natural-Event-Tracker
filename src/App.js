import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import FireMap from './components/firemap';
import VolcanoMap from './components/volcanomap';
import IcebergMap from './components/icebergmap';
import Loader from './components/loader';
import { Switch, Route, Redirect } from 'react-router-dom';


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
  },[])

  return (
    <div>
      <Header />
       {!isLoading ?
         <Switch>
           <Route path='/wildfire' component={() => <FireMap eventData={eventData}/> } />
           <Route path='/volcano' component={() => <VolcanoMap eventData={eventData}/> } />
           <Route path='/iceberg' component={() => <IcebergMap eventData={eventData}/> } />
           <Redirect to='/wildfire' />
         </Switch>
           : <Loader /> }
    </div>
  );
}

export default App;
