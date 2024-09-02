import logo from '../assets/investment-calculator-logo.png';
export default function Header(){
    return (
        // we need the header id for making sure the formating is correct 
        <header id="header">
            <img src={logo} />
            
            <h1>Investment Calculator</h1>
        </header>
    );
}