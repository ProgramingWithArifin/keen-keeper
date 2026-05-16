'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center px-6 max-w-md">
                <h1 className="text-6xl font-bold text-red-600 mb-4">Something went wrong!</h1>
                <p className="text-gray-600 mb-8">
                    An unexpected error occurred. Please try again.
                </p>
                <button 
                    onClick={() => reset()} 
                    className="btn btn-primary text-lg px-8 py-3 rounded-full"
                >
                    Try Again
                </button>
            </div>
        </div>
    )
}