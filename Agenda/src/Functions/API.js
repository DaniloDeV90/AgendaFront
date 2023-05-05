export default  async function (urlComplement, metod,obj) {
    const url = "https://agenda-psbu.onrender.com"

    if (metod === "GET") {

    
    const req = await fetch (`${url}/${urlComplement}`).then (resolve => resolve.json ())

    return req
    }

    if (metod === "POST" || metod === "PUT" || metod === "DELETE" ) {
        const req = await fetch (`${url}/${urlComplement}`, {
            method: metod,
            body: JSON.stringify (obj),
            headers: {"Content-Type": "application/json"}

        } ).then (resolve => resolve.json ())

        return req
    }
}





