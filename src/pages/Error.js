import Wrapper from '../assets/wrappers/ErrorPage'
import { Link } from 'react-router-dom'
import GlobalStyles from '../globalStyles.js'

const Error = () => {
    return (
        <div>
            <GlobalStyles/>
        <Wrapper className="full-page">
            <div>
                <h3>404 PAGE NOT FOUND</h3>
                <p>We can't seem to find the page you're looking for.</p>
                <Link to='/'>Back Home</Link>
            </div>
        </Wrapper>
        </div>
    )
}

export default Error
