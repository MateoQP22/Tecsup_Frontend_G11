import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from '../hooks/useUser';

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user === false) {
      navigate('/login');
    }
  }, [user]);

  return (
    <h1>HomePage</h1>
  )
}

export default HomePage