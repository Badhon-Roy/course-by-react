import PropTypes from 'prop-types'

const Cart = ({ title , index }) => {
    const { course_name } = title;
    return (
        <div>
            <ol>
                <li className='mb-3'>{index + 1} {course_name}</li>
            </ol>
        </div>
    );
};
Cart.propTypes = {
    title: PropTypes.object,
    index: PropTypes.number
}

export default Cart;