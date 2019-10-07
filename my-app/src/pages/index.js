import React from 'react'
import {Link } from 'react-router-dom'
const Index = () => (
    <ul>
        <li>
            <Link to='/'>首页</Link>
        </li>
        <li>
            <Link to='/list'>列表</Link>
        </li>
        <li>
            <Link to='/nesting'>嵌套列表</Link>
        </li>
    </ul>
)
export default Index