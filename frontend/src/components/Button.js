

const Button = ({text, onClick, scale}) => {



return (
    <>
    <button onMouseEnter={scale("enter")} onMouseLeave={scale("leave")} onClick={onClick} className="btn">{text}</button>
    </>
  )
}

export default Button

