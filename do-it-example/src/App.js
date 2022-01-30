import logo from './logo.svg';
import './App.css';
import ChildComponent from './03/ChildComponent';

function App() {
  return (
    <ChildComponent
      boolValue={true}
    />
  );
}

export default App;
