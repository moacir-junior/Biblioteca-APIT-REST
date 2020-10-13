const Storage = require('../models/storage')

class StorageController{
    async create(req, resp){
        const storage = await Storage.create(req.body)       
        return resp.status(201).send(storage)
    }

    async read(req, resp){
        const storage = await Storage.findByPk(req.params.storageId)
        return resp.status(200).send(storage)
    }

    async readAll(req, resp){
        const storages = await Storage.findAll({
            order:[['name', 'ASC'],],
        })
        return resp.status(200).send(storages)
    }

    async readByBook(req, resp){
        const {bookId} = req.params

        const storage = await Storage.findByPk(bookId, {
            include: {association: 'books'}
        })

        return resp.status(200).send(storage)
    }

    async update(req, resp){
        const storage = await Storage.findByPk(req.params.storageId)

        if(req.body.name)
            storage.name = req.body.name

        await storage.save()
        return resp.status(201).send(storage)
    }
}

module.exports = new StorageController()