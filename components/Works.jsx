import styles from "../styles/Works.module.scss"
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"
import de from "../locales/de"
import en from "../locales/en"

export default function Works(){
    const router = useRouter();
    const {locale} = router;
    const t = locale === "en" ? en.works : de.works;
    
    return <div id="works" className={styles.root}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>{t.title.h3}</h3>
                <p>{t.title.p}</p>
            </div>
            <div className={styles.projects}>
                <Link href="https://socialart.jonathanfreire.com">
                    <div className={styles.project}>
                        <Image
                        src="https://res.cloudinary.com/ddjovluur/image/upload/v1643727233/portfolio/social-art_ri7fow.png"    
                        alt="social-art"
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        />
                        <p>Social Art</p>
                    </div>
                </Link>
                <Link href="https://timequiz.jonathanfreire.com">
                    <div className={styles.project}>
                        <Image
                        src="https://res.cloudinary.com/ddjovluur/image/upload/v1643727231/portfolio/time-quiz_drc3dt.png"    
                        alt="time-quiz"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        />
                        <p>Time Quiz</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}