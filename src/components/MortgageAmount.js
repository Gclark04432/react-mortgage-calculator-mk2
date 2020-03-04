import React from 'react'

function MortgageAmount(props){

  function calculateMaximumMortgageAmount() {
    if (!props.criteria){
      return null
    }
    const mortgage = (props.criteria.firstSalary + props.criteria.secondSalary - props.criteria.otherCommitments) * 3;
    console.log(mortgage);
    return mortgage;
  }

  function calculateMaxPropertyValue(){
    const maxMortgage = calculateMaximumMortgageAmount()
    if (maxMortgage === null) {
      return null
    }
    return maxMortgage + props.criteria.deposit
  }

  function calculateMonthlyRepayment(){
    if (!props.criteria){
      return null
    }
    const mortgageAmount = calculateMaximumMortgageAmount()
    const rate = (props.criteria.interestRate/1200)
    const repayments = (props.criteria.mortgageTerm*12)
    const monthlyPayment = mortgageAmount * ((rate*(1+rate)**repayments) / (((1+rate)**repayments)-1) )
    return monthlyPayment
  }


  return (
    <article>
      <p>Maximum mortgage amount: £{calculateMaximumMortgageAmount()}</p>
      <p>Maximum property value: £{calculateMaxPropertyValue()}</p>
      <p>Monthly repayment: £{calculateMonthlyRepayment()}</p>
    </article>
  )
}

export default MortgageAmount
