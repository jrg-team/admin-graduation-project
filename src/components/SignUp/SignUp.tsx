import * as React from 'react';
import { Input,Icon,Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'src/config/axios'
import './SignUp.scss'

interface ISignUpState {
	account: string;
	password: string;
	passwordConfirmation: string;
}

class SignUp extends React.Component<any,ISignUpState> {
	constructor(props:any){
		super(props)
		this.state = {
			account: '',
			password: '',
			passwordConfirmation: ''
		}
	}

	onChange = (key:keyof ISignUpState,value:string):void => {
		const newState = {}
		newState[key] = value
		this.setState(newState)
	}

	submit = async () => {
		const { account, password,passwordConfirmation } = this.state;
		try{
			await axios.post('/sign_up/api_user',{
				password_confirmation: passwordConfirmation,
				account,
				password
			})
			this.props.history.push("/");
		}catch (e) {
			alert(e)
		}
	}

	public render() {
		const {account,password,passwordConfirmation} = this.state
		return (
			<div id="SignUp">
				<h1>毕设管理系统注册</h1>
				<Input
					placeholder="请输入用户名"
					prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					value={account}
					onChange={event => this.onChange('account',event.currentTarget.value)}
				/>
				<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
				                placeholder="密码" value={password}
				                onChange={event => this.onChange('password',event.currentTarget.value)}/>
				<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
				                placeholder="确认密码" value={passwordConfirmation}
				                onChange={event => this.onChange('passwordConfirmation',event.currentTarget.value)}/>
				<Button type="primary" onClick={this.submit} className="signUpButton">注册</Button>
				<p>
					Or <Link to="/login">立即登录</Link>
				</p>
			</div>
		);
	}
}

export default SignUp;