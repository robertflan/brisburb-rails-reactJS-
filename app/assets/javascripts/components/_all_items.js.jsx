var AllItems = React.createClass({
	getInitialState(){
		return { items: [] }
	},
	componentDidMount(){
		console.log('Component mounted');
		$.getJSON('/api/vi/items.json', (response) => {this. setState({ items:response })});
	},
	render(){
		return(
			<div>
				<h1>All items component</h1>
			</div>
		)
	}
})