import cluster from "cluster";
import { cpus } from "os";
import express from "express";

// console.log(cpus().length);

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`cantidad de nucleos: ${numCPUs}`);
  console.log(`PID proceso padre: ${process.pid}`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code) => {
    console.log(
      `proceso hijo pid: ${worker.process.pid} caído con codigo ${code}`
    );
    cluster.fork();
  });

  // cluster.on('disconnect', () => cluster.fork())
} else {
  const app = express();

  const PORT = 8081;

  app.get("/operacion-simple", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += i;
    }
    res.json({
      sum,
      pid: process.pid,
      isWorker: cluster.isWorker,
    });
  });

  app.get("/operacion-compleja", (req, res) => {
    let sum = 0;
    for (let i = 0; i < 500000; i++) {
      sum += i;
    }
    res.json({
      sum,
      pid: process.pid,
      isWorker: cluster.isWorker,
    });
  });

  app.get("/dead", (req, res) => {
    res.json({ msg: "ok" });
    console.log(`pid caido: ${process.pid}`);
    process.exit(0);
  });

  app.listen(PORT, () =>
    console.log(
      `Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`
    )
  );
}
