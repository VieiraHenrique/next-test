import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <h1>myBlog</h1>
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/about"}>About</Link>
                    </li>
                </ul>
            </header>

            <hr />

            {children}

            <hr />

            <footer>
                <p>@Copyright 2022.</p>
            </footer>
        </>
    );
}
