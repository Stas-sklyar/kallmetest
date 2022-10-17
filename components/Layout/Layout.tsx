import type { NextPage } from 'next'
import Link from 'next/link';
import React, {ReactElement} from "react";

type ILayoutProps = {
    children: React.ReactNode
}

const Layout: NextPage = ({children}: ILayoutProps) => {

    return (
        <>
            <header>
                <Link href={"/"}>Home</Link>
            </header>
            <main>{children}</main>
        </>
    );
}

export default Layout
