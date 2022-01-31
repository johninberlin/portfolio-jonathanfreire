import Link from "next/link"

export default function ButtonNavbar({link, name, onClick}){
    return <div>
        <Link href={link}>
            <a onClick={onClick}>
                <p>
                    {name}
                </p>
            </a>
        </Link>
    </div>
}