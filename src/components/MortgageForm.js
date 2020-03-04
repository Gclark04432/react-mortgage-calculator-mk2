import React, { Component} from 'react';

class MortgageForm extends Component {

  constructor(props){
    super(props);
    this.state={
      applicants: 1
    }
    this.handleApplicantsChange = this.handleApplicantsChange.bind(this);
  }

  handleApplicantsChange(event){
    this.setState({applicants: parseInt(event.target.value)})
  }

  secondApplicant(){
    if (this.state.applicants === 2){
      return <input type="number" placeholder="Enter Second Salary" min="0"/>
    }
  }



  render(){
    return(
      <form>
      <h3>Please select number of salaries to consider:</h3>
      <input type="radio" name="applicants" value="1" onChange={this.handleApplicantsChange}/>
      <label htmlFor="1">1</label>
      <input type="radio" name="applicants" value="2" onChange={this.handleApplicantsChange}/>
      <label htmlFor="2">2</label>
      <br/><br/>

      <input type="number" placeholder="Enter First Salary:" min="0"/>
      {this.secondApplicant()}

      <br/><br/>
      <input type="number" placeholder="Enter Deposit Amount:" min="0"/>

      <br/><br/>
      <input type="number" placeholder="Other Monthly Commitments" min="0"/>

      </form>
    )
  }

}

export default MortgageForm;
