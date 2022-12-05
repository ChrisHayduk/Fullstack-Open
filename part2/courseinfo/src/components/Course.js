const Header = (props) => {
    return(
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }
  
const Part = ({part}) => {
    return(
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
const Total = ({parts}) => {
    const total = parts.reduce((currentValue, part) => {return part.exercises + currentValue},0)
  
    return(
      <div>
        <p><b>total of {total} exercises</b></p>
      </div>
    )
  }
  
const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course