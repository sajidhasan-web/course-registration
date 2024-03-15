

const Cart = ({cart}) => {
    
    return (
        <div className="md:col-span-2 w-full">
            <div className="bg-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-[#2F80ED]">Credit Hour Remaining 7 hr</h4>

                <div className="divider"></div> 
                <h3 className="text-xl font-semibold text-[#1C1B1B]">Course Name</h3>

                <div className="h-[200px] overflow-y-auto text-sm text-[#1C1B1B99] space-y-2">
                   {
                    cart.map((p, idx) => <p key={idx}>{idx + 1}. {p.course_name}</p>)
                   }
                    
                </div>
                <div className="divider"></div> 

                <p className="text-[#1C1B1BCC] font-medium">Total Credit Hour : {cart.credit}</p>

                <div className="divider"></div> 

                <p className="text-[#1C1B1BCC] font-medium">Total Price : 48000 USD</p>


            </div>
        </div>
    );
};

export default Cart;