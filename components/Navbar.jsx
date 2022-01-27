import styles from "../styles/Navbar.module.scss"
import Link from "next/link"

export default function Navbar({title, subtitle, refTitle, firstRef, firstName, secondRef, secondName}){
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
                <div className={styles.nav}>
                    <div>
                        <Link href={firstRef}>
                            <a>
                                <p>
                                    {firstName}
                                </p>
                            </a>
                        </Link>
                    </div>
                    {secondRef && secondName &&
                        <div>
                            <Link href={secondRef}>
                                <a>
                                    <p>
                                        {secondName}
                                    </p>
                                </a>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
}