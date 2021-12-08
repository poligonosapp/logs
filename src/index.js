// https://github.com/fluent/fluent-logger-forward-node

const FluentServer = require("@fluent-org/logger").FluentServer;

export const fluentLogServer = new FluentServer({ listenOptions: { port: 24224 }});

try{

    if(fluentLogServer != null){

        // Top-level 'await' expressions are 
        // only allowed when the 'module' option 
        // is set to 'es2022', 'esnext', 'system', or 'nodenext', and the 'target' option 
        // is set to 'es2017' or higher.ts(1378)
        // await 
        fluentLogServer.listen();

    }

}catch(err){



}finally{



}
