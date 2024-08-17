import StarIcon from "@/asset/icons/system/Star.svg"
import Image from "next/image"
import Button from "../button"

export default function BookCard({name, onBook}: {name: string, onBook: Function}) {
    return (
        <div className="w-[22.5rem] h-[11.5rem]">
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-gray-50 p-8">
                <p className="font-normal text-heading-sm">Is {name} a good fit?</p>
                <Button className="tz-md tz-primary" onClick={() => {onBook()}}>Book session</Button>
            </div>
        </div>
    )
}
