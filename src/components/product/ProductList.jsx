import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MedicinesData from '../MedicinesData/MedicinesData'
import { Link } from 'react-router-dom'
import ProductNav from './ProductNav'

import { useDispatch } from 'react-redux'
import { loggin } from '../../features/userSlice'

const Medicines = () => {
  const [medicines, setMedicines] = useState([])
  const [cart, setCart] = useState([]);
  useEffect(() => setMedicines(MedicinesData), [])
  const dispatch = useDispatch()
  const addToCart = (medicine) => {
    setCart((prevCart) => [...prevCart, medicine]);
    dispatch(
      loggin({
        user: cart
      })
    )
    
  };

  return (
    <>
      <div className='bg-gray-50 mt-16'>
        <ProductNav />
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
            {medicines.map(medicine => {
              return (
                <>
                  <div className='overflow-hidden rounded bg-white' onClick={() => addToCart(medicine)}>
                    <div className='p-3 flex justify-between items-center '>
                      <Link href='/medicineDetails'>
                        <a>
                          <img
                            src={medicine.Image}
                            className='object-cover w-full h-64 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                            alt=''
                          />
                        </a>
                      </Link>
                    </div>

                    <div className='px-3'>
                      <p className='text-2xl font-bold leading-5'>
                        {medicine.name}
                      </p>
                      <div className=' flex justify-between items-center '>
                        <h5 className=''>${medicine.price}</h5>
                        <div
                          style={{ height: '40px', width: '40px' }}
                          className='rounded-full flex items-center  justify-center hover:bg-blue-500 hover:text-white'
                          
                        >
                          <FontAwesomeIcon className='' icon={faShoppingCart} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Medicines
