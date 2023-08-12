
import ProductNav from '../product/ProductNav'
import CartView from './CartView'
import CheckoutView from './CheckoutView'

const Cart = () => {
  return (
    <div className='bg-gray-50 mt-16'>
      <ProductNav/>
      <div className=''>
        <div className='flex shadow-sm mx-20 my-10'>
          <CartView />
          <CheckoutView />
        </div>
      </div>
    </div>
  )
}

export default Cart
