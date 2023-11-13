import { NavBar } from "./NavBar"
import "../CSS/Header.css"
export const Header = () => {
  return (
    <div className="bloque-header">
      <div className="elemento-logo-header">
        <img src="http://res.cloudinary.com/ddlvvek8u/image/upload/v1699837552/WhatsApp%20Image%202023-11-10%20at%203.05.04%20PM%20%282%29.jpeg.jpg" alt="Logo MedicPro" width={"150px"} height={"15%"} />
      </div>
      <div className="elemento-navbar">
        <NavBar />
      </div>
    </div>
  )
}
