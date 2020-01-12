"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class RoutesHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/routes');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getRoutes(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_routes', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getRouteById(correlationId, orgId, routeId, callback) {
        this.callCommand('get_route_by_id', correlationId, {
            route_id: routeId
        }, callback);
    }
    createRoute(correlationId, orgId, route, callback) {
        this.callCommand('create_route', correlationId, {
            route: route
        }, callback);
    }
    setRoute(correlationId, orgId, route, callback) {
        this.callCommand('set_route', correlationId, {
            route: route
        }, callback);
    }
    setRoutes(correlationId, orgId, routes, callback) {
        this.callCommand('set_routes', correlationId, {
            routes: routes
        }, callback);
    }
    updateRoute(correlationId, orgId, route, callback) {
        this.callCommand('update_route', correlationId, {
            route: route
        }, callback);
    }
    deleteRouteById(correlationId, orgId, routeId, callback) {
        this.callCommand('delete_route_by_id', correlationId, {
            route_id: routeId
        }, callback);
    }
    deleteRoutes(correlationId, orgId, filter, callback) {
        this.callCommand('delete_routes', correlationId, {
            filter: filter
        }, callback);
    }
}
exports.RoutesHttpClientV1 = RoutesHttpClientV1;
//# sourceMappingURL=RoutesHttpClientV1.js.map