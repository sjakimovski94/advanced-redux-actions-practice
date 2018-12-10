import React from 'react';
import {connect} from "react-redux";
import {setCurrentCity} from "../actions";

function CityDropDown(props) {
  return (
      <div>
        CurrentCity: 
        <select onChange={
          (e)=>{
            if(props.set){
              props.set(e.target.value);
            }
          }
        }>
          <option value="Austin">Austin</option>
          <option value="New York">New York</option>
          <option value="New Olreans">New Olreans</option>
          <option value="Las Vegas">Las Vegas</option>
          <option value="Seattle">Seattle</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Washington D.C.">Washington D.C.</option>
        </select>
      </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
   set:function(city){
     let action = setCurrentCity(city);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(CityDropDown);