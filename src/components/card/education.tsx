import Image from "next/image";

export default function EducationCard({url, university, major, year}: {url: string, university: string, major: string, year: string}) {
    return (
        <div className="min-w-[37.5rem] h-[7.5rem]">
            <div className="flex h-full w-full items-center gap-5 rounded-2xl border-2 border-gray-50 py-5 pr-8 pl-5">
                <Image src={url} alt="university" width={80} height={80} />
                <div className="flex flex-1 justify-between gap-5">
                    <div className="flex flex-col justify-center gap-1">
                        <div className="font-medium text-heading-xs">{university}</div>
                        <div className="text-md">{major}</div>
                    </div>
                    <div className="flex items-center text-md">{year}</div>
                </div>
            </div>
        </div>
    )
}
