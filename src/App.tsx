import './App.css';
import SkeletonImage from "./components/skeleton-image";

function App() {

  return (
    <div className="App">
        <SkeletonImage
            url='https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            width={400}
            height={300}
        />
    </div>
  );
}

export default App;
