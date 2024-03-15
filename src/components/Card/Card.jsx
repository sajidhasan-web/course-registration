import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Card = ({card, handleCart}) => {

    const {id, photo, description, course_name, price, credit} = card
    
    return (
        <div className="p-4 bg-white rounded-lg">
            <div className="rounded-lg w-full h-[250px]" style={{ backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <p className="text-lg font-semibold text-[#1C1B1B] mt-4">{course_name}</p>
            <p className="text-sm text-[#1C1B1B99]mt-4">{description}</p>
            <div className="flex justify-between mt-5">
                <div className="flex items-center gap-2">
                    <p><FiDollarSign /></p>
                    <p>Price : <span>{price}</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <p><IoBookOutline /></p>
                    <p>Credit : {credit}</p>
                </div>
            </div>
            <button onClick={()=> handleCart(card)} className="btn bg-[#2F80ED] text-lg font-medium text-white w-full mt-6">Select</button>
        </div>
    );
};

export default Card;