"use client"

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AuthForm()  {
    const [role, setRole] = useState('customer');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    const [success,setSucces] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!email || !password){
            setError("Please Complete All input")
            return
        }
        
        try{
            const res = await signIn("credentials",{
                email,password,role,redirect:false
            })

            if(res.error){
                setError("Invalid credentials");
                return;
            }
            router.replace("client");

        }catch(error){
            console.log(error)
        }
    };

    return (

        <form onSubmit={handleSubmit} className="p-4 border rounded-md">
            <h2 className="text-xl mb-4">{role === 'customer' ? 'Register as Customer' : 'Register as Shop'}</h2>
            <label>
                <input
                    type="radio"
                    value="customer"
                    checked={role === 'customer'}
                    onChange={() => setRole('customer')}
                    className='mx-2'
                />
                Customer
            </label>
            <label>
                <input
                    type="radio"
                    value="shop"
                    checked={role === 'shop'}
                    onChange={() => setRole('shop')}
                    className='mx-2'
                />
                Shop
            </label>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full mb-2 p-1 border rounded"
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full mb-4 p-1 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit</button>
            {error && (
            <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 round-md mt-2'>
                {error}
            </div>
            )}
            {success && (
            <div className='bg-green-500 w-fit text-sm text-white py-1 px-3 round-md mt-2'>
                {success}
            </div>
            )}
        </form>
    );
};
