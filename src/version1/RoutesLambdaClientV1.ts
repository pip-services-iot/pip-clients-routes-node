let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { ObjectRouteV1 } from './ObjectRouteV1';
import { IRoutesClientV1 } from './IRoutesClientV1';

export class RoutesLambdaClientV1 extends CommandableLambdaClient implements IRoutesClientV1 {       

    constructor(config?: any) {
        super('routes');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void {
        this.callCommand( 
            'get_routes', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getRouteById(correlationId: string, orgId: string, routeId: string,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.callCommand( 
            'get_route_by_id',
            correlationId,
            {
                route_id: routeId
            }, 
            callback
        );        
    }

    public createRoute(correlationId: string, orgId: string, route: ObjectRouteV1,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.callCommand(
            'create_route',
            correlationId,
            {
                route: route
            }, 
            callback
        );
    }

    public setRoute(correlationId: string, orgId: string, route: ObjectRouteV1,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.callCommand(
            'set_route',
            correlationId,
            {
                route: route
            }, 
            callback
        );
    }

    public setRoutes(correlationId: string, orgId: string, routes: ObjectRouteV1[],
        callback?: (err: any) => void): void {
        this.callCommand(
            'set_routes',
            correlationId,
            {
                routes: routes
            }, 
            callback
        );
    }
    
    public updateRoute(correlationId: string, orgId: string, route: ObjectRouteV1,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.callCommand(
            'update_route', 
            correlationId,
            {
                route: route
            }, 
            callback
        );
    }

    public deleteRouteById(correlationId: string, orgId: string, routeId: string,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.callCommand(
            'delete_route_by_id', 
            correlationId,
            {
                route_id: routeId
            }, 
            callback
        );
    }
    
    public deleteRoutes(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any) => void): void {
        this.callCommand(
            'delete_routes', 
            correlationId,
            {
                filter: filter
            }, 
            callback
        );
    }
    
}
