import * as React from 'react';
import { Input,Icon,Button } from 'antd';
import { Link } from 'react-router-dom';
import './Login.scss'
import axios from "../../config/axios";

interface ILoginState {
	account:string;
	password: string
}

class Login extends React.Component<any,ILoginState> {
	state = {
		account: '',
		password: ''
	};

	onChangeUserName = (e:React.FormEvent<HTMLInputElement>) => {
		this.setState({account: e.currentTarget.value})
	}

	onChangePassword = (e:React.FormEvent<HTMLInputElement>) => {
		this.setState({password: e.currentTarget.value})
	}

	submit = async () => {
		const { account, password } = this.state;
		try{
			await axios.post('/sign_in/api_user',{
				account,
				password
			})
			this.props.history.push("/");
		}catch (e) {
			alert(e)
		}
	}

	public render() {
		const { account,password } = this.state;
		return (
			<div id="Login">
				<h1>毕设管理系统登录</h1>
				<Input
					placeholder="请输入用户名"
					prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					value={account}
					onChange={this.onChangeUserName}
				/>
				<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
				                placeholder="密码" value={password} onChange={this.onChangePassword}/>
				<Button type="primary" onClick={this.submit} className="loginButton">登录</Button>
				<p>
					Or <Link to="/signUp">立即注册</Link>
				</p>
			</div>
		);
	}
}

export default Login;