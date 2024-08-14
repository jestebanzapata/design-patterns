export class Server {

    private id: string;

    private url: string;

    private port: string;

    private timeout: number;

    private debug: boolean;


    constructor(id: string, url: string, port: string, timeout: number, debug: boolean){
        this.id = id;
        this.url = url;
        this.port = port;
        this.timeout = timeout;
        this.debug = debug;
    }    


    start() {
        console.log(`Server started: ${this.url}:${this.port}, timeout: ${this.timeout}, debug: ${this.debug}`);
    }

    

}
