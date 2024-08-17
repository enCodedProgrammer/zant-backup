export default function ChatboxDivider({ label }: { label: string }) {
    return (
        <div className="flex w-full items-center gap-5 py-5">
            <hr className="flex-1" />
            <span className="text-xs tracking-widest text-gray-700">{label}</span>
            <hr className="flex-1" />
        </div>
    )
}
