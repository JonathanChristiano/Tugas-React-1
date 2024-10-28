import './App.css';
import Follow from './components/Follow';
import Greetings from './components/Greetings';
import Guten from './components/Guten';
import Hello from './components/hello';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Greetings/>
      <Guten name="Jonathan"/>
      <Guten name="Christiano"/>
      <Guten name="JCH"/>
      <Follow/>
    </div>
  );
}

export default App;
