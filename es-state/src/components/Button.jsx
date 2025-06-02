const Button = ({handler, label}) => {
  return (
    <button onClick={handler}>{label}</button>
  )
}

export default Button