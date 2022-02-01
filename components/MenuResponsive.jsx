import styles from "../styles/Navbar.module.scss"
import ButtonNavbar from "./ButtonNavbar"
import NavbarCollapse from "./NavbarCollapse";
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import cn from "classnames"

export default function MenuResponsive({links, onClick, openMenuResponsive, handleOpenCollapseMenu}){
    return <div className={cn(styles.containerMenuResponsive, (openMenuResponsive ? styles.openedMenuResponsive : styles.closedMenuResponsive))}>
        <div className={styles.content}>
            <NavbarCollapse handleClick={handleOpenCollapseMenu} fa={faTimes} />
            <ButtonNavbar link={links.works.link} name={links.works.name} onClick={onClick} />
            <ButtonNavbar link={links.contact.link} name={links.contact.name} onClick={onClick} />
        </div>
    </div>
}