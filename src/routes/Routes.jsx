// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    }
])