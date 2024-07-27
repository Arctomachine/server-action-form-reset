import ControlledForm from './ControlledForm'
import UncontrolledForm from './UncontrolledForm'
import ControlledFormInitialTrue from './ControlledFormInitialTrue'

/** Add your relevant code here for the issue to reproduce */
export default function Home () {
	return <div>
		<ControlledForm/>
		<ControlledFormInitialTrue/>
		<UncontrolledForm/>
	</div>
}
