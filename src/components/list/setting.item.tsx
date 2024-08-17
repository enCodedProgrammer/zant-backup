export default function ListSwitchItem({children}: {children: React.ReactNode}) {
    return (
        <div className="flex gap-4 border-b-gray-100 py-4 child:font-normal child:text-md border-b-[1px]">
            <div className="flex-1">
                {children}
            </div>
            <input type="checkbox" className="toggle toggle-primary" />
        </div>
    )
}
