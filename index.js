const {graphql, buildSchema} = require('graphql')
const {send} = require('micro')

const schema = buildSchema(`
	type Query {
		hello: String
	}
`)

var root = {hello: () => 'Hello world!'}

module.exports = async function (req, res) {
	const result = await graphql(schema, '{ hello }', root)
	send(res, 200, result)
}
