import React, { Component} from 'react';

class MortgageForm extends Component {

  constructor(props){
    super(props);
    this.state={
      applicants: 1,
      criteria: {
        firstSalary: 0,
        secondSalary: 0,
        deposit: 0,
        otherCommitments: 0
      }
    }
    this.handleApplicantsChange = this.handleApplicantsChange.bind(this);
    this.handlefirstSalaryChange = this.handlefirstSalaryChange.bind(this);
  }

  handleApplicantsChange(event){
    this.setState({applicants: parseInt(event.target.value)})
  }

  secondApplicant(){
    if (this.state.applicants === 2){
      return <input type="number" placeholder="Enter Second Salary" min="0"/>
    }
  }

  handlefirstSalaryChange(event){
    this.setState({criteria:{firstSalary: event.target.value}});
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

      <input type="number" placeholder="Enter First Salary:" min="0" value={this.state.criteria.firstSalary} onChange={this.handlefirstSalaryChange}/>
      {this.secondApplicant()}

      <br/><br/>
      <input type="number" placeholder="Enter Deposit Amount:" min="0"/>

      <br/><br/>
      <input type="number" placeholder="Other Monthly Commitments" min="0"/>


      <br/><br/>
      <input type="submit" value="Calculate"/>

      </form>
    )
  }

}

export default MortgageForm;
