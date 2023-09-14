import Carts from './Component/Carts/Carts'
import Courses from './Component/Courses/Courses'
import './App.css'

function App() {

  return (
    <div className='max-w-[1700px] mx-auto lg:px-16 md:px-8 px-4 my-8'>
      <h1 className='text-center md:text-4xl text-2xl font-bold '>Course Registration</h1>
      <div className='md:flex gap-3'>
        <Courses></Courses>
        <Carts></Carts>
      </div>
    </div>
  )
}

export default App
