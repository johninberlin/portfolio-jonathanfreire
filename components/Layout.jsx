import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children, title, subtitle, refTitle, firstRef, firstName, secondRef, secondName}){
    return <div>
        <Navbar title={title} subtitle={subtitle} refTitle={refTitle} firstRef={firstRef} firstName={firstName} secondRef={secondRef} secondName={secondName} />
        <main>
            {children}
        </main>
        <Footer />
    </div>
}