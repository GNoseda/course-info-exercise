function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      name: 'State of a component',
      exercise: 14
    }
  ]
  return (
    <div>
      <Header prompt={course}/>
      <Part parts={parts}/> 
      <Total parts={parts}/> 
    </div>
  )
}

//One Liner component form
const Header = (prompt) => <h1>{prompt.prompt}</h1> 

const Part = (prompt) => {
  var text = ""
  return (
    <>
      <p>{prompt.parts[0].name} {prompt.parts[0].exercise}</p>
      <p>{prompt.parts[1].name} {prompt.parts[1].exercise}</p>
      <p>{prompt.parts[2].name} {prompt.parts[2].exercise}</p>
    </>
  )
}

// Regular component form
const Total = (prompt) => {
  let total = prompt.parts[0].exercise + prompt.parts[1].exercise + prompt.parts[2].exercise
  return(
    <p>Number of exercises {total} </p>
  )
}

export default App;
