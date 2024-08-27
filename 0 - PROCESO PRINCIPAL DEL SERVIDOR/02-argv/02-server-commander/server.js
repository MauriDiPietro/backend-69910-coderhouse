import express from 'express';
import { program } from 'commander';

const app = express();

program
    .option('-p <port>', 'puerto del servidor', 8080)
    // .option('-port <port>', 'puerto del servidor', 8080)
    .option('-m <mode>', 'ambiente de servidor', 'dev')

program.parse()

console.log(program.opts());
console.log(program.args);


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = program.opts().p
// const PORT = program.opts().Port
const mode = program.opts().m

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT}`);
    console.log(`mode: ${mode}`);
});

