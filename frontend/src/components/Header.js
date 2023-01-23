import Button from "./Button"




const Header = ({text, onClick}) => {

  return (
    <header className="header">
      <h1>{text}</h1>
      <Button text='Add' onClick={onClick} color='Red'/>
    </header>
  )
}

export default Header






// const style = {color: 'red', backgroundColor: 'green'}

// Header.propTypes = {
//   hello: PropTypes.number.isRequired
// }