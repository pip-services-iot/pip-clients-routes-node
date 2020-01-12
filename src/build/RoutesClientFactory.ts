import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { RoutesNullClientV1 } from '../version1/RoutesNullClientV1';
import { RoutesDirectClientV1 } from '../version1/RoutesDirectClientV1';
import { RoutesHttpClientV1 } from '../version1/RoutesHttpClientV1';
import { RoutesLambdaClientV1 } from '../version1/RoutesLambdaClientV1';
import { RoutesHttpProxyClientV1 } from '../version1/RoutesHttpProxyClientV1';

export class RoutesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-routes', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-routes', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-routes', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-routes', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-routes', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('pip-services-routes', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(RoutesClientFactory.NullClientV1Descriptor, RoutesNullClientV1);
		this.registerAsType(RoutesClientFactory.DirectClientV1Descriptor, RoutesDirectClientV1);
		this.registerAsType(RoutesClientFactory.HttpClientV1Descriptor, RoutesHttpClientV1);
		this.registerAsType(RoutesClientFactory.LambdaClientV1Descriptor, RoutesLambdaClientV1);
		this.registerAsType(RoutesClientFactory.HttpProxyClientV1Descriptor, RoutesHttpProxyClientV1);
	}
	
}
