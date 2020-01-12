let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { RoutesMemoryPersistence } from 'pip-services-routes-node';
import { RoutesController } from 'pip-services-routes-node';
import { RoutesHttpServiceV1 } from 'pip-services-routes-node';
import { IRoutesClientV1 } from '../../src/version1/IRoutesClientV1';
import { RoutesHttpClientV1 } from '../../src/version1/RoutesHttpClientV1';
import { RoutesClientFixtureV1 } from './RoutesClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('RoutesHttpClientV1', ()=> {
    let service: RoutesHttpServiceV1;
    let client: RoutesHttpClientV1;
    let fixture: RoutesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new RoutesMemoryPersistence();
        let controller = new RoutesController();

        controller.configure(ConfigParams.fromTuples(
            'options.interval', 5 // Set interval to 5 mins
        ));

        service = new RoutesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-routes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-routes', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-routes', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new RoutesHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new RoutesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
