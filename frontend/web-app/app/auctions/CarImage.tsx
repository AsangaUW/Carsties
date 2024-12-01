'use client'

import Image from 'next/image'
import React, { useState } from 'react'

type Props = {
    imageUrl: string;
    make?: string;
    model?: string;
    color?: string;
}

export default function CarImage({ imageUrl, make, model, color }: Props) {
    const [isLoading, setLoading] = useState(true);

    return (
        <Image
            src={imageUrl}
            alt={`image of ${make} ${model} ${color}`}
            fill
            priority
            className={`
                object-cover group-hover:opacity-75 duration-700 ease-in-out
                ${isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}
            `}
            sizes='(max-width: 768) 100vw, (max-width: 1200px) 50vw, 25vw'
            onLoad={() => setLoading(false)}
        />
    )
}
