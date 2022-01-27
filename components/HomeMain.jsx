import styles from "../styles/HomeMain.module.scss"
import Image from "next/image"
import {useRouter} from "next/router"
import de from "../locales/de"
import en from "../locales/en"

export default function HomeMain(){
    const router = useRouter();
    const {locale} = router;
    const t = locale === "en" ? en.homeMain : de.homeMain;

    return <div className={styles.root}>
        <div className={styles.content}>
            <h2 className={styles.title}>
                <p>{t.title.hi}</p>
                <p>{t.title.jr} <strong>{t.title.strong}</strong></p>
                <p>{t.title.base}</p>
            </h2>
        </div>
        <div className={styles.graphics}>
            <Image 
                src="/pensador.png"
                alt="The Thinker"
                layout="responsive"
                priority="true"
                width={500}
                height={671}
                className={styles.image}
            />
        </div>
</div>
}