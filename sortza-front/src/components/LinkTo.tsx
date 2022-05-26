import { Link } from "react-router-dom";
import { ILinkType } from "../interface/IInput";

const LinkTo = ({className, text, to} : ILinkType) => {
  return (
    <Link className={className} to={to}>{text}</Link>
  )
}

export default LinkTo;