import PlayButton from "../button/play"

export default function VideoCard({ url, title }: { url: string; title?: string }) {
	return (
		<div className="flex w-full flex-col gap-4 self-start">
			<div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl min-h-[20rem]">
				<img className="h-full w-full self-stretch object-cover center" src={url} alt="video" />
				<PlayButton />
			</div>
			{title && (
				<div className="flex flex-col gap-1">
					<div className="text-gray-400 text-lead-sm">video</div>
					<div className="font-normal text-heading-2xs">{title}</div>
				</div>
			)}
		</div>
	)
}
