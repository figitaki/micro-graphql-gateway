const test = require('ava')
const listen = require('test-listen')
const request = require('request-promise')
const endpoint = require('../index.js')

test('my endpoint', async t => {
	const url = await listen(endpoint)
	const body = await request(url)
	t.is(body.test, 'woot')
})
