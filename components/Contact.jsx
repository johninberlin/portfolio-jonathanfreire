import styles from "../styles/Contact.module.scss"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import {useRouter} from "next/router"
import de from "../locales/de"
import en from "../locales/en"

export default function Contact(){
    const router = useRouter();
    const {locale} = router;
    const t = locale === "en" ? en.contact : de.contact;
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [checkedPrivacyPolicy, setCheckedPrivacyPolicy] = useState(false);
    const [sended, setSended] = useState(false);
    const [errorForm, setErrorForm] = useState("");
    const handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value;
        setForm({
            ...form,
            [name]: value,
        })
        setSended(false);
    }
    const handleCheckedPrivacyPolicy = ()=>{
        setCheckedPrivacyPolicy(!checkedPrivacyPolicy);
        setSended(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(form.name !== ""){
            if(form.email !== ""){
                if(form.message !== ""){
                    if(checkedPrivacyPolicy === true){
                        try{
                            const res = await fetch("/api/email", { 
                                method: 'POST', 
                                headers: { 
                                    Accept: "application/json",
                                    'Content-Type': "application/json",
                                }, 
                                body: JSON.stringify(form)
                            });
                            if(res.ok){
                                setForm({name: "", email: "", message: ""});
                                setErrorForm("");
                                setSended(true);
                                setCheckedPrivacyPolicy(false);
                            }else{
                                console.log(res);
                            }
                        }catch(e){
                            console.log(e);
                        }
                    }else{
                        setErrorForm(t.errorForm.privacyPolicy);
                    }
                }else{
                    setErrorForm(t.errorForm.message);
                }
            }else{
                setErrorForm(t.errorForm.email);
            }
        }else{
            setErrorForm(t.errorForm.name);
        }
    }
    return <div id="contact" className={styles.root}>
        <div className={styles.container}>
            <p className={styles.greeting}>{t.greeting.hi} {form.name !=="" ? form.name : t.greeting.name}!</p>
            <form autoComplete="off" className={styles.form}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder={t.name.placeholder} value={form.name} onChange={handleChange} required />
                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder={t.email.placeholder} value={form.email} onChange={handleChange} required />
                <label htmlFor="message">{t.message.label}</label>
                <textarea rows="5" cols="50" onChange={handleChange} name="message" placeholder={t.message.placeholder} value={form.message}></textarea>
                <label>
                    <input type="checkbox" checked={checkedPrivacyPolicy} onChange={handleCheckedPrivacyPolicy}/>
                    {" " + t.checkboxPrivacyPolicy.text + " "}
                    <Link href="/privacy-policy">
                        <a className={styles.linkPrivacyPolicy}>{t.checkboxPrivacyPolicy.link}</a>
                    </Link>
                    .
                </label>
                <p className={errorForm !== "" ? styles.errorForm : ((sended === true) ? styles.noErrorForm : undefined)}>{errorForm !== "" ? errorForm : (sended === true && t.errorForm.successfully)}</p>
                <button type="submit" onClick={handleSubmit}>{t.send + " "}<FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
        </div>
    </div>
}