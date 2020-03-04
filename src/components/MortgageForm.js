import React, { Component} from 'react';

class MortgageForm extends Component {

  constructor(props){
    super(props);
    this.state={
      applicants: 1,
        firstSalary: 0,
        secondSalary: 0,
        deposit: 0,
        otherCommitments: 0
    }
    this.handleApplicantsChange = this.handleApplicantsChange.bind(this);
    this.handleFirstSalaryChange = this.handleFirstSalaryChange.bind(this)
    this.handleSecondSalaryChange = this.handleSecondSalaryChange.bind(this)
    this.handleDepositChange = this.handleDepositChange.bind(this)
    this.handleOtherCommitmentsChange = this.handleOtherCommitmentsChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleApplicantsChange(event){
    this.setState({applicants: parseInt(event.target.value)})
  }

  secondApplicant(){
    if (this.state.applicants === 2){
      return <input type="number" placeholder="Enter Second Salary" min="0" onChange={this.handleSecondSalaryChange}/>
    }
  }

  handleFirstSalaryChange(event){
    this.setState({firstSalary: parseInt(event.target.value)});
  }

  handleSecondSalaryChange(event){
    this.setState({secondSalary: parseInt(event.target.value)});
  }

  handleDepositChange(event){
    this.setState({deposit: parseInt(event.target.value)});
  }

  handleOtherCommitmentsChange(event){
    this.setState({otherCommitments: parseInt(event.target.value)});
  }

  handleFormSubmit(event){
    event.preventDefault();
    const newCriteria = {
      firstSalary: this.state.firstSalary,
      secondSalary: this.state.secondSalary,
      deposit: this.state.deposit,
      otherCommitments: this.state.otherCommitments
    }
    this.props.submitCriteria(newCriteria)
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
      <h3>Please select number of salaries to consider:</h3>
      <input type="radio" name="applicants" value="1" defaultChecked onChange={this.handleApplicantsChange}/>
      <label htmlFor="1">1</label>
      <input type="radio" name="applicants" value="2" onChange={this.handleApplicantsChange}/>
      <label htmlFor="2">2</label>
      <br/><br/>

      <input type="number" placeholder="Enter First Salary:" min="0" onChange={this.handleFirstSalaryChange}/>
      {this.secondApplicant()}

      <br/><br/>
      <input type="number" placeholder="Enter Deposit Amount:" min="0" onChange={this.handleDepositChange}/>

      <br/><br/>
      <input type="number" placeholder="Other Monthly Commitments" min="0" onChange={this.handleOtherCommitmentsChange}/>


      <br/><br/>
      <input type="submit" value="Calculate" />

      </form>
    )
  }

}

export default MortgageForm;
