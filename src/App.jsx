import './App.css';
import Nav from './components/Nav';
import {Provider} from './Provider';

function App() {
  return (
        <Provider>
            <Nav></Nav>
        </Provider> 
  );
}

export default App;
