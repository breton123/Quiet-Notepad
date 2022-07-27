function Image() {
    return (
        <div className="flex justify-between bg-[#F6CACA] h-2/3 px-96">
            <div className="">
                <span className="bg-[#CD9FCC] h-1/2 w-1/3 absolute -translate-x-10 -translate-y-10"></span>
                <span className="bg-[#CD4FCC] h-1/2 w-1/3 absolute shadow-lg"></span>
            </div>
            <div className="flex flex-col mr-20 mt-32">
                <h1 className="text-3xl font-semibold text-[#0A014F]">Simple and Lightweight</h1>
                <h1 className="text-3xl font-semibold text-[#0A014F]">Fast and Powerful</h1>
            </div>
        </div>
    );
}

export default Image;