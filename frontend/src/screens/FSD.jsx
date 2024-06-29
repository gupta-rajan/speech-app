import React from 'react';

const FSD = () => {
    useEffect(() => {
        window.location.href = "http://localhost:4000";  // Redirect to the FSD application
    }, []);

    return (
        <div>
            Redirecting to FSD...
        </div>
    );
};

export default FSD;