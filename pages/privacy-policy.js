import Head from 'next/head'
import Layout from '../components/Layout'
import styles from "../styles/PrivacyPolicy.module.scss"
import {useRouter} from "next/router"
import de from "../locales/de"
import en from "../locales/en"
import PrivacyPolicyItem from '../components/PrivacyPolicyItem'

export default function Home() {
    const router = useRouter();
    const {locale} = router;
    const t = locale === "en"
        ? en.index
        : de.index;
    const privacy = locale === "en"
        ? en.privacyPolicy
        : de.privacyPolicy;
    return (<div>
        <Head>
            <title>Jonathan Freire</title>
            <meta name="description" content={t.headContent}/>
        </Head>
        <Layout
            title="Jonathan Freire."
            subtitle={t.subtitle}
            refTitle="/"
            firstRef="/#works"
            firstName={t.firstName}
            secondRef="#contact"
            secondName={t.secondName}>
            <div className={styles.root}>
                <div className={styles.container}>
                    <h2>Privacy Policy</h2>
                    <span>{`Last Updated On 08-Feb-2022`}</span>
                    {/* INTRODUCTION */}
                    <h4>{`Introduction`}</h4>
                    <p>{`This privacy policy ("Policy") explains how we process your
                        personal data, incl. what we use it for and how we store and protect it.
                        Furthermore, the Policy explains the rights that you have when we process your
                        personal data. Why? Because we care about your privacy.`}</p>
                    <p>{`By accessing or using this website, you are consenting to the collection,
                        use and disclosure of your information in accordance with this Policy.
                        If you do not consent to the same, please do not access or use this website.`}</p>
                    
                    {/* WHO WE ARE */}
                    <h4>{`Who are we`}</h4>
                    <p>{`We are the entity responsible for the processing of your personal data in
                        accordance with this Policy.`}</p>
                    <p>{`(We are not a company and this is a personal website) Here’s our
                        information:`}</p>
                    <p>
                      <span>{`Jonathan Freire`}</span>
                      <br></br>
                      <span>{`Ansbacher Str. 41,`}</span>
                      <br></br>
                      <span>{`10777 Berlin, Germany`}</span>
                      <br></br>
                      <span>{`email: jonathan.freireespinoza@gmail.com`}</span>
                      <br></br>
                      <span>{`phone: +49 15205960935`}</span>
                    </p>
                    <p>{`To make the Policy more user friendly we use “we”, “us”, “our” etc. to
                        refer to Jonathan Freire, the owner of this website. We are the data controller of the data collected through
                        the use of cookies on our website.`}</p>
                    <p>{`Our "website" is www.jonathanfreire.com, incl. our sub-domains, we own and
                        operate.`}</p>
                    <p>{`When we refer to “you” we mean you as a user of our website, apps or our
                        online services.`}</p>

                    {/* WHO WE ARE */}
                    <h4>{`Links to other websites etc.`}</h4>
                    <p>{`On our website, in our emails and on our social-media profiles, we may have links to other companies, apps or websites (“other websites”) that aren’t ours. This Policy doesn’t cover how those other websites process your data. We encourage you to read the privacy notices on the other websites you visit.`}</p>

                    {/* Information We May Collect About You */}
                    <h4>
                        {`Information we may collect about you`}
                    </h4>
                    <p>
                        {`We may collect and process personal data about you. Personal data, or personally
                        identifiable information, means any information about an individual from which
                        that individual can be identified. It does not include data where the identity
                        has been removed (anonymous data). We collect, use, store and transfer different
                        kinds of personal data about you which we have grouped together as follows:`}
                    </p>
                    <ol>
                        <li>{`Identity Data: includes first name, maiden name, last name, username or
                            similar identifier.`}</li>

                        <li>{`Contact Data: includes email address and telephone numbers, company name or
                            website.`}</li>

                        <li>{`Technical Data: includes internet protocol (IP) address, your login data,
                            browser type and version, time zone setting and location, browser plug-in types
                            and versions, operating system and platform, and other technology on the devices
                            you use to access this website.`}</li>

                        <li>{`Profile Data: includes your username and password, your interests,
                            preferences, feedback and survey responses.`}</li>

                        <li>{`Usage Data: includes information about how you use our website,
                            including the full Uniform Resource Locators (URL) clickstream to, through and
                            from our website (including date and time), page response times,
                            download errors, length of visits to certain pages, page interaction information
                            (such as scrolling, clicks, and mouse-overs), and methods used to browse away
                            from the page.`}</li>

                        <li>{`Marketing and Communications Data: includes your preferences in receiving
                            marketing from us and our third parties and your communication preferences.`}</li>

                        <li>{`Aggregated Data: We also collect, use and share statistical or demographic
                            data for any purpose. This Aggregated Data could be derived from your personal
                            data but is not considered personal data in law as this data will not directly
                            or indirectly reveal your identity. For example, we may aggregate your Usage
                            Data to calculate the percentage of users accessing a specific website feature.
                            However, if we combine or connect Aggregated Data with your personal data so
                            that it can directly or indirectly identify you, we treat the combined data as
                            personal data which will be used in accordance with this Policy.`}</li>
                    </ol>
                    {/* PERSONAL DATA WE COLLECT FROM OTHER SOURCES */}
                    <h4>
                        {`Personal data we collect from other sources`}
                    </h4>
                    <p>
                        {`We work with third parties (including, for example, analytics providers and
                        search information providers) and may receive the following personal data about
                        you from them:`}
                    </p>
                    <ol>
                        <li>{`Technical Data: from analytics providers and search information providers
                            such as Google, Vercel, Cloudinary and Cloudflare.`}
                        </li>
                        <li>{`Identity and Contact Data: from providers of chat/communication services
                            between/with users including via email such as Pusher.`}
                        </li>
                        <li>{`Email Communications and Contact Data: from providers of email
                            communications service providers such as Sendgrid and Mailchimp.`}
                        </li>
                    </ol>

                    {/* HOW WE COLLECT YOUR INFORMATION */}
                    <h4>
                        {`How We Collect Your Information`}
                    </h4>
                    <p>
                        {`We collect/receive information about you in the following manner:`}
                    </p>
                    <ol>
                        <li>{`Direct Interactions. You may give us your Identity and Contact Data when you
                            fill in forms or correspond with us by post, phone, email or otherwise. This
                            includes personal data you provide when you register to use our website or to
                            receive our newsletter, subscribe to use our services, request marketing to be sent to you, participate in
                            discussion boards or other social media functions on our website, enter a
                            competition, promotion or survey, give us feedback or contact us and when you
                            report a problem with our website.`}
                        </li>
                        <li>{`Automated Technologies or Interactions. As you interact with our website and emails, we automatically collect Technical Information about your
                            device, browsing actions, patterns, Location Data and Usage Data. We collect
                            this personal data by using cookies, server logs, web beacons, pixels, and
                            similar technologies about your device, and your use of our website.
                            We may also receive Technical Data and Location Data about you if you visit
                            other websites employment our cookies. Please see the Cookie section below for
                            further details.`}
                        </li>                    
                    </ol>

                    {/* HOW WE USE YOUR INFORMATION */}
                    <h4>
                        {`How We Use Your Information`}
                    </h4>
                    <p>
                        {`We will only use your personal data when the law allows us to. Most commonly we
                        will use the information that we collect about you for the following purposes:`}
                    </p>
                    <ol>
                        <li>{`Marketing/ Promotional`}</li>

                        <li>{`Creating user account`}</li>

                        <li>{`Support`}</li>

                        <li>{`Website protection`}</li>

                        <li>{`User to user comments`}</li>

                        <li>{`Manage user account`}</li>

                        <li>{`To comply with a legal obligation.`}</li>
                    </ol>
                    <p>
                        {`If we want to use your information for any other purpose, we will ask you for
                        consent and will use your information only on receiving your consent and then,
                        only for the purpose(s) for which grant consent unless we are required to do
                        otherwise by law.`}
                    </p>
                    <p>{`Additional information:`}</p>
                    <p>{`We do not sell or rent your data to marketers or third parties.`}</p>
                    <p>{`If you would like more information about our legal basis for processing your data, feel free to contact us (see our details in the beginning of the Policy).`}</p>

                    {/* HOW WE SHARE YOUR INFORMATION */}
                    <h4>
                        {`How We Share Your Information`}
                    </h4>
                    <p>
                        {`We will not transfer your personal information to any third party without
                        seeking your consent, except in limited circumstances as described below:`}
                    </p>
                    <ol>
                        <li>{`Data collection & process`}</li>
                    </ol>
                    <p>
                        {`We may also disclose your personal information for the following:`}
                    </p>
                    <ul>
                        <li>{`to comply with applicable law, regulation, court order or other legal process`}</li>
                        <li>{`to enforce your agreements with us, including this Policy`}</li>
                        <li>{`to respond to claims that your use of this website violates any third-party rights.`}</li>
                    </ul>

                    {/* THIRD PARTIES AND PROCESSORS */}
                    <h4>{`Third parties and processors`}</h4>
                    <p>{`We use companies (processors) to help us deliver our services to you, e.g. to provide the hosting environment for our product, send out newsletters, to help us run our website, etc.`}</p>
                    <p>
                        {`We require such processors to use the personal information we transfer to
                        them only for the purpose for which it was transferred and not to retain it for
                        longer than is required for fulfilling the said purpose.`}
                    </p>
                    <p>{`We share your personal data with:`}</p>
                    <ul>
                        <li>{`Suppliers and vendors that we work with to assist our company (meaning service providers, technical support and supply services).`}</li>
                        <li>{`Group entities`}</li>
                        <li>{`Public authorities`}</li>
                    </ul>
                    <p>{`Here’s are some of the suppliers we use:`}</p>
                    <ul>
                        <li>{`Vercel as our hosting and analytics system.`}</li>
                        <li>{`Sendgrid for sending out emails to us through the contact form.`}</li>
                        <li>{`Pusher as our hosted Websockets solution. It is a communication service
                            between users.`}</li>
                        <li>{`Cloudinary as our end-to-end image- and video-management solution.`}</li>
                    </ul>

                    {/* RETENTION OF YOUR INFORMATION */}
                    <h4>
                        {`Retention of your information`}
                    </h4>
                    <p>
                        {`We will retain your personal information with us for 90 days to 2 years after
                        user accounts remain idle or for as long as we need it to fulfill the purposes
                        for which it was collected as detailed in this Privacy Policy. We may need to
                        retain certain information for longer periods such as record-keeping / reporting
                        in accordance with applicable law or for other legitimate reasons like
                        enforcement of legal rights, fraud prevention, etc. Residual anonymous
                        information and aggregate information, neither of which identifies you (directly
                        or indirectly), may be stored indefinitely.`}
                    </p>

                    {/* KEEPING YOUR DATA SAFE */}
                    <h4>{`Keeping your data safe`}</h4>
                    <p>{`We use reasonable organisational, technical and administrative measures to protect your data within our company.`}</p>
                    <p>{`The Internet is not a 100% secure environment and that means we cannot guarantee the security of the data you transmit to us. Emails sent via the Internet might not be encrypted, so we advise you not to include any confidential or sensitive information in your emails to us.`}</p>
                    <p>{`We also recommend you to use an anonymous username to register in the apps of this website.`}</p>

                    {/* YOUR RIGHTS */}
                    <h4>
                        {`Your rights:`}
                    </h4>
                    <p>
                        {`You have these rights:`}
                    </p>
                    <ol>
                      <li>{`Your right of access and rectification - You have the right to ask us for copies of your personal data or ask us to rectify information you think is inaccurate. There are some exemptions, which means you may not always receive all the information we process but as a main rule you can always contact us and ask for your information.`}</li>
                      <li>{`Your right to erasure - You can ask us to erase your personal information in certain circumstances.`}</li>
                      <li>{`Your right to withdraw your consent: If processing of your personal data is based on your consent, you have the right to withdraw your consent at any time. Your withdrawal will not affect the lawfulness of the processing carried out before you withdrew your consent. You may withdraw your consent by sending an email to jonathan.freireespinoza@gmail.com.`}</li>
                      <li>{`Your right to restriction of processing and object to processing - You have the right to ask us to restrict the processing of your information and a similar right to object to processing.`}</li>
                      <li>{`Your right to data portability: You have the right to receive your personal information in a structured, commonly used and machine-readable format (data portability).`}</li>
                      <li>{`Where your personal data are processed for direct marketing purposes, you have the right to object at any time to the processing of personal data about you for such marketing.`}</li>
                    </ol>
                    <p>{`We will make sure to answer your request without undue delay and in any event within one month of receiving your request.  It can be that the period will be extended by two further months if your request is very complex.`}</p>
                    <p>{`There may be conditions or limitations on these rights. It is therefore not certain e.g. you have the right of data portability in a specific case - this depends on the specific circumstances of the processing activity. You are always welcome to contact us and ask. The same goes for some of the other rights.`}</p>
                    <p>{`Do note that if you do not allow us to collect or process the required personal
                        information or withdraw the consent to process the same for the required
                        purposes, you may not be able to access or use the services for which your
                        information was sought.`}
                    </p>
                    <p>{`Complaints`}</p>
                    <p>{`You can always lodge a complaint with a European data protection authority, for example the `}<a href="https://www.datenschutz-berlin.de/wirtschaft-und-verwaltung/meldung-einer-datenpanne">{`Berlin Commissioner for Data Protection and Freedom of Information`}</a></p>
                    <p>{`Assistance and additional information`}</p>
                    <p>{`You can take steps to exercise your rights by using the contact details above. If you have questions about the Policy, feel free to contact us by using the contact details in this Policy.`}</p>
                    
                    {/* THIRD PARTY LINKS AND USE OF YOUR INFORMATION */}
                    <h4>
                        {`Third party links and use of your information`}
                    </h4>
                    <p>
                        {`Our website may contain links to other websites that are not operated by us. This Policy does not address the privacy policy and other practices of any third parties, including any third party operating any website or service that may be accessible via a link on this website. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.`}
                    </p>
                    
                    {/* COOKIES */}
                    <h4>
                        {`Cookies`}
                    </h4>
                    <p>

                        {`To learn more about how we use these and your choices in relation to these
                        tracking technologies, please refer to our`}
                        {/* <a href="https://www.jonathanfreire.com/cookie-policy"> */}
                        {`Cookie Policy.`}
                        {/* </a> */}
                    </p>

                    {/* CHILDREN AND OUR SERVICES */}
                    <h4>{`Children and our services`}</h4>
                    <p>{`Our services and website aren’t directed to children, and you can’t use our website if you are under the age of 16.`}</p>
                    
                    {/* CHANGES TO THE POLICY */}
                    <h4>{`Changes to the Policy`}</h4>
                    <p>{`Sometimes we need to make changes to this Policy to reflect our current practices. We will take reasonable steps to let you know about changes via our website.`}</p>
                    <p>{`If you continue to use our website or services after the notification, we will regard this as your acceptance of our privacy practices.`}</p>
                </div>
            </div>
        </Layout>
    </div>
    )
}