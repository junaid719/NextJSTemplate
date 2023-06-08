import '../globals.css'
import Sidebar from "../components/Sidebar/Sidebar"

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
            <body className='px-4 md:px-10 mx-auto w-full  place-content-center '>{children}</body>
        </>
    )
}
