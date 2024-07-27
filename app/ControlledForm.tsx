'use client'

import { useState } from 'react'
import { testAction } from './actions'

function ControlledForm () {
	const [input, setInput] = useState('')
	const [check1, setCheck1] = useState(false)
	const [check2, setCheck2] = useState(false)
	const [check3, setCheck3] = useState(false)

	console.log('Controlled component rendered')
	return (
		<div>
			<h2>Controlled Form</h2>
			<form action={testAction}>
				<input type="text" name="controlled-input" id="controlled-input"
				       value={input}
				       onChange={(e) => setInput(e.target.value)}/> <br/>
				<input type="checkbox" name="controlled-check1" id="controlled-check1"
				       checked={check1}
				       onChange={(e) => setCheck1(e.target.checked)}/>
				<label htmlFor="controlled-check1">Checkbox 1</label> <br/>
				<input type="checkbox" name="controlled-check2" id="controlled-check2"
				       checked={check2}
				       onChange={(e) => setCheck2(e.target.checked)}/>
				<label htmlFor="controlled-check2">Checkbox 2</label> <br/>
				<input type="checkbox" name="controlled-check3" id="controlled-check3"
				       checked={check3}
				       onChange={(e) => setCheck3(e.target.checked)}/>
				<label htmlFor="controlled-check3">Checkbox 3</label> <br/>
				<button type="submit">Submit</button>
			</form>
			<ol>
				<li>Enable rerender highlights in react dev tools</li>
				<li>Check all checkboxes and fill input</li>
				<li>Submit form</li>
				<li>Checkboxes reset to unchecked, states are still true, sever console
					prints all checked correctly. Input keeps value
				</li>
				<li>Submit form again without changing anything</li>
				<li>Server console prints no checkboxes at all</li>
				<li>Check one of checkboxes. No rerenders happen, states are unchanged,
					but now only this checkbox is checked.
				</li>
				<li>Uncheck this checkbox. Component rerenders and syncs state with
					view. Component works normally until next submit.
				</li>
			</ol>
		</div>
	)
}

export default ControlledForm
