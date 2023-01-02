// use of useContext
import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../../App1.js'

function ComponentE() {

  const user = useContext(UserContext) //UserContext returns the context value so storing it
  const channel = useContext(ChannelContext)
  return <div> User is {user} and channel is {channel} ComponentE</div>
}

export default ComponentE