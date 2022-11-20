import React, {useEffect, useState} from 'react';
import axios from "axios";
import AddColor from "./components/AddColor";
import UpdateColor from "./components/UpdateColor";
import ColorItem from "./components/ColorItem";
import UpdateModal from "./components/UpdateModal";

export interface IColor {
    name:string;
    id:number;
    color:string;
}

const App = () => {
    const [colors,setColors] = useState<IColor[]>([]);
    const [str,setStr] = useState<string>('black');

    useEffect(() =>{
        axios.get('http://localhost:5001/colors')
            .then(res => setColors(res.data))
            .catch(error => console.log(error))
    },[])

    return (
        <div className='text-3xl bg-slate-200 '>
            <AddColor setColors={setColors}/>
            <h1 className='block bg-gray-200 w-100 text-4xl font-bold text-blue-600/0" ml-4 '>block</h1>
            <div className='border border-2 border-green-500 ml-4 ' style={{width:300,height:90,backgroundColor:str}}></div>
            <div >
                {colors.map((item) => <ColorItem key={item.id} item={item} setStr={setStr} colors={colors} setColors={setColors}/>)}
            </div>
        </div>
    );
};

export default App;