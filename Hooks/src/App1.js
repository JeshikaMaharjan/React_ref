import React from 'react'
import './App.css'
import ComponentC from './components/D_useContext/ComponentC'

export const UserContext = React.createContext() //context create gareko
export const ChannelContext = React.createContext()

function Appone() {
	return (
		<div className="App">
			<UserContext.Provider value={'Vishwas'}>{/* provide context values at a high level */}
                <ChannelContext.Provider value={'Codevolution'}>
                    {/* eta bata context values (Vishwas, Codevolution) pathako */}
					<ComponentC /> 
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default Appone