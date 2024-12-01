'use client'

import React, { useState } from 'react'
import { updateAuctionText } from '../actions/auctionActions';
import { Button } from 'flowbite-react';


export default function AuthTest() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>();

    function doUpdate() {
        setResult(undefined);
        setLoading(true);
        updateAuctionText()
            .then(res => setResult(res))
            .catch(err => setResult(err))
            .finally(() => setLoading(false));
    }

    return (
        <div className='flex items-center gap-4'>
            <Button outline isProcessing={loading} onClick={doUpdate}>Test Auth</Button>
            <div>
                {JSON.stringify(result)}
            </div>
        </div>
    )
}
