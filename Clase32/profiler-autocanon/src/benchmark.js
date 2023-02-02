import autocannon from 'autocannon';
import {PassThrough} from "stream";

function run(url) {
  const buf = []
  const outputStream = new PassThrough()

  //formato
  const inst = autocannon({
    url,
    connections: 100,
    duration: 20
  })//en 20ms, 100 peticiones.

  //va a estar haciendo simulaciones en tiempo real
  autocannon.track(inst, { outputStream })

  //crea una grafica
  outputStream.on('data', data => buf.push(data))
  inst.on('done', () => {
    process.stdout.write(Buffer.concat(buf))
  })
}

console.log('Running all benchmarks in parallel ...')

run('http://localhost:8080/auth-bloq?username=maria&password=1234')
run('http://localhost:8080/auth-nobloq?username=maria&password=1234')