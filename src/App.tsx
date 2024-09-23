import './App.css';
import customFetch from "./helpers/fetch";

function App() {
    customFetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(console.log);

  return (
    <div className="App">
    </div>
  );
}

export default App;
