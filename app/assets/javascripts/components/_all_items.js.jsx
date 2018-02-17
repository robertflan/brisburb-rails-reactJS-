var AllItems = React.createClass({
	getInitialState(){
		return { items: [] }
	},
	componentDidMount(){
		console.log('Component mounted');
		$.getJSON('/api/vi/items.json', (response) => {this. setState({ items:response })});
	},
	render(){
		var items = this.state.items.map((item) => {
			return(
				<div>
					<h3>{item.name}</h3>
					<p>{item.description}</p>
				</div>
				)
		});
		return(
			<div>
				{items}
			</div>
		)
	}
})