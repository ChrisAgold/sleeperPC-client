import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Testing';
import GlobalStyles from '../globalStyles.js'

const Dashboard = () => {
    return (
        <div>
            <GlobalStyles/>
        <Wrapper className="full-page-alt">
            <h1>Dashboard</h1>
        </Wrapper>
        </div>
    )
}

export default Dashboard
