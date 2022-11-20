import React, {useEffect, useState,FC} from 'react';
import axios from "axios";
import {IColor} from "../App";


interface AddColorProps {
    setColors: any;
}

const AddColor: React.FC<AddColorProps> = ({setColors})=> {
    const [color,setColor] = useState<string>('');
    const [name,setName] = useState<string>('')

    const handleAddColor = async () => {
        if(color && name){
            const res = await axios.post('http://localhost:5001/colors', {name, color})
            setColors((prevState: IColor[]) => [...prevState, {
                name: name,
                color: color,
                id: Date.now()
            }]);
            return res;
        }
    }

    return (
        <div>
            <label className='block bg-gray-200 w-100 text-4xl font-bold mb-2 pt-5 ml-4'> choose color:
                <input
                    value={color}
                    type='color'
                    onChange={(e) => setColor(e.target.value)}
                />
            </label>
            <input
                className='shadow appearance-none border border-red-500 rounded w-100 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ml-4'
                value={name}
                type='text'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
            />
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4'
                onClick={handleAddColor}
            >
                add color
            </button>
        </div>
    );
};

export default React.memo(AddColor);