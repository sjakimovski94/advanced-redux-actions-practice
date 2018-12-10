import React from "react";
import DonutChart from "./ignore/DonutChart";
import { connect } from 'react-redux';

function Thermostat(props){
  return (<DonutChart value={props.temp || 23 } />)
}

function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

export default connect(mapStateToProps)(Thermostat);