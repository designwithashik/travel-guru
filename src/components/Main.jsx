/* eslint-disable no-unused-vars */


// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../Providers/AuthProvider';

const Main = () => {
    const { rooms, places } = useContext(AuthContext);
    
    return (
        <div>
            <h1>Alhamdulillah</h1>
            {rooms.map(room =>
            
                
            <>
                    <h2>Rooms</h2>{console.log(room)}
                </>)}
            
            {places.map(place=>console.log(place))}
        </div>
    );
};

export default Main;