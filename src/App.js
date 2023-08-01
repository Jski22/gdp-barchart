import './App.css';
import * as d3 from 'd3';

function App() {
  let arr = [];

  let request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json");
    request.send();
    request.onload = () => {
      const json = JSON.parse(request.responseText);
      arr.push(json.data);
    }
     
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
