import React from 'react';
import { connect } from 'react-redux';

function CurrentCity(props) {
  return (
      <div>
        CurrentCity: {props.text}
      </div>
  );
}

function mapStateToProps(state){
  return {
    text: state.currentCity
  }
}

export default connect(mapStateToProps)(CurrentCity);