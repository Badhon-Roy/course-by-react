import { useState } from 'react'
import './App.css'
import Carts from './Component/Carts/Carts'
import Courses from './Component/Courses/Courses'

function App() {
  const [courseTitle, SetCourseTitle] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [credit, setCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectBtn = title => {
    let cost = title.credit;
    const newTitle = ([...courseTitle, title])
    const isSelect = courseTitle.find(item => item.id === title.id)
    if (isSelect) {
      return alert('this is clicked')
    }
    else {
      courseTitle.forEach(cart => {
        cost += cart.credit;
      })
      const total = 20 - cost;
      if (total < 0) {
        return alert('beshi')
      }
      else {
        const newTotal = totalPrice + title.price;
        setTotalPrice(newTotal)
        setRemaining(total)
        SetCourseTitle(newTitle)
      }
    }
    setCredit(cost)

  }
  // const handleTotal = total => {
  //   console.log(total);

  // }



  return (
    <div className='max-w-[1700px] mx-auto lg:px-16 md:px-8 px-4 my-8'>
      <h1 className='text-center md:text-4xl text-2xl font-bold '>Course Registration</h1>
      <div className='md:flex gap-3'>
        <Courses handleSelectBtn={handleSelectBtn}></Courses>
        <Carts courseTitle={courseTitle}
          remaining={remaining}
          credit={credit}
          totalPrice={totalPrice}
        ></Carts>
      </div>
    </div>
  )
}

export default App
