import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { Drawer, List, ListItem, Typography } from "@material-ui/core"

import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles({
  list: {
    width: 250,
    background: "#111e3c",
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
  navMenu: {
    color: "#03C194",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: 2,
    "&:hover": {
      color: "#fff",
    },
    "@media (max-width: 425px)": {
      display: "none",
    },
  },
  navIcon: {
    color: "#fff",
    fontSize: 30,
    cursor: "pointer",
    marginLeft: 10,
    "@media (max-width: 425px)": {
      marginLeft: 0,
    },
  },
  navLinks: {
    fontSize: 19,
    fontWeight: 800,
    lineHeight: 1.9,
    textDecoration: "none",
    // textTransform: "uppercase",
    color: "#fff",
  },
})

export default function TemporaryDrawer() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ margin: "2.5rem 0 1rem 2rem" }}>
        <Typography
          variant="overline"
          style={{ color: "#fff", fontSize: 13, letterSpacing: 2.5 }}
        >
          Navigation
        </Typography>
        <div style={{ marginTop: 30 }} />
        <ListItem>
          <Link to="/" className={classes.navLinks}>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/page-2" className={classes.navLinks}>
            About
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/projects" className={classes.navLinks}>
            Projects
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contact" className={classes.navLinks}>
            Contact
          </Link>
        </ListItem>
      </List>
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  )

  return (
    <div>
      <React.Fragment>
        <div style={{ alignItems: "center", display: "flex" }}>
          <Typography
            variant="button"
            className={classes.navMenu}
            onClick={toggleDrawer("right", true)}
          >
            menu
          </Typography>
          <MenuIcon
            className={classes.navIcon}
            onClick={toggleDrawer("right", true)}
          />
        </div>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
