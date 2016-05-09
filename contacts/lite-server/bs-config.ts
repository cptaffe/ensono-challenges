/// <reference path="./connect-history-api-fallback.d.ts"/>
import fallback = require('connect-history-api-fallback');

let config = {
    "files" : "./src/**/*.{js, html, css}",
    "server" : {
        "baseDir" : "." ,
        "middleware" : {
            1: fallback({index: '/index.xhtml'})
        }
    }
}

export = config
