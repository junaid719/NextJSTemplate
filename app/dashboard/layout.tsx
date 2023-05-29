'use client'

import '../globals.css'
import { Inter } from 'next/font/google'
import Sidebar from "../components/Sidebar/Sidebar"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


export default function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {



    return (
        <>
            <Sidebar />
            <body className='px-4 md:px-10 mx-auto w-full m-10'>{children}</body>
        </>
    )
}
