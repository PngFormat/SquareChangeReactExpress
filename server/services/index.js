import {Color} from "../models.js";

class ColorsService {
    async getAllColors(req, res){
        const colors = await Color.findAll();
        res.status(200).json(colors)
    }
    async createNewColor(req, res){
        const {name, color} = req.body;

        const newColor = await Color.create({
            name,
            color
        });
        res.status(201).json(newColor);
    }

    async deleteColor(req,res){
        const {id} = req.params;
        const deletedColor = await Color.destroy({
            where: {
                id
            }
        })
        res.status(200).json(id)
    }

    async updateColor(req,res){
        const {id} = req.params;
        const {name,color} = req.body;
        const updateColor = await Color.update({
            name: name,
            color: color
        }, {where: {id: id}});
        res.status(200).json(updateColor.id);
    }
}

export default new ColorsService();