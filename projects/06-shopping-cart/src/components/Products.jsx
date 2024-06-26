import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart.js'

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product)
          const handleAddOrRemoveProduct = () => {
            isProductInCart ? removeFromCart(product) : addToCart(product)
          }

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button
                  className={isProductInCart ? 'remove' : 'add'}
                  onClick={handleAddOrRemoveProduct}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
