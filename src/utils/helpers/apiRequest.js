import axios from 'axios'

var mainInstance = axios.create({
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
})

const makeRequest =
	(instance) =>
		(method, url, token, ...params) => {
			if (!token) {
				delete axios.defaults.headers.common['Authorization']
				delete mainInstance.defaults.headers.common['Authorization']
			}
			// Add a response interceptor
			instance.interceptors.response.use(
				(response) => {
					return Promise.resolve(response)
				},
				(error) => {
					return Promise.reject(error)
				}
			)
			return instance[method](url, ...params)
		}

const API_REQUEST =
	(method, url, token) =>
		(...params) => {
			return makeRequest(mainInstance)(
				method,
				url,
				token,
				...params
			)
		}
export default API_REQUEST