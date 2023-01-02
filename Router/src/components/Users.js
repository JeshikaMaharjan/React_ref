// Expected outcome : Active users button click garda search param ma filter=active
//  gayera 'Showing active users' render hunu parxa 
// Reset filter button click garda 'Showing all users render hunu parxa 
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams() //useSearchParams returns two things(object, setter function )
  const showActiverUsers = searchParams.get('filter') === 'active'
//   showActiveUsers holds Boolean value
//   if searchparams ma filter=active xaa vane  set showActiveUsers to 'true' else set to 'false'
  return (
    <>
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>
            {/* onClick set the search param to filter=active */}
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
            {/* onClick set the search param to blank */}
      </div>
      {showActiverUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )
     }
      <Outlet />
    </>
  )
}