const Post = (props) => {
	console.log(props)
	return (
		<div>
			{props.myParams && props.myParams.id}
		</div>
	)
}

Post.getInitialProps = ({ query }) => {
	return { myParams: query }
}

export default Post