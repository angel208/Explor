import React from "react"
import styles from "./footer.module.css"
import { Link } from "gatsby"
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa"
import { DiReact } from "react-icons/di"

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.socialMedia}>
        <div className={styles.socialMediaWrap}>
          <Link className={styles.socialLogo} to="/">
            <DiReact className={styles.socialIcon} />
            EXPLOR
          </Link>
          <p className={styles.webSiteRights} >
            Site made with learning purposes - 2020
          </p>
          <div className={styles.socialIcons}>
            <a
              className={styles.socialIconLink}
              href="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className={styles.socialIconLink}
              href="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={styles.socialIconLink}
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className={styles.socialIconLink}
              href="/"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              className={styles.socialIconLink}
              href="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
