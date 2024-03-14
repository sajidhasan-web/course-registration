import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Card = () => {
    return (
        <div className="p-4 bg-white rounded-lg">
            <img className="rounded-lg w-full" src="https://i.ibb.co/VHtGN0R/python.jpg" alt="" />
            <p className="text-lg font-semibold text-[#1C1B1B] mt-4">Lorem ipsum dolor sit</p>
            <p className="text-sm text-[#1C1B1B99]mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="flex justify-between mt-5">
                <div className="flex items-center gap-2">
                    <p><FiDollarSign /></p>
                    <p>Price : 15000</p>
                </div>
                <div className="flex items-center gap-2">
                    <p><IoBookOutline /></p>
                    <p>Credit : 1hr</p>
                </div>
            </div>
            <button className="btn bg-[#2F80ED] text-lg font-medium text-white w-full mt-6">Select</button>
        </div>
    );
};

export default Card;