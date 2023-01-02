import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  // const params = useParams() //useParams  returns  object of key value pairs
  // console.log(params)
  const { userId } = useParams() //useParams  returns  object of key value pairs(tyo maddhey we need userId so destructuring)
  return <div>Details about user {userId}</div>
}