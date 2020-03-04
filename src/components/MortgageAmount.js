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


  return (
    <article>
    {console.log(props)}
    <p>{calculateMaximumMortgageAmount()}</p>
    </article>
  )
}

export default MortgageAmount
