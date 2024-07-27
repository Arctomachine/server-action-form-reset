'use server'

export async function testAction (data: FormData) {
	console.log(Date.now(), data)

	return {
		data: 'ok',
	}
}
