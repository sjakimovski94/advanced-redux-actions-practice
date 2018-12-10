import React from "react";
import {connect} from "react-redux";
import {setTemp} from "../actions";

function ChangeTemperature(props){
    return(
      <div>
        <br/>
        <label>Change Temp -  Enter a value from 1-100<br/>
          <input onChange={(e)=>{
            if(props.set)
              props.set(e.target.value);
          }} type="number" min="0" max="100" />
        </label>
      </div>
    )
}

function mapDispatchToProps(dispatch){
  return {
   set:function(temp){
     let action = setTemp(temp);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(ChangeTemperature);
