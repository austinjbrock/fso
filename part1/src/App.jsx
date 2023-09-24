const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello from {props.name}. you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  
  const name ="austin"
  const age = 32
  
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name ='maya'age = {25+10} />
      <Hello name ={name} age ={age} />
    </div>
  )
}


export default App
