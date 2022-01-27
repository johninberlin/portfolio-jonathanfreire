import styles from "../styles/PrivacyPolicy.module.scss"

export default function PrivacyPolicyItem({title, content}){
    return <div className={styles.containerItem}>
        <h3 className={styles.titleItem}>
            {title}
        </h3>
        <p className={styles.contentItem}>
            {content}
        </p>
    </div>
}