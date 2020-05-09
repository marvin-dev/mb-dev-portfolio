import React from "react"
import Nav from "./nav"
import { useStyles } from "./styles"

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.navContainer}>
      <Nav />
    </div>
  )
}

export default Header
