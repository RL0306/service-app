import { IElementType } from "../interface/IInput";

const Input = (props : IElementType) => {
  
  const {type, name, className, placeholder} = props;

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className={className} 
      name={name}/>
  )
}

export default Input;