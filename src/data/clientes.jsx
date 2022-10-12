
export const obtenerClientes = async() => {
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado;
}

export const obtenerCliente = async(id) => {
    const respuesta = await fetch(`${ import.meta.env.VITE_API_URL }/${ id }`)
    const resultado = await respuesta.json()
    return resultado;
}

export const agregarCliente = async( datos ) => {
    
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos), //Son los datos que vamos a mandar al servidor 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}

export const actualizarCliente = async( id, datos ) => {
    try {
        const respuesta = await fetch(`${ import.meta.env.VITE_API_URL }/${ id }`, {
            method: 'PUT',
            body: JSON.stringify(datos), //Son los datos que vamos a mandar al servidor 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}

export const eliminarCliente = async(id) => {
    try {
        const respuesta = await fetch(`${ import.meta.env.VITE_API_URL }/${ id }`, {
            method: 'DELETE',
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }
}