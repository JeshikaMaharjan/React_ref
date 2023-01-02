import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate() //useNavigate returns a function, storing it in navigate 
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary')}>Place order</button>
      {/* onClick navigate to order-summary, [navigate(path) send path as argument ] */}
    </>
  )
}