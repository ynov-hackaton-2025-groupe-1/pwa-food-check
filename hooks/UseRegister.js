import { useState, useEffect } from 'react';

export default function UseRegister() {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(password !== confirmPassword);
  }, [password, confirmPassword]);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          fullname,
          password,
        }),
      });

      const data = await response.json();
      // console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return {
    email,
    setEmail,
    fullname,
    setFullname,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isButtonDisabled,
    handleRegister,
  };
}