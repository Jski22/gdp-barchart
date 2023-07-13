import './App.css';

function App() {
    fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
      .then(response => response.json())
      .then(data => {
        document.getElementById("test").innerHTML = JSON.stringify(data);
      })
  

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
