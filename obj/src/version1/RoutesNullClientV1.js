"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class RoutesNullClientV1 {
    getRoutes(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getRouteById(correlationId, orgId, routeId, callback) {
        callback(null, null);
    }
    createRoute(correlationId, orgId, route, callback) {
        callback(null, route);
    }
    setRoute(correlationId, orgId, route, callback) {
        if (callback)
            callback(null, route);
    }
    setRoutes(correlationId, orgId, routes, callback) {
        if (callback)
            callback(null);
    }
    updateRoute(correlationId, orgId, route, callback) {
        callback(null, route);
    }
    deleteRouteById(correlationId, orgId, routeId, callback) {
        if (callback)
            callback(null, null);
    }
    deleteRoutes(correlationId, orgId, filter, callback) {
        if (callback)
            callback(null);
    }
}
exports.RoutesNullClientV1 = RoutesNullClientV1;
//# sourceMappingURL=RoutesNullClientV1.js.map