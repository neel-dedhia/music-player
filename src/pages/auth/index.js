import './auth.css';

const Login = () => {
    const e = process.env;
    const hrefs = {
        spotify: `${e.REACT_APP_AUTH_ENDPOINT}?client_id=${e.REACT_APP_CLIENT_ID}&redirect_uri=${e.REACT_APP_REDIRECT_URI}&response_type=${e.REACT_APP_RESPONSE_TYPE}`
    }

    return(
        <ul>
            <li>
                <a href={hrefs.spotify}>Login Spotify</a>
            </li>
        </ul>
    );
}

const Logout = () => {}


export {Login, Logout};
