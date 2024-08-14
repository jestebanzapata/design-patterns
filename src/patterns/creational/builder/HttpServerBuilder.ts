import { IServerBuilder } from "./IServerBuilder";
import { Server } from "./Server";

export class HttpServerBuilder implements IServerBuilder {
    id: string;
    url: string;
    ports: string[];
    timeout: number;
    debug: boolean;
    setId(id: string): IServerBuilder {
        this.id = id;
        return this;
    }
    setUrl(url: string): IServerBuilder {
        this.url = url;
        return this;
    }
    setPorts(ports: string[]): IServerBuilder {
        this.ports = ports;
        return this;
    }
    setTimeout(timeout: number): IServerBuilder {
        this.timeout = timeout;
        return this;
    }
    setDebug(debug: boolean): IServerBuilder {
        this.debug = debug;
        return this;
    }
    build(): Server[] {
        return this.ports.map((port, index) => {
            return new Server(`${this.id}-${index}`, this.url, port, this.timeout, this.debug)
        });
    }

    

}
