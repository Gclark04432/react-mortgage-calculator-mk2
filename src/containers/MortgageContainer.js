import React, { Component} from 'react';
import MortgageForm from '../components/MortgageForm';

class MortgageContainer extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <article>
      <h2>I'm a mortgage container</h2>
      <MortgageForm/>
      </article>
    )
  }

}

export default MortgageContainer;
