"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const RoutesHttpClientV1_1 = require("./RoutesHttpClientV1");
class RoutesHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(RoutesHttpClientV1_1.RoutesHttpClientV1, 'pip-services-routes', 30022);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getRoutes(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getRoutes(correlationId, orgId, filter, paging, callback);
        });
    }
    getRouteById(correlationId, orgId, routeId, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getRouteById(correlationId, orgId, routeId, callback);
        });
    }
    createRoute(correlationId, orgId, route, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.createRoute(correlationId, orgId, route, callback);
        });
    }
    setRoute(correlationId, orgId, route, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.setRoute(correlationId, orgId, route, callback);
        });
    }
    setRoutes(correlationId, orgId, routes, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.setRoutes(correlationId, orgId, routes, callback);
        });
    }
    updateRoute(correlationId, orgId, route, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.updateRoute(correlationId, orgId, route, callback);
        });
    }
    deleteRouteById(correlationId, orgId, routeId, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.deleteRouteById(correlationId, orgId, routeId, callback);
        });
    }
    deleteRoutes(correlationId, orgId, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err);
                return;
            }
            client.deleteRoutes(correlationId, orgId, filter, callback);
        });
    }
}
exports.RoutesHttpProxyClientV1 = RoutesHttpProxyClientV1;
//# sourceMappingURL=RoutesHttpProxyClientV1.js.map