import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import { Typography } from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import { useStyles } from "../components/styles"
import styles from "../components/layout.css"

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <Typography className={classes.logo}>MB</Typography>

      <div className={classes.headerContainer}>
        <div className={`${classes.headerContent} ${styles.headerAnimation}`}>
          <Typography className={classes.headerFont}>Hello,</Typography>
          <Typography className={classes.headerFont}>
            I'm Marvin Banton
          </Typography>
          <Typography className={classes.subFont}>
            a junior developer who loves to create and design websites.
          </Typography>
          <Link to="">
            <LinkedInIcon className={classes.socialSites} />
          </Link>
          <Link to="">
            <InstagramIcon className={classes.socialSites} />
          </Link>
          <Link to="">
            <GitHubIcon className={classes.socialSites} />
          </Link>
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
