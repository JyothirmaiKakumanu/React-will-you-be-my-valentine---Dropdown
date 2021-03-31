import React from 'react';

const CityDetails = ({cityList,cityname,setcity}) => {

    console.log("in city details");
    console.log(`cityName${cityList[0].name}`);
    return (
        <>
        {/* <br/> */}
        <div id="city-details">
            
             <label id="city-title">City:</label>
            <div id="city-name">
                <select id="city" value={cityname}
                onChange={event=>{
                    let cityname = parseInt(event.target.value);
                    setState(cityname);
                }}>
                {/* let index =0; */}
                cityList.map((item,index)={
                    <option value={index}>{item.name}</option>
                })
                
                    {/* <option value="0">Madhya Pradesh</option>
                    <option value="1">Jkarkhand</option>
                    <option value="2">Assam</option>
                    <option value="3">Bihar</option> */}
                </select>
            </div>
        </div>
        </>
    );
};

export default CityDetails;