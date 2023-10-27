import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';



    //Recuperar o arquivo json.
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/base-user-api/db.json', 'utf-8');

    export async function GET(request,{params}) {
        return NextResponse.json(JSON.parse(file));
    }

    export async function POST(request, response) {


        //PARSEANDO O ARQUIVO PARA O JSAON NATIVO
        const body = await JSON.parse(file);

        //console.log(body)body.usuarios    body.usuarios 


        //OBJETO USUARIO DO REQUEST
        const usuario = request.json();

        for (let x = 0; x < body.usuarios.length; x++) {
            const u = array[x];
         //   console.log("USUÁRIO DA BASE : ", u.name);
         if(u.email == usuario.email && u.senha == usuario.senha) {
            return NextResponse.json({"status": "ok"});
         }


        }


        //console.log(request.json());
        return NextResponse.json({"status": "error"});



    }