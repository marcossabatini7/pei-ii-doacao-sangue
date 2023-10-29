import { useTransition } from 'react'

const baseURL = process.env.BASE_URL ?? 'http://10.3.152.15:8080/api'

function useFetch({ path, body, cb, ecb, method = 'get' }) {
    const [isPending, startTransition] = useTransition()

    function call() {
        if (!path) {
            return
        }

        const uri = `${baseURL}${path}`
        let sBody = ''
        try {
            if (body) {
                sBody = JSON.stringify(body)
            }
        } catch (error) {
            ecb?.('Formulário inválido')
        }

        startTransition(() => {
            fetch(uri, {
                method,
                body: sBody,
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(async (r) => {
                    const rJson = await r.json()

                    if (r.ok) {
                        cb?.(rJson)
                    }
                    ecb?.(rJson?.message)
                })
                .catch((e) => {
                    ecb?.(e.message ?? 'Ocorreu um erro inesperado')
                })
        })
    }

    return {
        isPending,
        call,
    }
}

export default useFetch
