import React, { useState } from 'react';
import LandmarkDetails from './LandmarkDetails';

const CityDetails = ({cityList,cityname,setcity}) => {

    console.log("in city details");
    console.log(`cityName${cityList[0].name}`);
    const [landmark,setLandmark] = useState(0);
    

    const cityOptions =(arr)=>{
        console.log("inside city options");
        let cities = arr.map((city,index)=>{
            console.log("in city fun"+arr[index].name);
            return <option key ={index} value={index}>{arr[index].name}</option>
        })
        return cities;
    }

    return (
        <>
        {/* <br/> */}
        <div id="city-details">
            
             <label id="city-title">City:</label>
            <div id="city-name">
                <select id="city" value={cityname}
                onChange={event=>{
                    let cityname = parseInt(event.target.value);
                    setcity(cityname);
                }}>
                {/* let index =0; */}
               {cityOptions(cityList)}
                
                </select>
            </div>
            <div id="city-description">
                {cityList[cityname].name}
                <br/>
                {cityList[cityname].description}
            </div>
        </div>
        <LandmarkDetails landmarkList={cityList[cityname].landmarks} 
        landmarkName={landmark} setlandmark = {setLandmark}/>
        </>
    );
};

export default CityDetails;