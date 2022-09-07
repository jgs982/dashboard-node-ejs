const express = require('express')
const router = express.Router() 

const {
    vistaPrincipal,
    vistaNotifications,
    vistaTables, 
    vistaIcons,
    vistaMap,
    vistaRtl,
    vistaTypography,
    vistaUpgrade,
    vistaUser
} = require('../controllers/PageController')




router.get('/', vistaPrincipal)
router.get('/tables', vistaTables)
router.get('/notifications', vistaNotifications)
router.get('/icons', vistaIcons)
router.get('/map', vistaMap)
router.get('/rtl', vistaRtl)
router.get('/typography', vistaTypography)
router.get('/upgrade', vistaUpgrade)
router.get('/user', vistaUser)


module.exports = {
    routes: router 
}
