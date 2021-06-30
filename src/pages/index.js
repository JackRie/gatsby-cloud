import * as React from "react"
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"
import { Container, Stack, Box, Heading, Text, Link } from "@chakra-ui/react"

const HomePage = () => {
	const data = useStaticQuery(graphql`
		{
			allWpPost {
				nodes {
					id
					title
					excerpt
					uri
				}
			}
		}
	`)

	const { allWpPost } = data

	return (
		<Container maxW="xl" centerContent>
			<Heading as={`h1`} m={5}>
				#100DaysOfGatsby
			</Heading>
			<Stack spacing={8}>
				{allWpPost.nodes.map(post => (
					<Box key={post.id} p={5} shadow="md" borderWidth="1px">
						<Heading as={`h2`}>{post.title}</Heading>
						<Text>
							<span dangerouslySetInnerHTML={{ __html: post.excerpt }} />
						</Text>
						<Link as={GatsbyLink} to={post.uri}>
							Read More More &rarr;
						</Link>
					</Box>
				))}
			</Stack>
		</Container>
	)
}

export default HomePage
