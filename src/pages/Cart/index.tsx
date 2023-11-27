import {useMemo} from 'react'

// styles
import s from './index.module.scss'

// redux
import { useDispatch, useSelector } from 'react-redux'

// module
import { Cart as C} from '@/modules/cart'

const Cart = () => {
    // init
    const cart = new C()
    // redux states
    const CART_ITEMS = useSelector((state: any)=>{state.cart.items})
    // format data
    const CART_PRODUCTS = useMemo(()=>{
        return cart.makeDataPrettier(CART_ITEMS)
    }, [CART_ITEMS])

  return (
    <>
        <main className={s.cart}>
            <h2>CART</h2>
            {
                CART_PRODUCTS.map((item: any)=>{
                    return (
                        <div key={item.id}>
                            <h2>{item.id}</h2>
                            <p>{item.qty}</p>
                        </div>
                    )
                })
            }
        </main>
    </>
  )
}

export default Cart