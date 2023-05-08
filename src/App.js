import './App.css';
import QuestionComponent from './component/QuestionComponent';

function App() {

    const addChoice = (e) => {
      console.log(e)
    }

    return (
      <div className="App">
        <QuestionComponent addChoice={addChoice} />
      </div>
    );
  }

export default App;
