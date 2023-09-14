import Cart from "../Cart/Cart";
import PropTypes from 'prop-types'


const Carts = ({courseTitle ,remaining ,credit ,totalPrice}) => {
    return (
        <div className="md:w-1/4 my-8">
            <div className="rounded-xl bg-white p-4 shadow-lg">
                <h3 className="text-[18px] font-bold text-[#2F80ED] border-b-2 pb-4">Credit Hour Remaining {remaining} hr</h3>
                <h2 className="text-xl font-bold my-4">Course Name</h2>
                {
                    courseTitle.map((title , index) => <Cart key={title.id} index={index} title={title}></Cart>)
                }
                <h3 className="font-medium border-b-2 border-t-2 py-4">Total Credit Hour : {credit}</h3>
                <h3 className="font-medium mt-4">Total Price : {totalPrice} USD</h3>
                
            </div>
        </div>
    );
};
Carts.propTypes = {
    courseTitle: PropTypes.array,
    remaining: PropTypes.number,
    credit: PropTypes.number,
    credit: PropTypes.number
}

export default Carts;