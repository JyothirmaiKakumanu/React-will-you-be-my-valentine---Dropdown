import React from 'react';

const LandmarkDetails = ({landmarkList,landmarkName,setlandmark}) => {

    console.log(landmarkList[0].name);


    const landmarkOptions =(arr)=>{
        console.log("inside landmark options");
        let landmarks = arr.map((landmark,index)=>{
            console.log("in landmark fun"+arr[index].name);
            return <option key ={index} value={index}>{arr[index].name}</option>
        })
        return landmarks;
    }

    return (
        <>
        <div id="landmark-details">
            
        <label id="landmark-title">City:</label>
       <div id="landmark-name">
           <select id="landmark" value={landmarkName}
           onChange={event=>{
               let landmarkname = parseInt(event.target.value);
               setlandmark(landmarkname);
           }}>
           {/* let index =0; */}
          {landmarkOptions(landmarkList)}
           
           </select>
       </div>
       <div id="landmark-description">
           {landmarkList[landmarkName].name}
           <br/>
           {landmarkList[landmarkName].description}
       </div>
   </div>
   </>
    );
};

export default LandmarkDetails;