'use client'

import { useState } from 'react'
import { testAction } from './actions'

function ControlledFormInitialTrue () {
	const [input, setInput] = useState('')
	const [check1, setCheck1] = useState(true)
	const [check2, setCheck2] = useState(true)
	const [check3, setCheck3] = useState(true)

	console.log('Controlled component (initial true) rendered')
	return (
		<div>
			<h2>Controlled Form (initial true)</h2>
			<form action={testAction}>
				<input type="text" name="controlled2-input" id="controlled2-input"
				       value={input}
				       onChange={(e) => setInput(e.target.value)}/> <br/>
				<input type="checkbox" name="controlled2-check1" id="controlled2-check1"
				       checked={check1}
				       onChange={(e) => setCheck1(e.target.checked)}/>
				<label htmlFor="controlled2-check1">Checkbox 1</label> <br/>
				<input type="checkbox" name="controlled2-check2" id="controlled2-check2"
				       checked={check2}
				       onChange={(e) => setCheck2(e.target.checked)}/>
				<label htmlFor="controlled2-check2">Checkbox 2</label> <br/>
				<input type="checkbox" name="controlled2-check3" id="controlled2-check3"
				       checked={check3}
				       onChange={(e) => setCheck3(e.target.checked)}/>
				<label htmlFor="controlled2-check3">Checkbox 3</label> <br/>
				<button type="submit">Submit</button>
			</form>
			<ol>
				<li>Enable rerender highlights in react dev tools</li>
				<li>Uncheck all checkboxes and fill input</li>
				<li>Submit form</li>
				<li>Checkboxes reset to checked, states are still false, sever console
					prints no checkboxes. Input keeps value
				</li>
				<li>Submit form again without changing anything</li>
				<li>Server console prints all checkboxes checked</li>
				<li>Uncheck one of checkboxes. No rerenders happen, states are
					unchanged, but now only this checkbox is unchecked.
				</li>
				<li>Check this checkbox. Component rerenders and syncs state with view.
					Component works normally until next submit.
				</li>
			</ol>
		</div>
	)
}

export default ControlledFormInitialTrue
