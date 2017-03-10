const cardContainer = document.querySelector('.react-card');

//React component for Form Inputs
class CardInput extends React.Component{
	render(){
		return (
			<fieldset>
				<input name={this.props.name} id={this.props.id} type={this.props.type || "text"} placeholder={this.props.placeholder} required />
			</fieldset>
		);
	}
}

//React component for TextArea
class CardTextarea extends React.Component{
	render(){
		return (
			<fieldset>
				<textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required></textarea>
			</fieldset>
		);
	}
}

//React component for Button
class CardBtn extends React.Component{
	render(){
		return (
			<fieldset>
				<button className={this.props.className} type={this.props.type} value={this.props.value} >{this.props.value}</button>
			</fieldset>
		);
	}
}

//React component for social prfile links
class CardProfileLinks extends React.Component{
	render(){
		const profileLinks = ['facebook', 'twitter', 'github', 'linkedin'];
		
		const linksList = profileLinks.map((link, index) =>
			<li key={index}>
				<a href="#">
					<i className={'fa fa-'+link}></i>
				</a>
			</li>
		);
		
		return (
			<div className="card-social-links">
				<ul className="social-links">
					{linksList}
				</ul>
			</div>
		);
	}
}

//React component for the front-side of the card
class CardFront extends React.Component{
	render(){
		return (
			<div className="card-side side-front">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-6">
							<img src="img/Lighthouse.jpg" />
						</div>
						
						<div className="col-xs-6 side-front-content">
							<h1>Ramiz Mehran</h1>
							
							<h2>Bangalore Based - Software Developer</h2>
							
							<p>Ramiz is driven by turning ideas into scalable and empowering experiences that solve real life problems.</p>
							<p>He is currently a developer at TCS, Bangalore. He loves new challenges, and is always ready to learn something new.</p>
							<p>Mehran has had some experience working in Python, ReactJS, AngularJS and Ruby as well. All the while his proficiency being JAVA.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

//React component for the backside of the card
class CardBack extends React.Component{
	render(){
		
		var handleSubmit = function(e){
			performSubmit(e);
		};

		return (
			<div className="card-side side-back">
				<div className="container-fluid">
					<h1>My Competencies!</h1>
					
					<div className="row">
						<div className="col-xs-6">
							<h3>Mobile</h3>
							<ul>
								<li>Android</li>
							</ul>
						</div>
						
						<div className="col-xs-6">
							<h3>Web Development</h3>
							<ul>
								<li>Java Apache TOMCAT</li>
								<li>AngularJS</li>
								<li>ReactJS</li>
								<li>RoR</li>
							</ul>
						</div>
					</div>
						
					<div className="row">
						<div className="col-xs-6">
							<h3>Projects</h3>
							<ul>
								<li></li>
							</ul>
						</div>
						
						<div className="col-xs-6">
							<h3>Blogs</h3>
							<ul>
								<li></li>
								<li></li>
							</ul>
						</div>
					</div>
					
					<CardProfileLinks />
				</div>
			</div>
		);
	}
}

//React component for the card (main component)
class Card extends React.Component{
	render(){
		return (
			<div className="card-container">
				<div className="card-body">
					<CardFront />
					
					<CardBack />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Card />, cardContainer);
