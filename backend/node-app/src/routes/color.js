const { Router } = require('express');
const con = require('./../conexion');
const router = Router();

router.get('/:id', async (req, res) => {
    let idColor = req.params.id;
    let sql = `SELECT * FROM colores WHERE id_colores = ${idColor}`;
    con.query(sql, function (error, results, fields) {
        if (error){
            res.status(500).send(error);
            return
        } 
        res.json(results)
    })
})

router.get('/', async (req, res) => {
    let sql = `SELECT * FROM colores`
    con.query(sql, function (error, results, fields) {
        if (error){
            res.status(500).send(error);
            return
        } 
        res.json(results)
    });
})

module.exports = router;