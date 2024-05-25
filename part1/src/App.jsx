const Header = ({name}) => {
  return (
    <>
    <h1>{name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.part1} {props.exercises1}</p>
    </>
  )

}

const Content = ({part1, exercises1}) => {
  return (
    <>
    {/* <p>{part1} {excercise1}</p>
    <p>{part2} {exercises2}</p>
    <p>{part3} {exercises3}</p> */}
    <Part part1 = {part1} exercises1 = {exercises1} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>{props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course}/>
      <Content part1={part1} exercises1={exercises1}/>
      <Total exercises1={exercises1} exercises2 = {exercises2} exercises3 ={exercises3} />
    </div>
  )
}

export default App