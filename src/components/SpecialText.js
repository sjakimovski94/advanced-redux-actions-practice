import React from 'react';
import { connect } from 'react-redux';

function SpecialText(props) {
  return (
      <div>
        Special Text: {props.text}
      </div>
  );
}

function mapStateToProps(state){
  return {
    text: state.specialText
  }
}

export default connect(mapStateToProps)(SpecialText);