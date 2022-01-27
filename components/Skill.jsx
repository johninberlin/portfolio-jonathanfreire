import styles from "../styles/Skills.module.scss"
import cn from "classnames"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skill({middle, icon, title, description, listSkills}){
    return <div className={cn(styles.rootSkill, middle && styles.skillMiddle)}>
        <div className={styles.containerSkill}>
            <div className={styles.symbolSkill}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            <ul className={styles.listSkills}>
                {listSkills.map((el,index)=><li key={index}>{el}</li>)}
            </ul>
        </div>
    </div>
}