import { create } from 'apisauce'

const api = create({baseURL:'https://api.openweathermap.org'})
const climateKey = '2ab5fcd17e73f1a18373a0298b736b4f';

api.addRequestTransform(request => {
    // request.headers['X-Request-Transform'] = 'Changing Stuff!'
    // request.params['page'] = 42
    // delete request.params.secure
    // request.url = request.url.replace(/\/v1\//, '/v2/')
    // if (request.data.password && request.data.password === 'password') {
    //   request.data.username = `${request.data.username} is secure!`
    // }
    console.log("Interceptor",request.url )
  })
  
export  {api, climateKey}