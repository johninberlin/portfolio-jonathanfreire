import Head from 'next/head'
import Layout from '../components/Layout'
import styles from "../styles/PrivacyPolicy.module.scss"
import { useRouter } from "next/router"
import de from "../locales/de"
import en from "../locales/en"
import PrivacyPolicyItem from '../components/PrivacyPolicyItem'
export default function Home() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en.index : de.index;
  const privacy = locale === "en" ? en.privacyPolicy : de.privacyPolicy;
  return (
    <div>
      <Head>
        <title>Jonathan Freire</title>
        <meta name="description" content={t.headContent} />
      </Head>
      <Layout title="Jonathan Freire." subtitle={t.subtitle} refTitle="/" firstRef="/#works" firstName={t.firstName} secondRef="#contact" secondName={t.secondName}>
        <div className={styles.root}>
            <div className={styles.container}>
                <h2>Privacy policy</h2>
            </div>
        </div>
      </Layout>
    </div>
  )
}