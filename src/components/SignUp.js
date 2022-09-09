import { Container } from 'react-bootstrap';

import '../css/signup.css';
import logo from '../images/poewhite.png';
export function SignUp() {
	return (
		<Container className="p-0 m-0">
			<div className="row">
				<Container>
					<div className="col-6 bgColor bg">
						<img src={logo} alt="logo" />
					</div>
				</Container>
				<div className="col-6">
					<h1>Sign Up Page</h1>
				</div>
			</div>
		</Container>
	);
}
