// import {Link} from 'react-router-dom'
import {useEffect} from 'react'

import Wrapper from '../assets/wrappers/Testing'
import GlobalStyles from '../globalStyles.js'

const Dashboard = () => {
    // const fetchData = async () => {
    //     try {
    //         // const response = await fetch('/data.json')
    //         const response = await fetch('/api/v1')
    //         const data = await response.json()
    //         console.log(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])
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
