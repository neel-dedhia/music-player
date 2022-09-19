import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from '../auth';
import './home.css';

const Home = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('token');

        if(!token && hash){
            console.log(hash);
            token = hash.substring(1).split('&').find(e => e.startsWith('access_token')).split('=')[1];

            window.location.hash = '';
            window.localStorage.setItem('token', token);
        }

        setToken(token);
    }, []);

    return !token ? (<Login />) : (
        <Router>
            <div className="home">
                <Routes>
                    <Route path="/" />
                </Routes>
            </div> 
        </Router>
    ); 
};

export default Home;