import * as React from 'react';
import { Button } from 'antd';
import axios from 'src/config/axios'

interface IIndexState {
	currentUser: any
}

class Index extends React.Component<any,IIndexState> {

	constructor(props:any){
		super(props)
		this.state = {
			currentUser: {}
		}
	}

	getMe = () => {
		return axios.get('me')
	}

	async componentDidMount(){
		try{
			const response = await this.getMe()
			this.setState({currentUser: response.data})
		}catch (e) {
			alert(e)
		}
	}

	logout = () => {
		localStorage.setItem('x-token','')
		this.props.history.push("/login");
	}

	render() {
		return (
			<div className="Index">
				<p>欢迎回来 {this.state.currentUser.account}</p>
				<p>您的 app_id 是：{this.state.currentUser.app_id}</p>
				<p>您的 app_secret 是：{this.state.currentUser.app_secret}</p>
				<Button onClick={this.logout}>登出</Button>
			</div>
		);
	}
}

export default Index;