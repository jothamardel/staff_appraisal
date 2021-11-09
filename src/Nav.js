import './Nav.css';
import { Link } from 'react-router-dom';



function Nav(props) {
	return (
		<nav className="pa3 pa4-ns">
			<Link className="link dim black b f-headline-ns tc db mb3 mb4-ns" to="/" title="Home">Staff Appraisal System</Link>
			<div className="tc pb3">
				<Link className="link dim gray f6 f5-ns dib mr3" to="/dashboard" title="Home">Staff Registration</Link>
				<Link className="link dim gray f6 f5-ns dib mr3" to="/record" title="Record Performance">Record Performance</Link>
				<Link className="link dim gray f6 f5-ns dib mr3" to="/view" title="view">Visualize Data</Link>
				<Link className="link dim gray f6 f5-ns dib mr3" to="/teacher" title="teachers">Teachers</Link>
			</div>
		</nav>
	)
}


export default Nav;