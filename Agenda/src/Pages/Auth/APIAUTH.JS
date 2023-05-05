export  const verificar = async  (token) => {
    const req =  await fetch ("http://localhost:3050/user/1", {
        headers: {"Authorization": "Bearer " + token}
    }).then (resolve => resolve.json ())

    return req
    
}