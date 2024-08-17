import StarIcon from "@/asset/icons/system/Star.svg"
import Image from "next/image"

export default function RatingCard({score}: {score: number}) {
    return (
        <div className="w-[22.5rem] h-[11.5rem] bg-white">
            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-gray-50 p-8">
                <div className="flex justify-center gap-2 font-bold text-display-xs">
                    <Image width={40} height={40} src={StarIcon} alt="star" />
                    {score}
                </div>
                <div>Excellent</div>
            </div>
        </div>
    )
}
