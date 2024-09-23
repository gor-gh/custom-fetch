enum HTTPMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    OPTIONS = 'OPTIONS',
    HEAD = 'HEAD',
    PATCH = 'PATCH',
}

interface IFetchOptions {
    method: HTTPMethods;
    body?: string | FormData | Blob | BufferSource | URLSearchParams;
    signal: AbortSignal;
}

interface IHTTPResponse {
    status: number;
    json: () => Promise<object>;
    ok: boolean;
}


function customFetch(url: string | URL, options?: IFetchOptions): Promise<IHTTPResponse> {
    return new Promise((res, rej) => {
        const {method, body, signal} = options || {};

        const xhr = new XMLHttpRequest();

        xhr.open(method || HTTPMethods.GET, url);

        xhr.onload = () => {
            const response: IHTTPResponse = {
                ok: true,
                status: xhr.status,
                json: () => new Promise((resolve, reject) => {
                    try {
                        resolve(JSON.parse(xhr.response));
                    } catch(e) {
                        reject(e);
                    }
                }),
            };

            res(response);
        };

        xhr.onerror = () => {
            rej();
        }

        xhr.send(body);
    })
}

export default customFetch;