import path from 'path'
import full from './full'
import hash from './hash'

const HOST = "localhost";
const PORT = 6001;
const ROOT_DIR = path.resolve(__dirname, "..", "..", "dist");


// full(ROOT_DIR,HOST,PORT);
hash(ROOT_DIR,HOST,PORT);