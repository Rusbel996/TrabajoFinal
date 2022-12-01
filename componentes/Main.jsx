const ListaUsuario =[]

const usuario = {
    usuar : "",
    apellido:"",
    correo:"",
    contra : "",
    historial: {},
    comprar:{},
    apartamento:"",
    ciudad:"",
    pais:"",
    postal:"",
    celular:""
}

const CrearUsuario = (nombre,apellido,correo,contra) =>{
    usuario.usuar = nombre
    usuario.apellido= apellido
    usuario.correo=correo
    usuario.contra=contra
    ListaUsuario.push(usuario)
}

const Main = () =>{

    return <div>





    </div>

}

export default Main