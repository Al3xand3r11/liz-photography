'use client'
import { useState } from "react"
import Dashboard from './components/dashboard'

export default function Page() {

    const [password, setPassword] = useState<string>('')
    const [isValidated, setIsValidated] = useState<boolean>(false)
    const securePassword = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD!

    const handleLogin = () => {
        if (password === securePassword){
            setIsValidated(true)
        }
        else{
            alert('Wrong Password')
        }
    }

    return (
        <div className="bg-[#0e0e0e] h-auto">
        { isValidated ? (
            <Dashboard/>
        ) : (
            <div className="h-screen items-center justify-center flex flex-col">
                <p className="text-white">Password Protected</p>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="bg-transparent border rounded-xl p-2.5 w-48 border-gray-600 text-center text-white"
                />
                <button onClick={handleLogin} className="mt-2 text-white">Login</button>
            </div>
        )}
        </div>
    )
}