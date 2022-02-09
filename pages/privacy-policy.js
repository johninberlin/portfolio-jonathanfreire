import Head from 'next/head'
import Layout from '../components/Layout'
import styles from "../styles/PrivacyPolicy.module.scss"
import {useRouter} from "next/router"
import de from "../locales/de"
import en from "../locales/en"
import CookieItem from '../components/CookieItem'

export default function Home() {
    const router = useRouter();
    const {locale} = router;
    const t = locale === "en"
        ? en.index
        : de.index;
    const privacy = locale === "en"
        ? en.privacyPolicy
        : de.privacyPolicy;

    const handleCookieSettings = (e)=> {
      e.preventDefault();
      window.cookiehub.openSettings();
    }
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
                    <span>{`Last Updated On 09-Feb-2022`}</span>
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
                    <div className={styles.cookieSection}>
                    <h4>
                        {`Cookies`}
                    </h4>
                    <ol>
                      {/* CONSENT COOKIES */}
                      <li>
                        <h5>{`Consent`}</h5>
                        <p>{`By accepting our use of cookies, apart from necessary cookies, you consent to our use of cookies as described under "Types of cookies and how we use them" below. You may at any time change or withdraw your cookie consent - See the section “How you can change your cookie settings, incl. opting out” below.`}</p>
                      </li>
                      {/* WHAT DO I NEED TO KNOW ABOUT COOKIES */}
                      <li>
                        <h5>{`What do I need to know about cookies?`}</h5>
                        <p>{`There are different types of cookies and they are used for different purposes.`}</p>
                        <p>{`Below you can read about what a cookie is, the difference between first and third party cookies and session cookies vs. persistent cookies and what types of cookies we use on our website and why.`}</p>
                      </li>
                      {/* WHAT IS A COOKIE */}
                      <li>
                        <h5>{`What is a cookie?`}</h5>
                        <p>{`A cookie is a small piece of data that a website stores on your device when you visit it and which is then read when you later revisit the site. The word "cookies" in this policy and the consent also refers to other forms of automatic collection of data, e.g. Flash-cookies (Local Shared Objects), Web Storage (HTML5), Javascripts or cookies placed by other software.`}</p>
                        <p>{`A cookie may contain information about the website itself, a unique identifier that allows the site to recognise your web browser when you return to the website, additional data that serves the purpose of the cookie, and the lifespan of the cookie itself.`}</p>
                        <p>{`The word "cookies" or "cookie data" also covers information about IP and MAC addresses and other information about your device collected by said technologies.`}</p>
                        <p>{`Cookies are used to enable certain features (e.g. logging in), to track site usage (e.g. analytics), to store your user settings (e.g. timezone, notification preferences), and to personalise your content (e.g. advertising, language).`}</p>
                      </li>
                      {/* SESSION COOKIES VS. PERSISTENT COOKIES */}
                      <li>
                        <h5>{`Session cookies vs. persistent cookies`}</h5>
                        <p>{`Session cookies only last as long as your online session. This means that they will disappear from your computer or device when you close your browser. They are therefore also sometimes referred to as temporary cookies. For example, session cookies are used to remember what a user put in their basket when they are browsing a website.`}</p>
                        <p>{`Persistent cookies are different. These cookies are sometimes called permanent cookies.  They will stay on your computer or device after you close your browser. These types of cookies will expire according to the time specified in the cookie. You can see the specific duration of each persistent cookie below.`}</p>
                      </li>
                      {/* WHAT'S THE DIFFERENCE BETWEEN FIRST AND THIRD PARTY COOKIES */}
                      <li>
                        <h5>{`What’s the difference between first and third party cookies?`}</h5>
                        <p>{`First party cookies are cookies that are set by the website that you are visiting and it's only this website that can access and read these cookies.`}</p>
                        <p>{`Third party cookies are set by someone other than the owner of the website you’re visiting. As an example, some pages have content from other sites like YouTube. YouTube may set their own cookies on your browser when you play the video from YouTube. Cookies set by other sites and companies (i.e. third parties) can be used to track you on other websites that use the same third-party service.`}</p>
                        <p>{`We may engage third parties to assist with maintenance, operation, creation or functionality of our website, e.g. analytics providers and content partners. We grant these third parties’ access to selected information to perform specific tasks on our behalf.`}</p>
                        <p>{`We are, as a general rule, joint controller with providers of third-party cookies for the collection of personal data via such cookies and the disclosure to the provider. The provider of third-party cookies is data controller for the processing taking place after receiving the personal data from us. `}</p>
                        <p>{`We recommend reading the provider's privacy policy which can be found through links in the tables below, where you can also see which cookies on our website are first party cookies and third-party cookies.`}</p>
                      </li>
                      {/* TYPES OF COOKIES AND HOW WE USE THEM */}
                      <li>
                        <h5>{`Types of cookies and how we use them`}</h5>
                        <ul>
                          {/* NECESSARY COOKIES */}
                          <li>
                            <h6>{`Necessary cookies`}</h6>
                            <p>{`Necessary cookies are required to provide core functionality. The website won't function properly without these cookies and they are enabled by default and cannot be disabled.`}</p>
                            <table>
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Hostname</th>
                                  <th>Path</th>
                                  <th>Expiry</th>
                                </tr>
                              </thead>

                              <tbody>
                                <CookieItem 
                                  name={`__Host-next-auth.csrf-token `}
                                  hostname={`socialart.jonathanfreire.com`}
                                  path={`/`}
                                  expiry={`Session`}
                                  description={`Ensures visitor browsing-security by preventing cross-site request forgery. This cookie is essential for the security of the website and visitor.`}
                                />
                                <CookieItem 
                                  name={`__Secure-next-auth.callback-url`}
                                  hostname={`socialart.jonathanfreire.com`}
                                  path={`/`}
                                  expiry={`Session`}
                                  description={`Used in order to detect spam and improve the website's security.`}
                                />
                                <CookieItem 
                                  name={`nextauth.message`} 
                                  hostname={`socialart.jonathanfreire.com`}
                                  expiry={`Persistent`}
                                  description={`Preserves users states across page requests.`}
                                />
                                <CookieItem 
                                  name={`__Host-next-auth.csrf-token`}
                                  hostname={`timequiz.jonathanfreire.com`}
                                  path={`/`}
                                  expiry={`Session`}
                                  description={`Ensures visitor browsing-security by preventing cross-site request forgery. This cookie is essential for the security of the website and visitor.`}
                                />
                                <CookieItem 
                                  name={`__Secure-next-auth.callback-url`}
                                  hostname={`timequiz.jonathanfreire.com`}
                                  path={`/`}
                                  expiry={`Session`}
                                  description={`Used in order to detect spam and improve the website's security.`}
                                />
                                <CookieItem 
                                  name={`pusherTransportTLS`} 
                                  hostname={`timequiz.jonathanfreire.com`}
                                  expiry={`Persistent`}
                                  description={`Technical cookie that synchronizes the website and the CMS. This is used to update the website.`}
                                />
                                <CookieItem 
                                  name={`nextauth.message`}
                                  hostname={`timequiz.jonathanfreire.com`}
                                  expiry={`Persistent`}
                                  description={`Preserves users states across page requests.`}
                                />
                                <CookieItem 
                                  name={`cookiehub`}
                                  hostname={`.jonathanfreire.com`}
                                  path={`/`}
                                  expiry={`365 days`}
                                  description={`Used by CookieHub to store information about whether visitors have given or declined the use of cookie categories used on the site.`}
                                />
                              </tbody>
                            </table>
                          </li>
                          <li>
                            <h6>{`Preferences cookies`}</h6>
                            <p>{`Preference cookies enables the web site to remember information to customize how the web site looks or behaves for each user. This may include storing selected currency, region, language or color theme.`}</p>
                            <p className={styles.withoutCookies}>{`Currently, we do not use cookies in this cookie category.`}</p>
                          </li>
                          <li>
                            <h6>{`Analytical cookies`}</h6>
                            <p>{`Analytical cookies gather statistics. We use this information to make our website even better. The information collected via the analytical cookies track how you use our website during your visit. It helps us understand visitor usage patterns, identify, and diagnose problems or errors you may encounter, and make better strategic decisions in improving the website experience.`}</p>
                            <p>{`We will only set analytical cookies on your device if you give us your consent.`}</p>
                            <p className={styles.withoutCookies}>{`Currently, we do not use cookies in this cookie category.`}</p>
                          </li>
                          <li>
                            <h6>{`Marketing cookies`}</h6>
                            <p>{`Marketing cookies are used in determining what promotional content is more relevant and appropriate to you and your interests. Websites may use them to deliver targeted advertising or to limit the number of times you see an advertisement. This helps companies improve the effectiveness of their campaigns, and the quality of content presented to you. These cookies may be set by the website you’re visiting (first party) or by third-party services. Marketing cookies set by a third-party service may be used to track you on other websites that use the same third-party service.`}</p>
                            <p className={styles.withoutCookies}>{`Currently, we do not use cookies in this cookie category.`}</p>
                          </li>
                          <li>
                            <h6>{`Other cookies`}</h6>
                            <p>{`The cookies in this category have not yet been categorized and the purpose may be unknown at this time.`}</p>
                            <p className={styles.withoutCookies}>{`Currently, we do not use cookies in this cookie category.`}</p>
                          </li>
                        </ul>
                        
                      </li>
                      {/* HOW YOU CAN CHANGE YOUR COOKIE SETTINGS */}
                      <li>
                        <h5>{`How you can change your cookie settings, incl. opting out`}</h5>
                        <p>{`As part of our cookie solution, we always ask for your consent to cookies, except for necessary cookies, before placing cookies on your device.`}</p>
                        <p>{`We also always give you the option to change your consent. If you at one point gave consent to non-necessary cookies on our website, you can always change which cookies you will give consent to. Just look for the "Cookie settings" on the footer of our website or the following link. If you press "Cookie settings", your cookie settings will appear, allowing you to always change your settings and reject cookies.`}</p>
                        <a href="" onClick={handleCookieSettings}>
                          {`Cookie settings`}
                        </a>
                        <p>{`Listed below are the links to the support documents on how to manage and delete cookies from the major web browsers.`}</p>
                        <p>{`Chrome: `}<a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noreferrer">{`https://support.google.com/accounts/answer/32050`}</a></p>
                        <p>{`Safari: `}<a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">{`https://support.apple.com/en-in/guide/safari/sfri11471/mac`}</a></p>
                        <p>{`Firefox: `}<a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US" target="_blank" rel="noreferrer">{`https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US`}</a></p>
                        <p>{`Internet Explorer: `}<a href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank" rel="noreferrer">{`https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc`}</a></p>
                        <p>{`If you are using any other web browser, please visit your browser’s official support documents.`}</p>
                      </li>
                      {/* HOW OFTEN WILL WE UPDATE THIS COOKIE NOTICE */}
                      <li>
                          <h5>{`How often will we update this Cookie Notice?`}</h5>
                          <p>{`We may update this Cookie section from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Policy regularly to stay informed about our use of cookies and related technologies. The date at the top of this Policy indicates when it was last updated.`}</p>
                      </li>
                    </ol>
                    </div>

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