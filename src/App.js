import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Comments from "./components/Comments";
import './index.css';

function App() {
  return (
    <div className="bg-gradient-to-b from-maincolor to-darkshade h-screen">
      <div className="bg-gradient-to-b from-maincolor to-darkshade min-h-full">
        <Navbar/>
        <Content/>
        <Comments/>
      </div>
    </div>
    
  );
}

export default App;
