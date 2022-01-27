import styles from "../styles/Skills.module.scss"
import Skill from "./Skill"
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import {useRouter} from "next/router"
import de from "../locales/de"
import en from "../locales/en"

export default function Skills(){
    const router = useRouter();
    const {locale} = router;
    const t = locale === "en" ? en.skills : de.skills;
    const frontendDescription = t.frontend.description;
    const backendDescription = t.backend.description;
    const otherTechDescription = t.otherTech.description;
    const frontendSkills = t.frontend.skills;
    const backendSkills = t.backend.skills;
    const otherTechSkills = t.otherTech.skills;
    return <div className={styles.root}>
        <div className={styles.container}>
            <Skill icon={faReact} title="Front-end" description={frontendDescription} listSkills={frontendSkills}></Skill>
            <Skill middle icon={faNodeJs} title="Back-end" description={backendDescription} listSkills={backendSkills}></Skill>
            <Skill icon={faTerminal} title={t.otherTech.title} description={otherTechDescription} listSkills={otherTechSkills}></Skill>
        </div>
    </div>
}