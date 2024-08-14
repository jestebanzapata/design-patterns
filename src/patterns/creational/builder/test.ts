import { HttpServerBuilder } from "./HttpServerBuilder";


const httpServer = new HttpServerBuilder();

const servers = httpServer
.setId("TestServer")
.setPorts(["3000", "4000"])
.setUrl("localhost")
.setTimeout(5000)
.setDebug(true)
.build();


servers.forEach(server => {
    server.start();
})

