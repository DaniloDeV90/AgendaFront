export  const verificar = async  (token,id) => {
    const req =  await fetch (`https://agenda-psbu.onrender.com/user/${id}`, {
        headers: {"Authorization": "Bearer " + token}
    }).then (resolve => resolve.json ())

    return req
    
}