import React, { Component} from 'react';
import MortgageForm from '../components/MortgageForm';
import MortgageAmount from '../components/MortgageAmount'

class MortgageContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      criteria: null
    }
    this.updateCriteria = this.updateCriteria.bind(this)
  }

  updateCriteria(newCriteria){
    this.setState({criteria: newCriteria})
  }

  render() {
    return (
      <article>
      <h2>I'm a mortgage container</h2>
      <MortgageForm submitCriteria={this.updateCriteria}/>
      <MortgageAmount criteria={this.state.criteria}/>
      </article>
    )
  }

}

export default MortgageContainer;
