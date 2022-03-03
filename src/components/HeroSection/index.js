import React from "react"
import styles from "./HeroSection.module.css"
import "../layout.css"
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <h1>Travel More</h1>
      <p>Plan your next trip today</p>
      <div className={styles.heroBtns}>
        <Link 
          name="navLinks" 
          to="destinations-section"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <button className={`btn btnPrimary big`}>Get Started</button>
        </Link>
      </div>
    </div>
  )
}
