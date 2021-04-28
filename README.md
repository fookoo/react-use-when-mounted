# React useWhenMounted

Hook provide callback function that will be invoked only if component is mounted

## Getting started

```
yarn add react-use-when-mounted --save
```

## Usage

```jsx
import React, { useState, useEffect } from 'react'
import { useWhenMounted } from 'react-use-when-mounted'

export const TestExample: React.FC<{}> = () => {
    const whenMounted = useWhenMounted()
    const [data, setData] = useState()
    
    useEffect(() => {
        fetch('http://example.com/movies.json')
            .then(response => response.json())
            .then(data => {
                whenMounted(() => {
                    setData(data)
                })
            })
        },
        [whenMounted]
    )
    
    return (<div>
        {data}
    </div>)
}
```
