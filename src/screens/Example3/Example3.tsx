import React, { useState, useEffect, useRef } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null); 

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      alert('Do you need help?');
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []); 

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Login submitted: ' + formData.username + ', ' + formData.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <div>
          <input
            name="username"
            type="text"
            placeholder="your-email@email.com"
            onChange={handleChange}
            value={formData.username}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
