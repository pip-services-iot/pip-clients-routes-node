"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class RoutesDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("pip-services-routes", "controller", "*", "*", "*"));
    }
    getRoutes(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'routes.get_routes');
        this._controller.getRoutes(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getRouteById(correlationId, orgId, routeId, callback) {
        let timing = this.instrument(correlationId, 'routes.get_route_by_id');
        this._controller.getRouteById(correlationId, routeId, (err, route) => {
            timing.endTiming();
            callback(err, route);
        });
    }
    createRoute(correlationId, orgId, route, callback) {
        let timing = this.instrument(correlationId, 'routes.create_route');
        this._controller.createRoute(correlationId, route, (err, route) => {
            timing.endTiming();
            callback(err, route);
        });
    }
    setRoute(correlationId, orgId, route, callback) {
        let timing = this.instrument(correlationId, 'routes.set_route');
        this._controller.setRoute(correlationId, route, (err) => {
            timing.endTiming();
            callback(err, route);
        });
    }
    setRoutes(correlationId, orgId, routes, callback) {
        let timing = this.instrument(correlationId, 'routes.set_routes');
        this._controller.setRoutes(correlationId, routes, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    updateRoute(correlationId, orgId, route, callback) {
        let timing = this.instrument(correlationId, 'routes.update_route');
        this._controller.updateRoute(correlationId, route, (err, route) => {
            timing.endTiming();
            callback(err, route);
        });
    }
    deleteRouteById(correlationId, orgId, routeId, callback) {
        let timing = this.instrument(correlationId, 'routes.delete_route_by_id');
        this._controller.deleteRouteById(correlationId, routeId, (err, route) => {
            timing.endTiming();
            callback(err, route);
        });
    }
    deleteRoutes(correlationId, orgId, filter, callback) {
        let timing = this.instrument(correlationId, 'routes.delete_routes');
        this._controller.deleteRoutes(correlationId, filter, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}
exports.RoutesDirectClientV1 = RoutesDirectClientV1;
//# sourceMappingURL=RoutesDirectClientV1.js.map