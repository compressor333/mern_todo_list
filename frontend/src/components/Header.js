import Button from "./Button"




const Header = ({text, onClick, scale}) => {

  return (
    <header className="header">
      <h1>{text}</h1>
      <Button scale={scale} text='Close' onClick={onClick} color='Red'/>
    </header>
  )
}

export default Header






// const style = {color: 'red', backgroundColor: 'green'}

// Header.propTypes = {
//   hello: PropTypes.number.isRequired
// }