function Header() {
    return (
        <div className="flex justify-between items-center px-14 py-6 bg-[#070135] bg-opacity-50 shadow-lg">
            <h1 className="text-[#FAE8EB] text-3xl font-semibold hover:scale-110 hover:text-[#F6CACA] transition duration-200 ease-out cursor-pointer">Quiet Notes</h1>
            <div className="flex justify-between space-x-5">
                <h1 className="text-[#FAE8EB] text-xl hover:scale-110 hover:text-[#F6CACA] transition duration-200 ease-out cursor-pointer pr-5">Home</h1>
                <h1 className="text-[#FAE8EB] text-lg hover:scale-110 hover:text-[#F6CACA] hover:opacity-100 transition duration-200 ease-out cursor-pointer opacity-50">Log In</h1>
                <h1 className="text-[#FAE8EB] text-lg hover:scale-110 hover:text-[#F6CACA] hover:opacity-100 transition duration-200 ease-out cursor-pointer opacity-50">Sign Up</h1>
            </div>
        </div>
    );
}

export default Header;