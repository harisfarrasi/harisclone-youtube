export default function SidebarMenu({cons, deskripsi}) {
    return (
        <div className='w-full h-8 flex flex-row items-center text-center justify-start gap-2 '>
            {cons}
            <h1 className='text-lg font-semibold '>{deskripsi}</h1>
        </div>
    )
}