import './App.css';
import * as d3 from 'd3';

function App() {
    let arr = [];

    fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
      .then(response => response.json())
      .then(data => JSON.stringify(data))
      .then(d => arr.push(d))

    console.log(arr);

  return (
    <div className="App">
      <body>
        <h1>United States GDP</h1>
        <div id="test">
        </div>
      </body>
    </div>
  );
}

export default App;
