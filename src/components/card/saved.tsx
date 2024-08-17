export default function SavedContentCard({url, title}: {url: string, title: string}) {
    return (
        <div className="w-[52.5rem] h-[13.75rem]">
            <div className="flex h-full w-full">
                <div className="flex w-1/2 items-center justify-center overflow-hidden rounded-2xl">
                    <img className="w-full self-stretch object-cover" src={url} alt="saved content" />
                </div>
                <div className="flex w-1/2 flex-col justify-center gap-2 px-16 py-8">
                    <div className="text-gray-400 text-lead-sm">video</div>
                    <div className="text-heading-2xs">{title}</div>
                </div>
            </div>
        </div>
    )
}
