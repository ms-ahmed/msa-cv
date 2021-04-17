import React from 'react';
import Footer from './foooter/footer';
import Header from './header/header';
import SvgSectionOne from './../assets/svg/bg-pattern-home-2.svg';
import SvgSectionTwo from './../assets/svg/bg-pattern-about-4.svg';
import Person from './../assets/svg/icon-person.svg';
import Cog from './../assets/svg/icon-cog.svg';
import Chart from './../assets/svg/icon-chart.svg';
const Home: React.FC = () => {
	return (
		<div className="home">
			<Header />
			<section className="section-one">
				<div className="container">
					<div className="item-one">
						<h1>
							Find the best <span>talent</span>
						</h1>
					</div>
					<div className="item-two">
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.{' '}
						</p>
					</div>
					<div className="svg-section-one">
						<img src={SvgSectionOne} />
					</div>
				</div>
			</section>
			<section className="section-two">
				<div className="svg-section-two">
					<img src={SvgSectionTwo} />
					{/* Display flex one */}
					<div className="statement">
						<div className="red-div" />
						<h2>
							It has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged
						</h2>
					</div>
					{/* Display flex two */}
					<div className="svg-text">
						<div className="individual">
							<h3>Team player</h3>
							<p>Text</p>
							<div>
								<img src={Person} />
							</div>
						</div>
						<div className="individual">
							<h3>Technical</h3>
							<p>Text</p>
							<div>
								<img src={Cog} />
							</div>
						</div>
						<div className="individual">
							<h3>Improvement</h3>
							<p>Text</p>
							<div>
								<img src={Chart} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Home;
