import { LogoutIcon } from '@heroicons/react/outline'
import Button from "../components/Button"

function Notes() {
    return (
        <div className="bg-[#0A014F] h-screen flex justify-start">
            <div className="bg-[#06012E] bg-opacity-60 py-3 h-screen flex flex-col w-40 items-center shadow-3xl">
                <div className="flex justify-center items-center">
                    <LogoutIcon className='h-5 text-[#FAE8EB] -translate-x-5 hover:scale-110 transition duration-300 ease-out cursor-pointer opacity-50 hover:opacity-100' />
                    <h1 className="text-[#FAE8EB] font-semibold">Name</h1>
                </div>
                <div className='mt-10 w-full flex flex-col space-y-5'>
                    <Button />
                    
                </div>
                
            </div>
        </div>
    );
}

export default Notes;