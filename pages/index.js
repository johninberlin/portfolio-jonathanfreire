import Head from 'next/head'
import Layout from '../components/Layout'
import HomeMain from "../components/HomeMain"
import AboutMe from '../components/AboutMe'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Separator from '../components/Separator'
import Skills from '../components/Skills'
import { useRouter } from "next/router"
import de from "../locales/de"
import en from "../locales/en"
export default function Home() {
  const router = useRouter();
  const {locale} = router;
  const t = locale === "en" ? en.index : de.index;

  return (
    <div>
      <Head>
        <title>Jonathan Freire</title>
        <meta name="description" content={t.headContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Jonathan Freire." subtitle={t.subtitle} refTitle="/" firstRef="/#works" firstName={t.firstName} secondRef="/#contact" secondName={t.secondName}>
        <HomeMain />
        <AboutMe />
        <Skills />
        <Works />
        <Separator />
        <Contact />
      </Layout>
    </div>
  )
}
