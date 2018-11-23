import { writeFile } from 'fs';
import { argv } from 'yargs';
import * as dotenv from 'dotenv';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
//require('dotenv').config();
dotenv.config();
// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === 'prod';

const targetPath = `./src/environments/environment.${environment}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  FireBase_API_KEY: "${process.env.FireBase_API_KEY}",
  FireBase_Auth_Domain: "${process.env.FireBase_Auth_Domain}" 
};
`
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});