// get, post, patch, delete 
// Para crear funciones y hacer las GPPD mas sencillas

const { options } = require("../../../Back-end/src/routes/user-routes");


//Funcion que recibe los datos de la url y 
const customFetch = async (url, options) => {
  //
  const req = await fetch(url, options)
  //respuesta de la peticion json
  return req.json()
}

//GET
export const httpGet = async (url) => {
  return customFetch(url);
}

//POST
export const httpPost = async (url, options) => {
  return customFetch(url, {
    method: "POST",
    ...options,
  });
}

//PATCH
export const httpPatch = async(url, options) => {
  return customFetch(url, {
    method: 'PATCH',
    ...options,
  })
}

//DELETE
export const httpDelete = async(url, options) => {
  return customFetch(url, {
    method: 'DELETE',
    ...options
  })
}