const Post = (props) => {
	console.log(props)
	return (
		<div>
			<h1>{props.params && props.params.id}</h1>
		</div>
	)
}

Post.getInitialProps = ({ query }) => {
	return { myParams: query }
}

export default Post