import Cloud from "./Cloud";
import { useWindupString } from "windups";

function Title() {
    const [text] = useWindupString("The fastest notepad on the cloud");
    return (
        <div className="flex justify-center mt-60 mr-[33%]">
            <h1 className="text-[#FAE8EB] text-4xl font-semibold w-96 tracking-wide">{text}</h1>
            <Cloud />
        </div>
    );
}

export default Title;