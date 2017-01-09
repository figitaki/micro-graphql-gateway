const test = require('ava')
const {send} = require('micro')
const listen = require('test-listen')
const request = require('request-promise')

test('my endpoint', async t => {
	const fn = async function (req, res) {
		send(res, 200, {test: 'woot'})
	}
	const url = await listen(fn)
	const body = await request(url)
	t.is(body.test, 'woot')
})
