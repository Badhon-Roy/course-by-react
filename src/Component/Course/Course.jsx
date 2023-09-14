import PropTypes from 'prop-types'
import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';


const Course = ({course , handleSelectBtn}) => {
    const {images,course_name,credit,price,description} = course;
    return (
        <div className='rounded-xl bg-white p-4 shadow-lg'>
            <img className='w-full' src={images} alt="" />
            <h2 className='text-[18px] font-semibold mt-4 mb-2'>{course_name}</h2>
            <p>{description}</p>
            <div className='flex justify-between items-center my-5 gap-2'>
                <p className='flex items-center lg:gap-2 font-medium'><span className='text-2xl'><FiDollarSign/></span> Price : {price}</p>
                <p className='flex items-center lg:gap-2 font-medium'><span className='text-2xl'><BsBook/></span>Credit : {credit}hr</p>
            </div>
            <button onClick={()=>handleSelectBtn(course)} className='bg-[#2F80ED] rounded-lg focus:bg-purple-500 py-3 text-xl font-medium w-full text-white'>Select</button>

        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object,
    handleSelectBtn: PropTypes.func
}

export default Course;