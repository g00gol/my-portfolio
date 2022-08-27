const Post = (props) => {
	console.log(props)
	return (
		<div>
			<h1>{props.myParams.id}</h1>
		</div>
	)
}

Post.getInitialProps = ({ query }) => {
	return { myParams: query }
}

export default Post