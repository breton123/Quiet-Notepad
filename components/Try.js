function Try() {
    return (
        <div className="bg-[#0A014F] pb-40">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f6caca" fill-opacity="1" d="M0,128L34.3,144C68.6,160,137,192,206,208C274.3,224,343,224,411,202.7C480,181,549,139,617,106.7C685.7,75,754,53,823,69.3C891.4,85,960,139,1029,154.7C1097.1,171,1166,149,1234,133.3C1302.9,117,1371,107,1406,101.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
            <div className="flex flex-col justify-center items-center space-y-10">
                <h1 className="text-[#FAE8EB] text-5xl font-semibold">Try Now</h1>
                <button className="px-4 py-2 rounded-xl bg-[#F6CACA] text-[#0A014F] text-lg opacity-60 hover:scale-110 hover:opacity-100 transition duration-200 ease-out">Start Now</button>
            </div>
            <div className="flex justify-start absolute mt-32">
                <h1 className="text-[#FAE8EB] text-sm opacity-30 hover:scale-110 hover:opacity-100 transition duration-200 ease-out cursor-pointer pl-10">Created By: Louis Breton</h1>
            </div>
        </div>
    );
}

export default Try;