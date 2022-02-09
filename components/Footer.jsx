import styles from "../styles/Footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {useRouter} from "next/router"
import Link from "next/link"
import de from "../locales/de"
import en from "../locales/en"

export default function Footer(){
    const router = useRouter();
    const {locale} = router;
    const t = locale === "en" ? en.footer : de.footer;
    const handleCookieSettings = (e)=> {
        e.preventDefault();
        window.cookiehub.openSettings();
      }

    return <div id="footer" className={styles.root}>
        <div className={styles.container}>
            <div className={styles.message}>
                <p>{t.message.firstPart} <FontAwesomeIcon icon={faHeart} className={styles.iconHeart} /> {t.message.secondPart}</p>
            </div>
            <div className={styles.content}>
                <div className={styles.policy}>
                    <p>
                        © 2022 Jonathan Freire | <Link href="/privacy-policy"><a>Privacy policy</a></Link>
                    </p>
                    <p className={styles.cookieSettings}><a href="" onClick={handleCookieSettings}>Cookie settings</a></p>
                </div>
                <div className={styles.socialMedia}>
                    <span>
                        <a href="https://github.com/jonathanfreiredev"><FontAwesomeIcon icon={faGithub} className={styles.iconSocialMedia} /></a>
                        <a href="https://www.linkedin.com/in/jonathan-freire/"><FontAwesomeIcon icon={faLinkedin} className={styles.iconSocialMedia} /></a>
                    </span>
                </div>
            </div>
        </div>
    </div>
}