import React from "react";




class Blog extends React.Component {
	constructor() {
		super();

		this.state = {
			writings: [],
			blogAccepted: false,
			MyTitle: "",
			MyText: "",
			MyImageURL: "",
		};

	}



	componentWillMount() {
		fetch('/writings')
			.then(res => res.json())
			.then(data => {
				this.setState({ writings: data });
			})
	}

	submit = () => {
		
		let addWritingData = {
			MyTitle: this.state.MyTitle,
			MyText: this.state.MyText,
			MyImageURL: this.state.MyImageURL
		};
		
		this.handleAddWriting(addWritingData);

	}

	/*
	 * Add newWriting to store (`this.state`) and re-render
	 */
	handleAddWriting(newWriting) {
		fetch('/writings', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newWriting)
		})
			.then(res => res.json())
			.then(writing => {
				this.setState({
					writings: this.state.writings.concat(writing),
					blogAccepted: true,
					MyText: "",
					MyTitle: "",
					MyImageURL: ""
				});
			});
	}

	handleFormInput = e => {
		let {name, value} = e.target;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div>
				<div >
				
					<input id="MyTitle" name="MyTitle" className="form-control"
						placeholder="My Title" onChange={this.handleFormInput} value={this.state.MyTitle}/>
					<br />					
					<input id="MyImageURL" name="MyImageURL" className="form-control"
						placeholder="My Image URL" onChange={this.handleFormInput} value={this.state.MyImageURL}/>
					<br />
					<textarea id="MyText" name="MyText" className="form-control"
						placeholder="My Text" rows="10" onChange={this.handleFormInput} value={this.state.MyText}/>
					<br />
					{this.state.blogAccepted ? <div className="error-text">Your post has been accepted.  Check the Blog tab to marvel at your work!</div> : " "}
					<button className="btn btn-primary" type="button" onClick={this.submit}>
						Add Blog Post
					</button>
				</div>
			</div>
		);
	}
}



export default Blog;
