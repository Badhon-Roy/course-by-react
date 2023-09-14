import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'


const Courses = ({ handleSelectBtn }) => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className="md:w-3/4 grid md:grid-cols-3 gap-4 my-8">
            {
                course.map(course => <Course key={course.id}
                handleSelectBtn={handleSelectBtn}
                course={course}></Course>)
            }
        </div>
    );
};
Courses.propTypes = {
    course: PropTypes.array,
    handleSelectBtn: PropTypes.func
}
export default Courses;