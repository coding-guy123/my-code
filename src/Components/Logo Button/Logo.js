import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import AirtelLogo from'../../Assets/Logo.png'

export default function Airlog() {
    return (
        
        <Link to={process.env.PUBLIC_URL + '/'}>
            <Button variant="contained" color="primary"
                style={{ backgroundColor: '#ffffff' }} disableElevation>
                <img src={AirtelLogo} width="100%" height="100%"
                    className="AirtelLogo" alt="AirtelLogo" />
            </Button>
        </Link >
    );
}
