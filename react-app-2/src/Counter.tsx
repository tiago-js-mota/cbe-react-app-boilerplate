import {useState} from 'react'
import 'antd/dist/antd.css';
import {Button} from 'antd';

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>Update the count and edit src/App.tsx, state is preserved</h3>
            <Button type="primary" onClick={() => setCount((c) => c + 1)}>Count - {count}</Button>
        </div>
    )
}
