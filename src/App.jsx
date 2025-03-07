import { useState, useEffect } from 'react'

import './App.css'
import InputSection from './components/InputSection.jsx'
import SiteLogoImg from '../public/site_logo.png'

function App() {

  const [formInputs, setFormInputs] = useState({});
  const [investmentTable, setInvestmentTable] = useState();

  useEffect((() => {
    if (formInputs.annualInv && formInputs.initialInv && formInputs.duration && formInputs.expReturn) {
      calcInvestmentTableValues();
    }
  }), [formInputs]);

  function calcInvestmentTableValues() {
    setInvestmentTable((prevInvestmentTable) => {
      let investmentTable = [];
      let year, investedCapital, interest, totalInterest, investmentValue;
      for (let i = 0; i < formInputs.duration; i++) {
        year = i + 1;
        if (i === 0) {
          investedCapital = parseInt(formInputs.initialInv) + parseInt(formInputs.annualInv);
          interest = parseInt(formInputs.initialInv) * (parseInt(formInputs.expReturn) / 100);
          totalInterest = interest;
          investmentValue = investedCapital + totalInterest;
        }
        else {
          investedCapital = investmentTable[i - 1].investedCapital + parseInt(formInputs.annualInv);
          interest = (investmentTable[i - 1].investedCapital + investmentTable[i - 1].totalInterest) * (parseInt(formInputs.expReturn) / 100);
          totalInterest = interest + investmentTable[i - 1].totalInterest;
          investmentValue = investedCapital + totalInterest;
        }
        investmentTable.push({
          year: year,
          investedCapital: investedCapital,
          interest: Math.round(interest),
          totalInterest: Math.round(totalInterest),
          investmentValue: Math.round(investmentValue)
        })
      }
      console.log(investmentTable);
      return investmentTable;
    }
    )
  }

  function handleFormInputs(e) {
    setFormInputs((prevFormInputs) => {
      return ({ ...prevFormInputs, [e.target.name]: e.target.value })
    }
    );
  }

  return (
    <>
      <img className='site-logo py-3' src={SiteLogoImg} alt="Site Logo" />
      <h2 className='site-title fw-bolder py-1'>Investment Calculator</h2>
      <InputSection form={formInputs} formHandler={handleFormInputs} />
      <section className='investments-table-section my-4'>
        <table className='table border-3 gap-3'>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
          {investmentTable &&
            investmentTable.map(record => {
              return (
                <tr key={record.year}>
                  <td>{record.year}</td>
                  <td>{record.investmentValue}</td>
                  <td>{record.interest}</td>
                  <td>{record.totalInterest}</td>
                  <td>{record.investedCapital}</td>
                </tr>)
            })
          }
        </table>
      </section>
    </>
  )
}

export default App
