import { Server } from "./Server";

export interface IServerBuilder {

    id: string;

    url: string;

    ports: string[];

    timeout: number;

    debug: boolean;

    setId(id: string): IServerBuilder;
    setUrl(url: string): IServerBuilder;
    setPorts(ports: string[]): IServerBuilder;
    setTimeout(timeout: number): IServerBuilder;
    setDebug(debug: boolean): IServerBuilder;

    build() : Server[]; 

}