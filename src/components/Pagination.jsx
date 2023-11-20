export default function Pagination({
    prev, 
    next, 
    fetch, 
    page
}) {
    return <div className="text-white w-full flex items-center gap-3 justify-end select-none">
        {
            prev && <span onClick={() => fetch(parseInt(page) - 1)} className="material-symbols-outlined cursor-pointer hover:text-green-300 transition-all">
                arrow_back_ios
            </span>
        }

        {
            next && <span onClick={() => fetch(parseInt(page) + 1)} className="material-symbols-outlined cursor-pointer hover:text-green-300 transition-all">
                arrow_forward_ios
            </span>
        }
    </div>
}