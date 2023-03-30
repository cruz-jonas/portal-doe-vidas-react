import { useState } from 'react'

const QuestionComponent = ({addChoice}) => {

    const [selected, setSelected] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addChoice(selected)
    }

    const handleSelected = (e) => {
        setSelected(e.target.value)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="radio" name="gender" value="Male" onChange={handleSelected} /> Male
                    <input type="radio" name="gender" value="Female" onChange={handleSelected} /> Female
                    <input type="radio" name="gender" value="Other" onChange={handleSelected} /> Other
                    <button>Submeter</button>
                </form>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="radio" value="Native" name="origem" onChange={handleSelected} /> Native
                    <input type="radio" value="Tourist" name="origem" onChange={handleSelected} /> Tourist
                    <button>Submeter</button>
                </form>
            </div>
        </div>
    )
}

export default QuestionComponent
