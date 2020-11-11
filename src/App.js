
import './App.css';
import logo from "./logo/the-godfather.svg";
import data from "./data/EmployeeData.json";


function App() {

  const myData = data.employees;
  const listItems = myData.map(item =>
        <div className="employee">
              <a href="#">{item.name}</a>
       </div>
  );

  return (
    <div className="banner">
    <div className="dash-board">
      <div className="left-col">
        <img src={logo} alt="Logo" className="logo"></img>
        <div className="data-list">{listItems}</div>
      </div>
      <div className="right-col">

      </div>
    </div>
    </div>
  );
}

export default App;
