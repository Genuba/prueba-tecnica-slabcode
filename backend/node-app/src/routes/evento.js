const { Router } = require('express');
const con = require('./../conexion');
const router = Router();


validarHorarioFechaEventoDisponible = (fecha, horaInicio, horaFin) => {
    return new Promise((resolve, reject) => {
        try {
            let sql = `select fecha,hora_inicio,hora_fin from eventos 
                    where fecha = '${fecha}' 
                    and ((hora_inicio < '${horaInicio}' and hora_fin > '${horaInicio}')
                    or (hora_inicio < '${horaFin}' and hora_fin > '${horaFin}')
                    or (hora_inicio >= '${horaInicio}' and hora_fin <= '${horaFin}'))`
            con.query(sql, function (error, results, fields) {
                if (error) reject(error)
                resolve(results[0])
            });
        } catch (e) {
            reject(error);
        }
    })
}

router.post('/', async (req, res) => {
    try {
        let evento = await req.body;
        validarHorarioFechaEventoDisponible(evento.fecha, evento.horaInicio, evento.horaFin).then(fechaHorarioOcupado => {
            var objRes = {}
            if (fechaHorarioOcupado) {
                objRes = {
                    exitoso: false,
                    message: "horario fecha del evento no disponible",
                    fechaHorarioOcupado
                }
                res.json(objRes)
            } else {
                let sql = `INSERT INTO eventos (nombre, descripcion, fecha, hora_inicio, hora_fin, colores_id_colores, lugares_id_lugares) VALUES ('${evento.nombre}', '${evento.descripcion}', '${evento.fecha}', ${evento.horaInicio}, ${evento.horaFin}, ${evento.idColor}, ${evento.idLugar});`;
                con.query(sql, function (error, results, fields) {
                    if (error) {
                        res.status(500).send(error);
                        return
                    }
                    objRes = {
                        exitoso: true,
                        message: "Evento guardado " + results.insertId
                    }
                    res.json(objRes)
                })
            }

        }).catch(error => {
            res.status(500).send(error);
        })
    } catch (e) {
        res.status(500).send(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        let idEvento = req.params.id;
        let sql = `SELECT * FROM eventos WHERE id_eventos = ${idEvento}`;
        con.query(sql, function (error, results, fields) {
            if (error) {
                res.status(500).send(error);
                return
            }
            res.json(results)
        });
    } catch (e) {
        res.status(500).send(error);
    }
})

router.get('/', async (req, res) => {
    try {
        let sql = `SELECT * FROM eventos`
        con.query(sql, function (error, results, fields) {
            if (error) {
                res.status(500).send(error);
                return
            }
            res.json(results);
        });
    } catch (e) {
        res.status(500).send(error);
    }
})

router.put('/:id', async (req, res) => {
    try {
        let idEvento = req.params.id;
        let evento = await req.body;

        validarHorarioFechaEventoDisponible(evento.fecha, evento.horaInicio, evento.horaFin).then(fechaHorarioOcupado => {
            var objRes = {}
            if (fechaHorarioOcupado) {
                objRes = {
                    exitoso: false,
                    message: "horario fecha del evento no disponible",
                    fechaHorarioOcupado
                }
                res.json(objRes)
            } else {
                let sql = `UPDATE eventos SET nombre = '${evento.nombre}', descripcion = '${evento.descripcion}', fecha = '${evento.fecha}', hora_inicio = ${evento.horaInicio}, hora_fin = '${evento.horaFin}', colores_id_colores = ${evento.idColor}, lugares_id_lugares = ${evento.idLugar} WHERE id_eventos = ${idEvento}`;
                con.query(sql, function (error, results, fields) {
                    if (error) {
                        res.status(500).send(error);
                        return
                    }
                    objRes = {
                        exitoso: true,
                        message: "Evento " + idEvento + " Actualizado"
                    }
                    res.json(objRes)
                });
            }
        }).catch(error => {
            res.status(500).send(error);
        })
    } catch (e) {
        res.status(500).send(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        var objRes = {}
        let idEvento = req.params.id;
        let sql = `DELETE FROM eventos WHERE id_eventos = ${idEvento}`;
        con.query(sql, function (error, results, fields) {
            if (error) {
                res.status(500).send(error);
                return
            }
            objRes = {
                exitoso: true,
                message: "Evento " + idEvento + " Eliminado"
            }
            res.json(objRes)
        });
    } catch (e) {
        res.status(500).send(error);
    }
})

module.exports = router;