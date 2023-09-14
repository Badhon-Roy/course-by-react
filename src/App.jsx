import { useState } from 'react'
import './App.css'
import Carts from './Component/Carts/Carts'
import Courses from './Component/Courses/Courses'

function App() {
  const [courseTitle , SetCourseTitle] = useState([]);

  const handleSelectBtn = title =>{
    const newTitle = ([...courseTitle , title])
    SetCourseTitle(newTitle)
    
  }
  

  return (
    <div className='max-w-[1700px] mx-auto lg:px-16 md:px-8 px-4 my-8'>
      <h1 className='text-center md:text-4xl text-2xl font-bold '>Course Registration</h1>
      <div className='md:flex gap-3'>
        <Courses handleSelectBtn={handleSelectBtn}></Courses>
        <Carts courseTitle={courseTitle}></Carts>
      </div>
    </div>
  )
}

export default App
