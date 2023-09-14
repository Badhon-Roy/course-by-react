import Cart from "../Cart/Cart";
import PropTypes from 'prop-types'


const Carts = ({courseTitle}) => {
    return (
        <div className="md:w-1/4 my-8">
            <div className="rounded-xl bg-white p-4 shadow-lg">
                <h3 className="text-[18px] font-bold text-[#2F80ED] border-b-2 pb-4">Credit Hour Remaining 7 hr</h3>
                <h2 className="text-xl font-bold my-4">Course Name</h2>
                <h3 className="font-medium border-b-2 border-t-2 py-4">Total Credit Hour : 13</h3>
                {
                    courseTitle.map(title=> <Cart key={title.id} title={title}></Cart>)
                }
            </div>
        </div>
    );
};
Carts.propTypes = {
    courseTitle: PropTypes.array
}

export default Carts;