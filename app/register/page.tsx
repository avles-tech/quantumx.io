'use client'
import React, { useState } from 'react'

const page = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e : React.FormEvent) {
    e.preventDefault()
    const data = {
      name,
      password
    }
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        window.location.href = '/login'
      }
    }
    )
  }

  
  return (
    <>
     <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
    
    </>
   
  )
}

export default page