import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <div>
      <h1>{props.headerText}</h1>
      <Link to="/">Home</Link><br/>
      <Link to="/about/">About</Link><br/>
      <Link to="/contact/">Contact</Link><br/>
    </div>
  )
}
