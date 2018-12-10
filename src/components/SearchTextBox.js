import React from 'react';
import {connect} from "react-redux";
import {setSearchText} from "../actions";

function SearchTextBox(props) {
  return (
      <div>
        Search Users on First Name:
        <input onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
      </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
   set:function(txt){
     let action = setSearchText(txt);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(SearchTextBox);
