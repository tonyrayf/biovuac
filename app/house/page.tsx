'use client';

import { useEffect, useState } from 'react';


export default function HousePage() {
    const [id, setID] = useState<string | null>(null);


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const param = urlParams.get('id');

        setID(param);
    }, []);
    

    return (
        <html>
            <body>
                <h1>Детали дома</h1>
                <p>Параметр: {id}</p>
            </body>
        </html>
    );
}