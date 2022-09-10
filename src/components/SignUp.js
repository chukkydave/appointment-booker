import { Button } from 'react-bootstrap';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';

import '../css/signup.css';
import logo from '../images/poewhite.png';
export function SignUp() {
	return (
		<div className="row p-0 m-0" style={{ height: '100vh' }}>
			<div
				className="col-md-5 col-lg-5 col-xl-5 col-sm-12 bgColor bg p-5"
				style={{
					position: 'relative',
					display: 'grid',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div>
					<div className="" style={{ position: 'absolute', top: '1em' }}>
						<img src={logo} alt="logo" />
					</div>

					<div>
						<h2>
							Implement client<br /> appointment experiences<br /> with just a few
							clicks
						</h2>
					</div>
					<br />
					<br />

					<div>
						<p>
							Guide your customers on a fantastic<br /> journey within your web app.
						</p>
					</div>
					<div style={{ fontSize: '0.8em', position: 'absolute', bottom: '1em' }}>
						<p>
							<FaPhone /> +234 703 4248 173 &#8203;
							<FaEnvelope /> info@poeinternational.com
						</p>
					</div>
				</div>
			</div>
			<div
				className="col-md-7 col-lg-7 col-xl-7 col-sm-12 p-5"
				style={{
					background: '#F6F5FC',
					display: 'grid',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div>
					<h3 className="mb-5 h3Title">Get Started</h3>
					<div>
						<Button size="lg" variant="default" className="d-flex iconBtn text-center">
							<div className="iconBg me-3">
								<FaEnvelope style={{ color: 'blue' }} />
							</div>
							Sign Up with Email
						</Button>
						<br />
						<Button size="lg" variant="default" className="d-flex iconBtn text-center">
							<div className="iconBg me-3">
								<FaGoogle style={{ color: '#DB4437' }} />
							</div>
							Sign Up with Google
						</Button>
						<br />
						<Button size="lg" variant="default" className="d-flex iconBtn text-center">
							<div className="iconBg me-3">
								<FaFacebook style={{ color: '#4267B2' }} />
							</div>
							Sign Up with Facebook
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
