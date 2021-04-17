import React, { Fragment } from 'react';
import Hambourger from '../../assets/svg/icon-hamburger.svg';

const Header: React.FC = () => {
	return (
		<Fragment>
			<header>
				<nav>
					<div>
						<span>CV</span>
					</div>
					<div className="flex"></div>
					<div className="button">
						<img src={Hambourger} />
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;
