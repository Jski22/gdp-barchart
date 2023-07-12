import './App.css';

function App() {
  const req = () => {
    fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
      .then(response => {
        return response.json()
      })
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
