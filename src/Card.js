

function Card(props) {
	return (
		<section className="tc pa3 pa5-ns" >
			<article className="hide-child relative ba b--black-20 mw5 center">
				<div className="pa2 bt b--black-20">
					{/* <a className="f6 db link dark-blue hover-blue" href="#">Jesse Grant</a> */}
					<p className="f6 gray mv1">{props.fullName}</p>
					<p className="f6 gray mv1">{props.phone}</p>
					<p className="f6 gray mv1">{props.age} years</p>
					<p className="f6 gray mv1">{props.gender}</p>
					<a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="#">Edit</a>
				</div>
				<a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">×</a>
			</article>
		</section>

	);
}


export default Card;