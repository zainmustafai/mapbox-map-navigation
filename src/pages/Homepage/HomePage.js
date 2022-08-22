import { useEffect,useState } from 'react';
import List from '../../components/List/List';
import MapBox from '../../components/MapBox'
import './HomePage.css';
import { getPlacesData } from '../../api';

  const HomePage = () => {
    const [places,setPlaces]=useState([]);
    const [lat,setLat]=useState(0);
    const [lon,setLon]=useState(0);
    // useEffect(()=>{ 
    //   getPlacesData().then((data)=>{
    //     console.log(data);
    //     setPlaces(data);
    //   });
    // },[])
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    if(lat===0 || lon===0) {return <p>loading</p>}
  return (
    
      <div className=" map-container">
        <div className="row row-container  ">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center ">
            <List/>
            <a href='/home' className='btn btn-warning w-25 mt-3'  >Search</a>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 text-center ">
            <MapBox longitude={lon} latitude={lat} places={places} />
          </div>

        </div>
      </div>
  
  )
}

export default HomePage