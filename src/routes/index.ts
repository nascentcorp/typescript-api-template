import * as express from "express";

export const register = ( app: express.Application ) => {
    // define a route handler for the default home page
    app.get( "/", ( req: any, res ) => {
        const user = {
          isAuthenticated: true,
          name: "foo"
        };

        res.render( "index", { user } );
    } );

    // define a secure route handler for the guitars page
    app.get( "/page-1", ( req: any, res ) => {
        const user = {
          isAuthenticated: true,
          name: "foo"
        };

        res.render( "page-1", { user } );
    } );
};
