import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';

const UpdateColor: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');

  const handleUpdateColor = async () => {
    const res = await axios.put(`http://localhost:5001/colors/${id}`, {
      name: name,
      color: color
    });
    console.log(res);

    return res;
  };
  // useEffect(()=> {
  //     console.log('color:',color )
  //     console.log('name:',name)
  // },[color,name])
  return (
    <div>
      <label>
        color:
        <input value={color} type="color" onChange={(e) => setColor(e.target.value)} />
      </label>
      <input
        className="shadow appearance-none border border-red-500 rounded w-100 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        value={name}
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="shadow appearance-none border border-red-500 rounded w-100 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        value={id}
        placeholder="input id"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleUpdateColor}>update</button>
    </div>
  );
};

export default UpdateColor;
