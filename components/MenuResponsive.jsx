import styles from "../styles/Navbar.module.scss"
import ButtonNavbar from "./ButtonNavbar"

export default function MenuResponsive({links, onClick}){
    return <div className={styles.containerMenuResponsive}>
        <ButtonNavbar link={links.works.link} name={links.works.name} onClick={onClick} />
        <ButtonNavbar link={links.contact.link} name={links.contact.name} onClick={onClick} />
    </div>
}