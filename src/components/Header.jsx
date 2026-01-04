import Link from "next/link";

function Header (){
    const navitems=[{name:"Home", href: "/home"}, {name:"About", href:"/about"}, {name:"Contact", href:"/contact"}];
    return(
        <div>
            <h1>Welcome to My Website</h1>

            <ul className="flex justify-center items-center gap-6">
                {navitems.map((items) => (
                <li key={items.name} className="text-red-500">
                    <Link href={items.href}>
                      {items.name}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default Header;