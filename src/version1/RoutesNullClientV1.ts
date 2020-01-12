import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IRoutesClientV1 } from './IRoutesClientV1';
import { ObjectRouteV1 } from './ObjectRouteV1';

export class RoutesNullClientV1 implements IRoutesClientV1 {
            
    public getRoutes(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ObjectRouteV1>) => void): void {
        callback(null, new DataPage<ObjectRouteV1>([], 0));
    }

    public getRouteById(correlationId: string, orgId: string, routeId: string, 
        callback: (err: any, route: ObjectRouteV1) => void): void {
        callback(null, null);
    }

    public createRoute(correlationId: string, orgId: string, route: ObjectRouteV1, 
        callback: (err: any, route: ObjectRouteV1) => void): void {
        callback(null, route);
    }

    public setRoute(correlationId: string, orgId: string, route: ObjectRouteV1,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        if (callback) callback(null, route);
    }

    public setRoutes(correlationId: string, orgId: string, routes: ObjectRouteV1[],
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }
    
    public updateRoute(correlationId: string, orgId: string, route: ObjectRouteV1, 
        callback: (err: any, route: ObjectRouteV1) => void): void {
        callback(null, route);
    }

    public deleteRouteById(correlationId: string, orgId: string, routeId: string,
        callback: (err: any, route: ObjectRouteV1) => void): void {
        if (callback) callback(null, null);
    }

    public deleteRoutes(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any) => void): void {
        if (callback) callback(null);
    }
}