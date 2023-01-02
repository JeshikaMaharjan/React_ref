import React from 'react'
import './App.css'
import Counter from './components/H_usememo/Counter'
import ClassTimer from './components/I_useref/classTimer'
import FocusInput from './components/I_useref/focusInput'
import HookTimer from './components/I_useref/hookTimer'
import CounterOne from './components/J_customhook/counterone'
import CounterTwo from './components/J_customhook/countertwo'
import DocTitleOne from './components/J_customhook/doctitleone'
import DocTitleTwo from './components/J_customhook/doctitletwo'
import UserForm from './components/J_customhook/userform'

function Appfive() {
	return (
		<div className="App">
			{/* <Counter /> */}
            {/* <FocusInput/> */}
			{/* <ClassTimer /> */}
			{/* <HookTimer /> */}
			{/* <DocTitleOne/> */}
			{/* <DocTitleTwo/> */}
			{/* <CounterOne/> */}
			{/* <CounterTwo/> */}
			<UserForm/>
		</div>
	)
}

export default Appfive