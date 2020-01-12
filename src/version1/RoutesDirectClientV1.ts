import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IRoutesClientV1 } from './IRoutesClientV1';
//import { IRoutesController } from 'pip-services-routes-node';
import { ObjectRouteV1 } from './ObjectRouteV1';

export class RoutesDirectClientV1 extends DirectClient<any> implements IRoutesClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-routes", "controller", "*", "*", "*"))
    }

    public getRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void {
        let timing = this.instrument(correlationId, 'routes.get_routes');
        this._controller.getRoutes(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getRouteById(correlationId: string, orgId: string, routeId: string, 
        callback: (err: any, route: ObjectRouteV1) => void): void {
        let timing = this.instrument(correlationId, 'routes.get_route_by_id');
        this._controller.getRouteById(correlationId, routeId, (err, route) => {
            timing.endTiming();
            callback(err, route);
        });
    }

    public createRoute(correlationId: string, orgId: string, route: ObjectRouteV1, 
        callback: (err: any, route: ObjectRouteV1) => void): void {
        let timing = this.instrument(correlationId, 'routes.create_route');
        this._controller.createRoute(correlationId, route, (err, route) => {
            timing.endTiming();
            callback(err, route);
        });
    }

    public setRoute(correlationId: string, orgId: string, route: ObjectRouteV1,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        let timing = this.instrument(correlationId, 'routes.set_route');
        this._controller.setRoute(correlationId, route, (err) => {
            timing.endTiming();
            callback(err, route);
        });
    }

    public setRoutes(correlationId: string, orgId: string, routes: ObjectRouteV1[],
        callback?: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'routes.set_routes');
        this._controller.setRoutes(correlationId, routes, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    
    public updateRoute(correlationId: string, orgId: string, route: ObjectRouteV1, 
        callback: (err: any, route: ObjectRouteV1) => void): void {
        let timing = this.instrument(correlationId, 'routes.update_route');
        this._controller.updateRoute(correlationId, route, (err, route) => {
            timing.endTiming();
            callback(err, route);
        });
    }

    public deleteRouteById(correlationId: string, orgId: string, routeId: string,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        let timing = this.instrument(correlationId, 'routes.delete_route_by_id');
        this._controller.deleteRouteById(correlationId, routeId, (err, route) => {
            timing.endTiming();
            callback(err, route);
        });
    }
    
    public deleteRoutes(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'routes.delete_routes');
        this._controller.deleteRoutes(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}