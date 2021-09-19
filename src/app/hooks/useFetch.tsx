


const useFetch = (method: string) => {

    const postFetch = async (url: string, payload: Record<string, any>) => {
        const res = await fetch(url, {
            method: method, 
            headers: {
              'Content-Type': 'application/json',
            },
            
            body: JSON.stringify(payload)

        })

        if (!res.ok) {
            console.log(res)
            throw Error("could not fetch")
        } else {
            const resData = await res.json()
            return resData
        }


    }

    const getFetch = async (url: string, token: string) => {
    
        const res = await fetch(url, {
            method: method, 
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },

        })

        if (!res.ok) {
            throw Error("could not fetch")
        } else {
            const resData = await res.json()
            return resData
        }
    } 

    return { getFetch, postFetch}
}


export default useFetch