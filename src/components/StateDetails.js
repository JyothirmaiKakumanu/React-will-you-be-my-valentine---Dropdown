import React, { useState } from 'react';
import CityDetails from './CityDetails';

const StateDetails = ({statesList,stateName,setState}) => {
    console.log("in state details");
    
    // console.log(`statename${props.stateName}`);
    // const stateList = props.stateList;
    // console.log(`statesList${statesList[0].name}`);

    // const chooseOptions = ()=>{
    //     console.log("inside chooseOptions");
    //    return  stateList.map((op,index)=>{
    //         <option value="0">{stateList[index].name}</option>
    //     })
    // }
    
    // const [showCity,setShowCity] = useState(false);
    const [cityName,setCity] = useState(0);

    const stateOptions =(arr)=>{
        console.log("inside state options");
        let states = arr.map((state,index)=>{
            console.log("in states fun"+arr[index].name);
            return <option key ={index} value={index}>{arr[index].name}</option>
        })
        return states;
    }


    return (
        <>
        <div id="state-details">
            <label id="state-title">State:</label>
            <div id="state-name">
                <select id="state" value={stateName}
                onChange={event=>{
                    let statename = parseInt(event.target.value);
                    setState(statename);
                    // setShowCity(true);
                }}>
                {stateOptions(statesList)}
                    {/* <option value="0">Madhya Pradesh</option>
                    <option value="1">Jkarkhand</option>
                    <option value="2">Assam</option>
                    <option value="3">Bihar</option> */}
                </select>
            </div>
            <div id="state-description">
                {statesList[stateName].name}
                <br/>
                {statesList[stateName].description}
            </div>
            {/* <br/>
            <br/>
            <br/> */}



        </div>
        
        <CityDetails cityList={statesList[stateName].city} cityname={cityName} setcity = {setCity}/>
        
        </>

        // <label id="state-title">State:</label>
        // <div id="state-name">
        //     <select id="state">
        //         <option value="0">Madhya Pradesh</option>
        //     </select>
        // </div>
        // <div id="state-description">
        // Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.
        // </div>
    
    );
};

export default StateDetails;