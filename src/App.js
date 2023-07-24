import './App.css';
import * as d3 from 'd3';

function App() {
    let arr = [];

    const req = fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
      .then(response => response.json())
      .then(data => {return data.data});

    const pushData = async () => {
      const d = await req.then(data => {arr.push(data)});
      console.log(d);
    }

    pushData();

    console.log(arr[0]);

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
