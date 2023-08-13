
import { useSelector } from 'react-redux'
import ProductNav from '../product/ProductNav'
import CartView from './CartView'
import CheckoutView from './CheckoutView'
import { selectUser } from '../../features/userSlice'

const Cart = () => {
  let cart = useSelector(selectUser)
  console.log(cart);
  return (
    <div className='bg-gray-50 mt-16'>
      <ProductNav/>
      <div className=''>
        <div className='flex shadow-sm mx-20 my-10'>
          <CartView cart={cart} />
          <CheckoutView />
        </div>
      </div>
    </div>
  )
}

export default Cart
