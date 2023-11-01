export class Server{
    constructor(){
        console.log('test')
    }
    public async post(endpoint: string, data: {}){
        console.log(
            endpoint, data
        )
    }
}