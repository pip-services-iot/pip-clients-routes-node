import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { ObjectRouteV1 } from './ObjectRouteV1';
import { IRoutesClientV1 } from './IRoutesClientV1';
import { RoutesHttpClientV1 } from './RoutesHttpClientV1';

export class RoutesHttpProxyClientV1 extends ClustersProxyHttpClientV1<IRoutesClientV1>
    implements IRoutesClientV1 {       
    
    constructor(config?: any) {
        super(RoutesHttpClientV1, 'pip-services-routes', 30022);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public getRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getRoutes(correlationId, orgId, filter, paging, callback);
        });
    }

    public getRouteById(correlationId: string, orgId: string, routeId: string,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getRouteById(correlationId, orgId, routeId, callback);
        });
    }

    public createRoute(correlationId: string, orgId: string, route: ObjectRouteV1,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.createRoute(correlationId, orgId, route, callback);
        });
    }

    public setRoute(correlationId: string, orgId: string, route: ObjectRouteV1,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.setRoute(correlationId, orgId, route, callback);
        });
    }

    public setRoutes(correlationId: string, orgId: string, routes: ObjectRouteV1[],
        callback?: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.setRoutes(correlationId, orgId, routes, callback);
        });
    }
    
    public updateRoute(correlationId: string, orgId: string, route: ObjectRouteV1,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.updateRoute(correlationId, orgId, route, callback);
        });
    }

    public deleteRouteById(correlationId: string, orgId: string, routeId: string,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.deleteRouteById(correlationId, orgId, routeId, callback);
        });
    }
    
    public deleteRoutes(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }

            client.deleteRoutes(correlationId, orgId, filter, callback);
        });
    }

}
