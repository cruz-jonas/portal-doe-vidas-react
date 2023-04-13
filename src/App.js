import './App.css';
// import { useState } from 'react'
import QuestionComponent from './component/QuestionComponent';
// import PieChart from './component/PieChartComponent'; 
// import { questions } from './data/questions'

function App() {


    // const data = graficos.grafico1

    // const [choices, setChoices] = useState(data)

    const addChoice = (e) => {
      // choices.map((choice) => {
      //   if (choice[0] === e) {
      //     choice[1] = ++choice[1]
      //   } else {
      //     setChoices((actualChoices) => [...actualChoices, [e, 1]])
      //   }
      // })
      // data = choices;
      console.log(e)
    }

    return (
      <div className="App">
        <QuestionComponent addChoice={addChoice} />
        {/* <PieChart data={data} /> */}
      </div>
    );
  }

export default App;
