import "../style/layout.scss"
import type { FC } from "react"
import { IChildComponent } from "../interface/IChildComponent"



const Layout: FC<IChildComponent> = ({ children }) => {
  return (
    <div className="layout-container">
      {children}
    </div>
  )
}

export default Layout