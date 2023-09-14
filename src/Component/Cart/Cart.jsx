import PropTypes from 'prop-types'

const Cart = ({ title }) => {
    const { course_name } = title;
    return (
        <div>
            <h2 className='mb-3'>{course_name}</h2>
        </div>
    );
};
Cart.propTypes = {
    title: PropTypes.object
}

export default Cart;