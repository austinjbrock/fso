const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  
  //Header 
  const Header =(props)=>{
    return(
      <h1>{props.course}</h1>
    )
  }


// Parts
const Part = (props)=>{
  return(
    <li>{props.part}</li>
  )
}



//Content
const Content = ()=>{
  return(
    <div> 
    <Part part={part1} />
    <Part part={part2}/>
    <Part part={part3} />
    </div>
  
  )
}

//Total
const Total = (props)=>{
  return(
    <h3>Total Number of exercises: {props.exercises}</h3>
  )
}
  
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}







export default App