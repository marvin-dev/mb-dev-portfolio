import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  // NAVIGATION STYLES
  navContainer: {
    background: `#141e38`,
    width: "auto",
    display: "flex",
    justifyContent: "center",
    marginRight: 50,
    position: "fixed",
    right: 0,
    margin: "30px 30px",
    padding: 8,
    "@media (max-width: 425px)": {
      margin: "20px 20px",
    },
  },

  // INDEX STYLES
  headerFont: {
    color: "#EAE7E7",
    fontSize: 74,
    fontWeight: "bold",
    lineHeight: "normal",
    "@media (max-width: 952px)": {
      fontSize: 65,
    },
    "@media (max-width: 768px)": {
      fontSize: 50,
    },
    "@media (max-width: 425px)": {
      fontSize: 40,
    },
  },
  subFont: {
    color: "#EAE7E7",
    fontSize: 24,
    fontWeight: 300,
    lineHeight: "normal",
    "@media (max-width: 425px)": {
      fontSize: 17,
    },
  },
  logo: {
    position: "absolute",
    padding: "32px 0 0 55px",
    color: "#03C194",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 27,
    fontFamily: "Roboto",
    letterSpacing: 2.5,
    "@media (max-width: 425px)": {
      padding: "26px 0 0 35px",
      fontSize: 24,
    },
  },
  headerContainer: {
    width: "100%",
    height: "100vh",
    marginBottom: "150rem",
    backgroundSize: "cover",
    overflow: "hidden",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
    backgroundColor: "#141e38",
    // background: "#222 no-repeat 50%",
    // position: "relative",
    "@media (max-width: 425px)": {
      textAlign: "center",
    },
  },
  headerContent: {
    // maxWidth: 800,
    animationDuration: "1s",
    animationName: "fadeIn",
    marginLeft: 400,
    "@media (max-width: 1440px)": {
      marginLeft: 250,
    },
    "@media (max-width: 1024px)": {
      marginLeft: 180,
    },
    "@media (max-width: 952px)": {
      marginLeft: 70,
    },
    "@media (max-width: 768px)": {
      marginLeft: 60,
    },
    "@media (max-width: 425px)": {
      margin: 30,
    },
  },
  socialSites: {
    color: "#EAE7E7",
    fontSize: 30,
    margin: "30px 0 0 30px",
  },
})

export { useStyles }
