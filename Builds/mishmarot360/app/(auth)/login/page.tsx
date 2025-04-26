'use client';
import { useState } from 'react';
import { useAuth } from '@/app/lib/authContext';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await login(email, password);
            //redirect to home
            router.push('/');
        } catch (error) {
            setError('Invalid Credentials,Failed To Login, Please Try Again');
        }
    }
  return (
      <div>
          <form onSubmit={handleSubmit} className='max-xmd mx-auto p-4 flex flex-col gap-4'>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              
          </form>
    </div>
  )
}

export default page;