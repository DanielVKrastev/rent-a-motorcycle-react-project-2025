import { it, expect } from 'vitest'
import ReactDom from 'react-dom/client'
import { render, screen } from '@testing-library/react'
import Comments from './Comments';

const comments = [{
    "_id": "67e7208aa729593dc320b3a6",
    "commentText": "test suzuki the best man",
    "email": "danielvalentinov01@gmail.com",
    "rating": 4,
    "date": "2025-03-28T22:19:54.534Z",
    "owner": "67db3fc323c80665e3e86b4e",
    "motorcycleId": "67ddc9dfa663cac7fddd2a5c",
    "__v": 0
},
{
    "_id": "67e5e131c433bde94db4e2dc",
    "commentText": "test admin",
    "email": "admin@abv.bg",
    "rating": 5,
    "date": "2025-03-27T23:37:21.066Z",
    "owner": "67d93ba5ba9801bce10714fc",
    "motorcycleId": "67ddc9dfa663cac7fddd2a5c",
    "__v": 0
}];

it('Renders comments correctly', () => {
    render(<Comments comments={comments} />);

    // Проверяваме дали първият коментар е в документа
    expect(screen.getByText('test suzuki the best man')).toBeInTheDocument();
    expect(screen.getByText('danielvalentinov01@gmail.com')).toBeInTheDocument();

    // Проверяваме дали вторият коментар е в документа
    expect(screen.getByText('test admin')).toBeInTheDocument();
    expect(screen.getByText('admin@abv.bg')).toBeInTheDocument();
});