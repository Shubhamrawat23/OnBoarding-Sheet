import './App.css';
import Main from './Components/Main';
import { OnBoardSheetProvider } from './Context/Context';

function App() {
  return (
    <div className="App">
      <OnBoardSheetProvider>
        <Main />
      </OnBoardSheetProvider>
    </div>
  );
}

export default App;
