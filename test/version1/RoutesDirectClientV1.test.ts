let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { RoutesMemoryPersistence } from 'pip-services-routes-node';
import { RoutesController } from 'pip-services-routes-node';
import { IRoutesClientV1 } from '../../src/version1/IRoutesClientV1';
import { RoutesDirectClientV1 } from '../../src/version1/RoutesDirectClientV1';
import { RoutesClientFixtureV1 } from './RoutesClientFixtureV1';

suite('RoutesDirectClientV1', ()=> {
    let client: RoutesDirectClientV1;
    let fixture: RoutesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new RoutesMemoryPersistence();
        let controller = new RoutesController();

        controller.configure(ConfigParams.fromTuples(
            'options.interval', 5 // Set interval to 5 mins
        ));

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-routes', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-routes', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new RoutesDirectClientV1();
        client.setReferences(references);

        fixture = new RoutesClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
