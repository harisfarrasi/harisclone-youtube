export default function Navbar () {
    return (
        <div className="w-full h-16 bg-black flex items-center justify-between px-4 fixed top-0 left-0 border border-white z-50">
            <div className="text-white text-2xl font-bold">YouTube Clone</div>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search" className="p-2 rounded-md" />
                <button className="bg-red-600 text-white px-4 py-2 rounded-md">Search</button>
            </div>
        </div>
    )
}