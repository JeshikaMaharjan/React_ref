// lyang wala code hoo yo (without using usecontext)
import React from 'react'
import { UserContext, ChannelContext } from '../../App1.js'

function ComponentF() {
	return (
		<div>
			<UserContext.Consumer>
				{user => {
					return (
						<ChannelContext.Consumer>
							{channel => {
                				return( 
									<div>User context value {user}, channel context value {channel} ComponentF</div>
								)
							}}
						</ChannelContext.Consumer>
						// eta context consume gareko
					)
				}}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF