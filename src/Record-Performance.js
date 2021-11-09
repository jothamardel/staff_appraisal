import React from 'react';
import Nav from "./Nav";
import './Dashboard.css';
import { data} from './data';

class RecordPerformance extends React.Component {
	constructor() {
		super();
		this.state = {
			staff: "",
			qualification: 0,
			cod: 0,
			integrity: 0,
			initiative: 0,
			intellectual_ability: 0,
			relation_with_staff_public: 0,
			supervisory_ability: 0, 
			atdp: 0,
			atwu: 0, 
			tihj: 0,
			cwoaw: 0, 
			cap: 0,
			pojacs: 0,
			attohr: 0,
			atpup: 0, 
			praraeuos: 0,
			ecs: 0,
			atde: 0,
			bbsad: 0,
			tir: 0, 
			per: 0
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
							<legend className="f4 fw6 ph0 mh0">Analysis</legend>
								<div className="mt3 input">
									<label className="db fw6 lh-copy f6" htmlFor="staff">Staff</label>
									<select onChange={this.onInputChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"  name="staff"  id="staff">
										<option>select staff</option>
										<option value={0}>0</option>
										<option value={1}>1</option>
										<option value={2}>2</option>
									</select>
								</div>	
								{
									data.map(item => (
										<div key={item.id.toString()} className="mt3 input">
											<label className="db fw6 lh-copy f6" htmlFor={item.name}>{item.title}</label>
											<select onChange={this.onInputChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"  name={item.name}  id={item.name}>
												<option>select {item.title}</option>
												<option value={0}>0</option>
												<option value={1}>1</option>
												<option value={2}>2</option>
											</select>
										</div>	
									))
								}
						</fieldset>
						<button className="f6 link dim ph3 pv2 mb2 dib w-100 white pointer grow bg-black" type="submit" style={{height: '2.5rem', border: 'none'}}>submit</button>
					</form>
				</main>
	
			</>
		);
	}
}


export default RecordPerformance;