import React, {useState} from 'react'

const UseStateExample = () => {

    const [count, setCount] = useState(0)

    return (
        <>
           <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click
            </button>
        </>
    )
}

export default UseStateExample