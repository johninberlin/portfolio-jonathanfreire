import styles from "../styles/AboutMe.module.scss"
import {useRouter} from "next/router"
import de from "../locales/de"
import en from "../locales/en"

export default function AboutMe(){
    const router = useRouter();
    const {locale} = router;
    const t = locale === "en" ? en.aboutMe : de.aboutMe;

    return <div className={styles.root}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>
                    {t.title}
                </h3>
            </div>
            <div className={styles.about}>
                <p>
                    {t.p1}
                </p>
                <p>
                    {t.p2}
                </p>
                <p>
                    {t.p3}
                </p>
            </div>
        </div>
    </div>
}