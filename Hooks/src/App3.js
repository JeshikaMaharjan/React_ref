import React, { useReducer } from 'react'
import './App.css'
import DataFetchingOne from './components/F_fetching_data_with_useReducer/datafetchingone'
import DataFetchingTwo from './components/F_fetching_data_with_useReducer/datafetchingtwo'

function Appthree() {
	return (		
			<div className="App">				
				{/* <DataFetchingOne /> */}
				<DataFetchingTwo />
			</div>
	)
}

export default Appthree