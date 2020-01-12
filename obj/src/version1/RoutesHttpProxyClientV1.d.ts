import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';
import { ObjectRouteV1 } from './ObjectRouteV1';
import { IRoutesClientV1 } from './IRoutesClientV1';
export declare class RoutesHttpProxyClientV1 extends ClustersProxyHttpClientV1<IRoutesClientV1> implements IRoutesClientV1 {
    constructor(config?: any);
    getRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void;
    getRouteById(correlationId: string, orgId: string, routeId: string, callback: (err: any, route: ObjectRouteV1) => void): void;
    createRoute(correlationId: string, orgId: string, route: ObjectRouteV1, callback: (err: any, route: ObjectRouteV1) => void): void;
    setRoute(correlationId: string, orgId: string, route: ObjectRouteV1, callback: (err: any, route: ObjectRouteV1) => void): void;
    setRoutes(correlationId: string, orgId: string, routes: ObjectRouteV1[], callback?: (err: any) => void): void;
    updateRoute(correlationId: string, orgId: string, route: ObjectRouteV1, callback: (err: any, route: ObjectRouteV1) => void): void;
    deleteRouteById(correlationId: string, orgId: string, routeId: string, callback: (err: any, route: ObjectRouteV1) => void): void;
    deleteRoutes(correlationId: string, orgId: string, filter: FilterParams, callback: (err: any) => void): void;
}
