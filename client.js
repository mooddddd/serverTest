const net = require('net')

const config = {port:3000, host:'127.0.0.1'}
const soket = net.connect(config)