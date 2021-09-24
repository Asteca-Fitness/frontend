const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getClients(req, res);
        }

        case 'POST': {
            return addClients(req, res);
        }

        case 'PUT': {
            return updateClients(req, res);
        }

        case 'DELETE': {
            return deleteClients(req, res);
        }
    }
}


// Buscar todos os clientes
async function getClients(req, res) {
    try {
        let { db } = await connectToDatabase();
        let list = await db
            .collection('clients')
            .find({})
            .sort({ published: -1 })
            .toArray();
        return res.json({
            message: list,
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Adicionar novo cliente
async function addClients(req, res) {
    try {
        let { db } = await connectToDatabase();
        await db.collection('clients').insertOne(JSON.parse(req.body));
        return res.json({
            message: 'Adicionado com sucesso!',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Editar dados cliente
async function updateClients(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('clients').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        return res.json({
            message: 'Alterado com sucesso!',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Excluir cliente
async function deleteClients(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('clients').deleteOne({
            _id: new ObjectId(req.body),
        });

        return res.json({
            message: 'Deletado com sucesso!',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}