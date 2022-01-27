import CookieConsent from "react-cookie-consent"
import Link from "next/link"
import styles from "../styles/CustomCookieConsent.module.scss"

export default function CustomCookieConsent(){
    return <CookieConsent 
    debug={true} 
    location="bottom" 
    cookieName="jonathanfreire-CookieConsent"
    buttonText="I understand and I accept the use of cookies" 
    enableDeclineButton={true}
    declineButtonText="I do not accept the use of cookies"
    flipButtons={true}
    buttonWrapperClasses={styles.buttonWrapper}
    style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fff",
        boxShadow: "1px 0 7px 3px #ababab",
        padding: "20px 0 10px",
    }}
    contentStyle={{
        flex: "none",
        color: "rgb(44, 44, 44)",
        fontSize: "1rem",
        textAlign: "center"
    }}
    buttonStyle={{
        background: "rgb(44, 44, 44)",
        color: "#fff",
        padding: "10px 20px",
    }}
    declineButtonStyle={{
        background: "#fff",
        color: "rgb(44, 44, 44)",
        border: "1px solid #ccc",
        padding: "10px 20px",
    }}
    expires={1}>
      <p className={styles.title}><strong>This website uses cookies.</strong></p>
      <p className={styles.content}>I am always working to improve this website for my users. To do this, I use the anonymous data provided by cookies.</p>
      <Link href="/privacy-policy">
        <a className={styles.link}>Learn more about how I use cookies</a>
      </Link>
  </CookieConsent>
}