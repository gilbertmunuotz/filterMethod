import { useState } from "react";

const MyData = () => {
    const [arrays, setarrays] = useState(
        [
            { id: 1, name: 'Doe', age: 25 },
            { id: 2, name: 'Jane', age: 30 },
            { id: 3, name: 'Doe', age: 22 },
        ]
    )

    const newArrays = arrays.filter((array) => array.name === 'Doe'); //Here We Filter The Item Name Inside the above
    // Given array With Value Doe And Returns 
    setarrays(arrays); // Called When updating the state of the component to arrays.

    <button onClick={newArrays} >CLick</button>
}

export default MyData;