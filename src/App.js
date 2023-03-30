import './App.css';
import { useState } from 'react'
import QuestionComponent from './component/QuestionComponent';
import PieChart from './component/PieChartComponent';

function App() {


  const data = [
    ['Gender', 'Choice'],
  ]

  const [choices, setChoices] = useState(data)

  const addChoice = (data) => {
    choices.map((choice) => {
      if(choice[0] === data) {
        choice[1] = ++choice[1]
      } else {
        setChoices((actualChoices) => [...actualChoices, [data, 1]])
      }
    })
    
  }

  return (
    <div className="App">
      <QuestionComponent addChoice={addChoice} />
      <PieChart data={choices} />
    </div>
  );
}

export default App;
