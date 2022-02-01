import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import React, { useState, useEffect } from 'react'
import NavbarCollapse from "./NavbarCollapse";
import MenuResponsive from "./MenuResponsive";
import ButtonNavbar from "./ButtonNavbar";
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar({title, subtitle, refTitle, firstRef, firstName, secondRef, secondName}){
    const [windowWidth, setWindowWidth] = useState(0);
    const [openMenuResponsive, setOpenMenuResponsive] = useState(false);

    const links = {
        works:{
            name: firstName,
            link: firstRef
        },
        contact:{
            name: secondName,
            link: secondRef
        },
    }

    const updateDimensions = () => {
        setWindowWidth(window.innerWidth);
    }
    const handleOpenCollapseMenu = ()=>{
        setOpenMenuResponsive(!openMenuResponsive);
    }

    useEffect(() => { 
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize",updateDimensions);
    }, []);

    useEffect(()=>{
        if(windowWidth > 700){
            setOpenMenuResponsive(false);
        }
    },[windowWidth])

    return <div className={styles.root}>
        <div className={styles.container}>
            <div className={styles.brand}>
                <Link href={refTitle}>
                    <a>
                        <h1 className={styles.title}>
                            <strong className={styles.name}>{title}</strong>
                            <span className={styles.description}>{subtitle}</span>
                        </h1>
                    </a>
                </Link>
            </div>
            <div className={styles.menu}>
                {windowWidth > 700 ?
                    <div className={styles.nav}>
                        <ButtonNavbar link={firstRef} name={firstName} />
                        <ButtonNavbar link={secondRef} name={secondName} />
                    </div>
                :   
                    <NavbarCollapse handleClick={handleOpenCollapseMenu} fa={faBars} />
                }
            </div>
        </div>
        {windowWidth <= 700 &&
            <MenuResponsive links={links} onClick={handleOpenCollapseMenu} openMenuResponsive={openMenuResponsive} handleOpenCollapseMenu={handleOpenCollapseMenu} />
        }
    </div>
}