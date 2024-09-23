import './index.css'
import {Link} from 'react-router-dom'
const Submitted =()=>
{
    return (
        <div className="submitted-container">
            <h1>Details Submitted</h1>
            <p>For another response</p>
            <Link to="/" className='link'><button >Click</button></Link>
        </div>
    )
}
export default Submitted