import { Link } from "react-router-dom";
import logo from "../../../img/logo.svg";
import "./style.css"

export function Logo() {
  return (
    <Link className="logo" to="/"><img src={ logo } alt="Логотип" width="116" height="66" className="logo__image" /></Link>
  )
}