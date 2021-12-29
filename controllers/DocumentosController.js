import models from '../models';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import token from '../services/token';



export default {
    add: async(req, res, next) => {
        try {
            req.body.documento = req.file.filename;
            const reg = await models.Documentos.create(req.body);
            res.status(200).json(reg);
            console.log(req.file);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    descargame: async(req, res, next) => {
        res.download(
            __dirname + "/documentos/" + req.params.id,
            req.params.id,
            function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("listo");
                }
            }
        );
    },

    query: async(req, res, next) => {
        try {
            const reg = await models.Usuario.findOne({ _id: req.query._id });
            if (!reg) {
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    list: async(req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Documentos.find({ $or: [{ "repositorio": { "$eq": valor } }] })
                .sort({ 'createdAt': -1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    listDocumentos: async(req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Documentos.find({ $or: [{ 'titulo': new RegExp(valor, 'i') }, { 'descripcion': new RegExp(valor, 'i') }] }, { createdAt: 0 })
                .sort({ 'createdAt': -1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    listDocumentosPrimerForo: async(req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Documentos.find({ $or: [{ 'titulo': new RegExp(valor, 'i') }, { 'descripcion': new RegExp(valor, 'i') }], "repositorio": { "$eq": "Primer Foro" } })
                .sort({ 'createdAt': -1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    listDocumentosSegundoForo: async(req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Documentos.find({ $or: [{ 'titulo': new RegExp(valor, 'i') }, { 'descripcion': new RegExp(valor, 'i') }], "repositorio": { "$eq": "Segundo Foro" } })
                .sort({ 'createdAt': -1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },

    listDocumentosBlindaje: async(req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Documentos.find({ $or: [{ 'titulo': new RegExp(valor, 'i') }, { 'descripcion': new RegExp(valor, 'i') }], "repositorio": { "$eq": "Blindaje Electoral" } })
                .sort({ 'createdAt': -1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    update: async(req, res, next) => {
        try {
            const reg = await models.Documentos.findByIdAndUpdate({ _id: req.body._id }, { titulo: req.body.titulo, descripcion: req.body.descripcion, repositorio: req.body.repositorio });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async(req, res, next) => {
        try {
            const reg = await models.Usuario.findOneAndDelete({ _id: req.body._id });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    activate: async(req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    deactivate: async(req, res, next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 0 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}