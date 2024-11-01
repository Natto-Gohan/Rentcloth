"use client"

import { useState } from 'react';


export default function AuthForm()  {
    const [role, setRole] = useState('customer');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [size,setSize] = useState('');
    const [confirmPassword, setconfirmPassword] = useState([""]);
    const [facebook,setFacebook] = useState("");
    const [instagram,setInstagram] = useState("");
    const [line,setLine] = useState("");
    const [error,setError] = useState('');
    const [success,setSucces] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();
        setSucces("")
        if(password!=confirmPassword){
            setError("Password does not match your confirm password")
            return 
        }
        if(role==="customer"&& (!name || !email || !password || !confirmPassword || !size)){
            setError("Please Complete All input")
            return
        }
        if(role==="shop"&& (!name || !email || !password || !confirmPassword)&&(!facebook&&!instagram&&!line)){
            setError("Please Complete All input")
            return
        }
        
        

        try{
            if(role==="customer"){
            const rescheckmail = await fetch("http://localhost:3000/api/client/checkmail",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            })
            const { user } = await rescheckmail.json();
            if(user){
                setError("User Already exits!")
                return;
            }

            const res = await fetch("http://localhost:3000/api/register/client",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,email,password,size
                })
            })
            if(res.ok){
                const form = e.target;
                form.reset();
                setError("")
                setSucces("สมัครสมาชิกสำเร็จเรียบร้อย")
            }else{
                console.log("User registration Failed")
            }

            }else{
                
                const rescheckmail = await fetch("http://localhost:3000/api/shop/checkmail",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email
                    })
                })
                const { user } = await rescheckmail.json();
                if(user){
                    setError("User Already exits!")
                    return;
                }

                const res = await fetch("http://localhost:3000/api/shop/register",{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,email,password,facebook,instagram,line
                    })
                })
                if(res.ok){
                    const form = e.target;
                    form.reset();
                    setError("")
                    setSucces("สมัครสมาชิกสำเร็จเรียบร้อย")
                }else{
                    console.log("User registration Failed")
                }
            }
        }catch(error){
            console.log("error")
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
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required={role === 'customer'}
                className="block w-full mb-2 p-1 border rounded"
            />
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
            <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setconfirmPassword(e.target.value)}
                required
                className="block w-full mb-4 p-1 border rounded"
            />
            {role === 'shop' && (
                <div>
                <input 
                className="block w-full mb-4 p-1 border rounded"
                type="text" 
                placeholder="Facebook URL" 
                onChange={(e) => setFacebook(e.target.value)} 
                />
                <input
                  className="block w-full mb-4 p-1 border rounded"
                  type="text"
                  placeholder="Instagram URL"
                  onChange={(e) => setInstagram(e.target.value)}
                  />
                <input
                  className="block w-full mb-4 p-1 border rounded"
                  type="text"
                  placeholder="Line URL"
                  onChange={(e) => setLine(e.target.value)}
                  />  
                </div>        
            )}
            {role ==='customer' && (
                <input
                type="text"
                placeholder="size"
                onChange={(e) => setSize(e.target.value)}
                required
                className="block w-full mb-2 p-1 border rounded"
            />
            )}
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
