import React, { Component } from 'react'

class ClassMouse extends Component {
	constructor(props) {
		super(props)

		this.state = {
			x: 0,
			y: 0
		}
	}

	logMousePosition = e => {
		this.setState({ x: e.clientX, y: e.clientY })
	}

	componentDidMount() {
		window.addEventListener('mousemove', this.logMousePosition)
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.logMousePosition)
	} //component unmount garda listener pani remove gareko (cleanup code)

	render() {
		return (
			<div>
				X - {this.state.x} Y - {this.state.y}
			</div>
		)
	}
}

export default ClassMouse