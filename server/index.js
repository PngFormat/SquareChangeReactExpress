import express from 'express';
import cors from 'cors';

const app = express();

const arr = [{
    name:'skin',
    id:1,
    color: '#ffdfc4',
},{
    name:'orange',
    id:2,
    color:'#fcad03'
},{
    name:'green',
    id:3,
    color: '#20fc03'
}]

app.use(express.json())
app.use(cors())

//get post put delete
app.get('/',(request,response) => {
    response.status(200).json(arr)
})
// app.post()
// app.put()
// app.delete('C/:WORLD OF TANKS')


app.listen(5001,() => {
    console.log('Server started on port 5000')
})