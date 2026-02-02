import Link from "next/link";

export default function PracticePage({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav className="flex gap-10 m-8 p-10">
                <Link className="hover:underline bg-amber-500 p-5 rounded-2xl" href="/development">Development</Link>
                <Link className="hover:underline bg-amber-500 p-5 rounded-2xl" href="/marketing">Marketing</Link>
                <Link className="hover:underline bg-amber-500 p-5 rounded-2xl" href="/marketing/settings">Settings</Link>
                <Link className="hover:underline bg-amber-500 p-5 rounded-2xl" href="/sales">Sales</Link>
            </nav>
            {children}
        </div>
    )
}