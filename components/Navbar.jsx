import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import React, { useState, useEffect } from 'react'
import NavbarCollapse from "./NavbarCollapse";
import MenuResponsive from "./MenuResponsive";
import ButtonNavbar from "./ButtonNavbar";

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
        if(windowWidth > 800){
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
                {windowWidth > 800 ?
                    <div className={styles.nav}>
                        <ButtonNavbar link={firstRef} name={firstName} />
                        <ButtonNavbar link={secondRef} name={secondName} />
                    </div>
                :   
                    <NavbarCollapse openMenuResponsive={openMenuResponsive} handleClick={handleOpenCollapseMenu} />
                }
            </div>
        </div>
        {openMenuResponsive && windowWidth <= 800 &&
            <MenuResponsive links={links} onClick={handleOpenCollapseMenu} />
        }
    </div>
}