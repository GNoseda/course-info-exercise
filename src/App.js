function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header prompt={course}/>
      <Part prompt={course}/> 
      <Total prompt={course}/> 

    </div>
  )
}
//One Liner component form
const Header = ({prompt}) => <h1>{prompt.name}</h1>

const Part = ({prompt}) => {
  return (
    <>
      <p>{prompt.parts[0].name} {prompt.parts[0].exercises}</p>
      <p>{prompt.parts[1].name} {prompt.parts[1].exercises}</p>
      <p>{prompt.parts[2].name} {prompt.parts[2].exercises}</p>
    </>
  )
}

// Regular component form
const Total = ({prompt}) => {
  let total = prompt.parts[0].exercises + prompt.parts[1].exercises + prompt.parts[2].exercises
  return(
    <p>Number of exercises {total} </p>
  )
}

export default App;
