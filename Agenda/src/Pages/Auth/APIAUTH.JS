export  const verificar = async  (token,id) => {
    const req =  await fetch (`http://localhost:3050/user/${id}`, {
        headers: {"Authorization": "Bearer " + token}
    }).then (resolve => resolve.json ())

    return req
    
}