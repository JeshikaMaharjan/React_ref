import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
      <div>
        <input type='search' placeholder='Search products' />
      </div>
      <nav>
        <Link to='featured'>Featured</Link> {/* eta path ma forward slash nahalne   */}
        <Link to='new'>New</Link>
      </nav>
      <Outlet /> {/* here is where child component (featured ra new) is rendered  */}
    </>
  )
} 