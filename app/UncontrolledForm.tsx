'use client'

import { testAction } from './actions'

function UncontrolledForm () {
	console.log('Uncontrolled component rendered')
	return (
		<div>
			<h2>Uncontrolled Form</h2>
			<form action={testAction}>
				<input type="text" name="uncontrolled-input" id="uncontrolled-input"/>
				<br/>
				<input type="checkbox" name="uncontrolled-check1"
				       id="uncontrolled-check1"/>
				<label htmlFor="uncontrolled-check1">Checkbox 1</label> <br/>
				<input type="checkbox" name="uncontrolled-check2"
				       id="uncontrolled-check2"/>
				<label htmlFor="uncontrolled-check2">Checkbox 2</label> <br/>
				<input type="checkbox" name="uncontrolled-check3"
				       id="uncontrolled-check3"/>
				<label htmlFor="uncontrolled-check3">Checkbox 3</label> <br/>
				<button type="submit">Submit</button>
			</form>
			<ol>
				<li>Check all checkboxes</li>
				<li>Submit form</li>
				<li>Whole form resets</li>
			</ol>
		</div>
	)
}

export default UncontrolledForm
