// import logo from '../assets/images/logo.svg';
// import logo from '../assets/images/main.svg';

const Landing = () => {
    const username =
    const [username, setUsername] = useState('');
    return (
        <>
            <h4>LANDING PAGE</h4>
            <input
            onChange={event=>setUsername(event.target.value)}
            />
            <input/>
            <button
                /*
                onClick, call the endpoint that validates the user and password
                //onClick={()=>login(username,password)}
                //login is an async func that submits user,pass tobackend for validation
                * */
            onClick={}
            />
        </>
    );
}


export default Landing;
