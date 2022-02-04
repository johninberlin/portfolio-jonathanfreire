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
                    <h1>Privacy Policy
                        <br></br>
                        <span>{`Last Updated On 04-Feb-2022`}</span>
                        <br></br>
                        <span>{`Effective Date 04-Feb-2022`}</span>
                    </h1>

                    <p>{`The following applies to the jonathanfreire.com domain and related subdomains
                        (collectively "jonathanfreire.com" in this document).`}</p>
                    <p>{`jonathanfreire.com (“we”, “us”, “our”) are committed to protecting and
                        respecting your privacy.`}
                    </p>
                    <p>
                        {`This Privacy Policy ("Privacy Policy") describes the policies of Jonathan
                        Freire, Ansbacher Str. 41, Berlin 10777, Germany, email:
                        jonathan.freireespinoza@gmail.com, phone: +4915205960935 on the collection, use
                        and disclosure of your information that we collect when you use our website
                        jonathanfreire.com (the "Site"), accessible from
                        (https://www.jonathanfreire.com), our apps or our services. Also, this Privacy
                        Policy tells you about your privacy rights and how the law protects you. By
                        accessing or using the Service, you are consenting to the collection, use and
                        disclosure of your information in accordance with this Privacy Policy. If you do
                        not consent to the same, please do not access or use the Service.`}
                    </p>

                    <p>
                        {`We may modify this Privacy Policy at any time without any prior notice to you
                        and will post the revised Privacy Policy on the Service. The revised Policy will
                        be effective 180 days from when the revised Policy is posted in the Service and
                        your continued access or use of the Service after such time will constitute your
                        acceptance of the revised Privacy Policy. We therefore recommend that you
                        periodically review this page.`}
                    </p>

                    <h2>
                        {`DATA CONTROLLER`}
                    </h2>
                    <p>
                        {`For the purposes of EU and UK data protection laws and any applicable national
                        implementing laws, regulations and secondary legislation relating to the
                        processing of personal data (together “Data Protection Law”), the data
                        controller is Jonathan Freire of Ansbacher Str. 41, 10777 Berlin, Germany.`}
                    </p>

                    <ol>
                        <li>
                            <h2>
                                {`Information We May Collect About You:`}
                            </h2>

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
                                    you use to access this Site and Services.`}</li>

                                <li>{`Profile Data: includes your username and password, your interests,
                                    preferences, feedback and survey responses.`}</li>

                                <li>{`Usage Data: includes information about how you use our Site and Services,
                                    including the full Uniform Resource Locators (URL) clickstream to, through and
                                    from our Site and Services (including date and time); page response times,
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
                                    personal data which will be used in accordance with this Privacy Policy.`}</li>
                            </ol>

                        </li>
                        <li>
                            <h2>
                                {`PERSONAL DATA WE COLLECT FROM OTHER SOURCES:`}
                            </h2>
                            <p>
                                {`We work with third parties (including, for example, analytics providers and
                                search information providers) and may receive the following personal data about
                                you from them:`}
                            </p>
                            <ol>
                                <li>{`Technical Data: from analytics providers and search information providers
                                    such as Google, Vercel, Cloud and Cloudflare.`}
                                </li>
                                <li>{`Identity and Contact Data: from providers of chat/communication services
                                    between/with users including via email such as Pusher.`}
                                </li>
                                <li>{`Email Communications and Contact Data: from providers of email
                                    communications service providers such as Sendgrid and Mailchimp.`}
                                </li>
                            </ol>
                        </li>

                        <li>
                            <h2>
                                {`How We Collect Your Information:`}
                            </h2>
                            <p>
                                {`We collect/receive information about you in the following manner:`}
                            </p>
                            <ol>
                                <li>{`Direct Interactions. You may give us your Identity and Contact Data when you
                                    fill in forms or correspond with us by post, phone, email or otherwise. This
                                    includes personal data you provide when you register to use our Site or to
                                    receive our newsletter, subscribe to use our Services, create an account to use
                                    our Site or Services, request marketing to be sent to you, participate in
                                    discussion boards or other social media functions on our Site, enter a
                                    competition, promotion or survey, give us feedback or contact us and when you
                                    report a problem with our Site or Services.`}
                                </li>
                                <li>{`Automated Technologies or Interactions. As you interact with our Sites,
                                    Services or emails, we automatically collect Technical Information about your
                                    device, browsing actions, patterns, Location Data and Usage Data. We collect
                                    this personal data by using cookies, server logs, web beacons, pixels, and
                                    similar technologies about your device, and your use of our Site and Services.
                                    We may also receive Technical Data and Location Data about you if you visit
                                    other websites employment our cookies. Please see the Cookie section below for
                                    further details.`}
                                </li>

                                <li>{`From public sources`}</li>

                            </ol>
                        </li>

                        <li>
                            <h2>
                                {`How We Use Your Information:`}
                            </h2>
                            <p>
                                {`We will only use your personal data when the law allows us to. Most commonly we
                                will use the information that we collect about you for the following purposes:`}
                            </p>
                            <ol>

                                <li>{`Marketing/ Promotional`}</li>

                                <li>{`Creating user account`}</li>

                                <li>{`Support`}</li>

                                <li>{`Site protection`}</li>

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
                        </li>

                        <li>
                            <h2>
                                {`How We Share Your Information:`}
                            </h2>

                            <p>
                                {`We will not transfer your personal information to any third party without
                                seeking your consent, except in limited circumstances as described below:`}
                            </p>
                            <ol>
                                <li>{`Data collection & process`}</li>
                            </ol>

                            <p>
                                {`We require such third party’s to use the personal information we transfer to
                                them only for the purpose for which it was transferred and not to retain it for
                                longer than is required for fulfilling the said purpose.`}
                            </p>
                            <p>
                                {`We may also disclose your personal information for the following: (1) to comply
                                with applicable law, regulation, court order or other legal process; (2) to
                                enforce your agreements with us, including this Privacy Policy; or (3) to
                                respond to claims that your use of the Service violates any third-party rights.`}
                            </p>
                        </li>

                        <li>
                            <h2>
                                {`Retention Of Your Information:`}
                            </h2>
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
                        </li>

                        <li>
                            <h2>
                                {`Your Rights:`}
                            </h2>
                            <p>
                                {`Depending on the law that applies, you may have a right to access and rectify or
                                erase your personal data or receive a copy of your personal data, restrict or
                                object to the active processing of your data, ask us to share (port) your
                                personal information to another entity, withdraw any consent you provided to us
                                to process your data, a right to lodge a complaint with a statutory authority
                                and such other rights as may be relevant under applicable laws. To exercise
                                these rights, you can write to us at jonathan.freireespinoza@gmail.com. We will
                                respond to your request in accordance with applicable law.`}
                            </p>

                            <p>
                                {`Do note that if you do not allow us to collect or process the required personal
                                information or withdraw the consent to process the same for the required
                                purposes, you may not be able to access or use the services for which your
                                information was sought.`}
                            </p>
                        </li>
                        <li>
                            <h2>
                                {`Cookies Etc.`}
                            </h2>
                            <p>

                                {`To learn more about how we use these and your choices in relation to these
                                tracking technologies, please refer to our`}
                                {/* <a href="https://www.jonathanfreire.com/cookie-policy"> */}
                                {`Cookie Policy.`}
                                {/* </a> */}
                            </p>
                        </li>

                        <li>
                            <h2>
                                {`Security:`}
                            </h2>
                            <p>
                                {`The security of your information is important to us and we will use reasonable
                                security measures to prevent the loss, misuse or unauthorized alteration of your
                                information under our control. However, given the inherent risks, we cannot
                                guarantee absolute security and consequently, we cannot ensure or warrant the
                                security of any information you transmit to us and you do so at your own risk.`}
                            </p>
                        </li>

                        <li>
                            <h2>
                                {`Third Party Links & Use Of Your Information:`}
                            </h2>
                            <p>
                                {`Our Service may contain links to other websites that are not operated by us.
                                This Privacy Policy does not address the privacy policy and other practices of
                                any third parties, including any third party operating any website or service
                                that may be accessible via a link on the Service. We strongly advise you to
                                review the privacy policy of every site you visit. We have no control over and
                                assume no responsibility for the content, privacy policies or practices of any
                                third party sites or services.`}
                            </p>
                        </li>

                        <li>
                            <h2>
                                {`Grievance / Data Protection Officer:`}
                            </h2>
                            <p>
                                {`If you have any queries or concerns about the processing of your information
                                that is available with us, you may email our Grievance Officer at Jonathan
                                Eduardo Freire Espinoza, Ansbacher Str. 41, 10777 Berlin, Germany, email:
                                jonathan.freireespinoza@gmail.com. We will address your concerns in accordance
                                with applicable law.`}
                            </p>
                        </li>
                    </ol>
                    {/* <p>
                        {`Privacy Policy generated with`}
                        <a
                            target="_blank"
                            href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW">CookieYes</a>.
                    </p>
                </div> */}
            </div>
        </Layout>
    </div>
    )
}