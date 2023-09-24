const App = () => {
  const course = 'Half Stack application development'
  const parts = [
        {
        name: 'Fundamentals of React',
        exercises: 10
      },
     {
        name: 'Using props to pass data',
        exercises: 7},
     {
        name: 'State of a component',
        exercises: 14
      }
    ]

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
    <Part part={parts[0].name} />
    <Part part={parts[1].name}/>
    <Part part={parts[2].name} />
    </div>
  
  )
}
//Total
const Total = ()=>{
  return(
    <h3>Total Number of exercises: {parts[0].exercises}</h3>
  )
}


  return (
    <div>
      <Header course={course} />
      <Content />
      <Total  />
    </div>
  )
}

 export default App
