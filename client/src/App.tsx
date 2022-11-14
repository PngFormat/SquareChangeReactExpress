import React, {useEffect, useState} from 'react';

interface IColor  {
    name:string;
    id:number;
    color:string;
}

const App = () => {
    const [colors,setColors] = useState<IColor[]>([]);
    const [str,setStr] = useState<string>('black');
    useEffect(() =>{
        fetch('http://localhost:5001/')
            .then(response => response.json())
            .then(response => setColors(response))
    },[])
    return (
        <div>
            <div style={{width:300,height:90,backgroundColor:str}}></div>
            <div>
                <ol>
                    {colors.map((item ) => <li onClick={() => setStr(item.color)}>
                        {item.name}
                    </li>)}
                </ol>
            </div>
        </div>
    );
};

export default App;