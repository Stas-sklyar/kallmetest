import type { NextPage } from 'next'
import Link from 'next/link';
import React, { ReactElement } from "react";

type IProps = {
    children: React.ReactNode
}

const Layout: NextPage<IProps> = ({ children }) => {

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
