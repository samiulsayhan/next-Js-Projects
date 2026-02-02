import Link from "next/link";

export default function PracticePage({ children, marketingSlot,salesSlot }: { 
    children: React.ReactNode ;
    salesSlot: React.ReactNode ;
    marketingSlot: React.ReactNode ;

}) {
    return (
        <div>
            <nav className="flex gap-10 m-8 ">
                <Link className="hover:underline bg-amber-500 p-5 rounded-2xl text-[16px] font-bold" href="/">Home</Link>
                <Link className="hover:underline bg-amber-500 p-5 rounded-2xl text-[16px] font-bold" href="/development">Development</Link>
                <Link className="hover:underline bg-amber-500 p-5 rounded-2xl text-[16px] font-bold" href="/marketing">Marketing</Link>
                <Link className="hover:underline bg-amber-500 p-5 rounded-2xl text-[16px] font-bold" href="/marketing/settings">Settings</Link>
                <Link className="hover:underline bg-amber-500 p-5 rounded-2xl text-[16px] font-bold" href="/sales">Sales</Link>
            </nav>
            <div className="flex">
                {marketingSlot}
                {salesSlot}
            </div>
            {children}
        </div>
    )
}