import './App.css';
import * as d3 from 'd3';

function App() {
    fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
      .then(response => response.json())
      .then(data => {
        document.getElementById("test").innerHTML = JSON.stringify(data);
      })
  
    d3.select('body')
      .append('h1')
      .text('Test Title');

  return (
    <div className="App">
      <body>
        <div id="test">
        </div>
      </body>
    </div>
  );
}

export default App;
