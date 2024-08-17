import PlayIcon from "@/asset/icons/system/Play.svg"
import classNames from "classnames"
import Image from "next/image"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export default function PlayButton(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
    return (
        <button className="btn hover:!border-white rounded-full bg-transparent border-white border-2 !p-[1.75rem] z-[1]">
            <Image className={classNames("brightness-0 invert w-16 h-16", props.className)} src={PlayIcon} alt="play" />
        </button>
    )
}