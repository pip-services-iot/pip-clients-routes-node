"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const RoutesNullClientV1_1 = require("../version1/RoutesNullClientV1");
const RoutesDirectClientV1_1 = require("../version1/RoutesDirectClientV1");
const RoutesHttpClientV1_1 = require("../version1/RoutesHttpClientV1");
const RoutesLambdaClientV1_1 = require("../version1/RoutesLambdaClientV1");
const RoutesHttpProxyClientV1_1 = require("../version1/RoutesHttpProxyClientV1");
class RoutesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(RoutesClientFactory.NullClientV1Descriptor, RoutesNullClientV1_1.RoutesNullClientV1);
        this.registerAsType(RoutesClientFactory.DirectClientV1Descriptor, RoutesDirectClientV1_1.RoutesDirectClientV1);
        this.registerAsType(RoutesClientFactory.HttpClientV1Descriptor, RoutesHttpClientV1_1.RoutesHttpClientV1);
        this.registerAsType(RoutesClientFactory.LambdaClientV1Descriptor, RoutesLambdaClientV1_1.RoutesLambdaClientV1);
        this.registerAsType(RoutesClientFactory.HttpProxyClientV1Descriptor, RoutesHttpProxyClientV1_1.RoutesHttpProxyClientV1);
    }
}
exports.RoutesClientFactory = RoutesClientFactory;
RoutesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routes', 'factory', 'default', 'default', '1.0');
RoutesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routes', 'client', 'null', 'default', '1.0');
RoutesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routes', 'client', 'direct', 'default', '1.0');
RoutesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routes', 'client', 'http', 'default', '1.0');
RoutesClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routes', 'client', 'lambda', 'default', '1.0');
RoutesClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-routes', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=RoutesClientFactory.js.map