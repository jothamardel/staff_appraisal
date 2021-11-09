import React from 'react';
import Nav from "./Nav";
import './Dashboard.css';
import { data} from './data';

class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			fullName: '',
			email: '',
			phone: '',
			age: '',
			married: false
		}
	}

	onInputChange = e => {
		const { name, value } = e.target;
		this.setState({[name]: value});
	}

	onFormSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	}

	render() {

		return (
			<>
				<Nav />
				<main className="pa4 black-80">
					<form onSubmit={this.onFormSubmit} className="measure center">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="f4 fw6 ph0 mh0">Staff Biodata</legend>
							<div className="mt3 input">
								<label className="db fw6 lh-copy f6" htmlFor="full-name">Full Name</label>
								<input onChange={this.onInputChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="fullName"  id="full-name"/>
							</div>
							<div className="mt3 input">
								<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								<input onChange={this.onInputChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email-address"/>
							</div>
							<div className="mt3 input">
								<label className="db fw6 lh-copy f6" htmlFor="phone">Phone</label>
								<input onChange={this.onInputChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="phone" name="phone"  id="phone" style={{width: '96%'}}/>
							</div>
							<div className="mt3 input">
								<label className="db fw6 lh-copy f6" htmlFor="age">Age</label>
								<input onChange={this.onInputChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white " type="age" name="age"  id="age" style={{width: '96%'}}/>
							</div>
							<div className="mt3 input">
								<label className="db fw6 lh-copy f6" htmlFor="gender">Gender</label>
								<select onChange={this.onInputChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="gender" name="gender"  id="gender" style={{ marginBottom: '1rem'}}>
									<option>select gender</option>
									<option value='male' >male</option>
									<option value='female'>female</option>
									<option value='other'>other</option>
								</select>
							</div>
							<div className="flex items-center mb2">
								<input onChange={this.onInputChange} className="mr2" type="checkbox" id="married" name="married" value="married"/>
								<label htmlFor="married" className="lh-copy">Married</label>
							</div>
						</fieldset>
						<button className="f6 link dim ph3 pv2 mb2 dib w-100 white pointer grow bg-black" type="submit" style={{height: '2.5rem', border: 'none'}}>submit</button>
					</form>
				</main>
	
			</>
		);
	}
}


export default Dashboard;