import styles from "../styles/PrivacyPolicy.module.scss"

export default function CookieItem({name, hostname, path, expiry, description}){
    return <>
    <tr className={styles.cookieItem}>
        <td>{name}</td>
        <td>{hostname}</td>
        <td>{path}</td>
        <td>{expiry}</td>
    </tr>
    <tr>
        <td colSpan={4}>
        <p>{description}</p>
        </td>
    </tr>
    </>
}