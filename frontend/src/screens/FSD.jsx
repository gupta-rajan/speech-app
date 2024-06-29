import React, { useEffect } from 'react';

const FSD = () => {
    useEffect(() => {
        window.location.href = "http://10.195.250.59:4000";  // Redirect to the FSD application
    }, []);

    return (
        <div>
            Redirecting to FSD...
        </div>
    );
};

export default FSD;