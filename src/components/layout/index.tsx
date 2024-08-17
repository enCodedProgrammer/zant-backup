import Header from "./header";
import Navbar from "./navbar";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex min-h-screen">
            <Navbar />
            <div className="flex-1">
                <Header />
                {children}
            </div>
        </div>
    )
}