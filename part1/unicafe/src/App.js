import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good-bad)/total 
  const positive = good/total

  if(total>0){
    return(
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive*100} />
          </tbody>
        </table>
      </div>)
  }
  else{
    return(<div><h1>statistics</h1>
      <p>No feedback given</p></div>)
  }
}

const Button = ({onClick, text}) =>{
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({text, value}) =>{
  if(text !== "positive"){
    return <tr><td>{text}</td><td>{value}</td></tr>
  }
  else{
    return <tr><td>{text}</td><td>{value}%</td></tr>
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => {
    console.log("good")
    setGood(good+1)
  }

  const updateNeutral = () => {
    console.log("neutral")
    setNeutral(neutral+1)

  }

  const updateBad = () => {
    console.log("bad")
    setBad(bad+1)
  }
  
  const total = good + neutral + bad
  const average = (good-bad)/total 
  const positive = good/total
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={updateGood}>good</button>
      <button onClick={updateNeutral}>neutral</button>
      <button onClick={updateBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
