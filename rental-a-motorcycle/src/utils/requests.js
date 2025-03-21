const request = async (method, url, data, options = {}) => {
    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        if (data instanceof FormData) {
            options.body = data;
        } else {
            options = {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                body: JSON.stringify(data),
            };
        }
    }

    try{
        const response = await fetch(url, options);
        const responseContentType = response.headers.get('Content-Type');
        if (!responseContentType) {
            return;
        }
        
        const result = await response.json();
        
        if(! response.ok){
            throw new Error(result.error);
        }
    
        return result;
    }catch(err){
        console.error("Fetch error:", err.message); 
        throw err.message;
    }


};

export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    patch: request.bind(null, 'PATCH'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
}
