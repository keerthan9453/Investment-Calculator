import {calculateInvestmentResults , formatter} from '../util/investment';

export default function Results({input}){
    const resultData = calculateInvestmentResults(input);
    const initalInvestment = resultData[0].valueEndOfYear - resultData[0].interest -
    resultData[0].annualInvestment;

    return(
       <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Year</th>
                <th>Total Intrest</th>
                <th>Invested Capital</th>
                <th>Total Amount Invested</th>
            </tr>
        </thead>
        <tbody>

            {resultData.map(yearData=> {
                const totalInterest = yearData.valueEndOfYear - yearData.interest - 
                yearData.annualInvestment * yearData.year - initalInvestment;

                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                return (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
                );
            })}
        </tbody>
       </table>
    );
}