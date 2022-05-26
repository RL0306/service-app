import { IElementType } from "../interface/IInput";




const Button = ({className, placeholder, name, text} : IElementType) => {
  return (
    <button type="submit" className={className} placeholder={placeholder} name={name}>{text}</button>
  )
}

export default Button;