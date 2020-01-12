let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { RouteTypeV1 } from '../../src/version1/RouteTypeV1';
import { ObjectRouteV1 } from '../../src/version1/ObjectRouteV1';
import { IRoutesClientV1 } from '../../src/version1/IRoutesClientV1';

let now = new Date().getTime();
let interval = 300000;
let time1 = new Date(now);
let time2 = new Date(now + interval);
let time3 = new Date(now + 2 * interval);
let point1 = new Date(now);
let point2 = new Date(now + (interval / 2));
let point3 = new Date(now + interval);

export class RoutesClientFixtureV1 {
    private _client: IRoutesClientV1;
    
    constructor(client: IRoutesClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let route1: ObjectRouteV1;

        async.series([
        // Create one route
            (callback) => {
                this._client.setRoute(
                    null,
                    '1',
                    { id: '1', org_id: '1', object_id: '1', type: RouteTypeV1.Travel, start_time: time1, end_time: time2, duration: 1000, positions: [] },
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Create other routes
            (callback) => {
                this._client.setRoutes(
                    null, 
                    '1',
                    [
                        { id: '2', org_id: '1', object_id: '1', type: RouteTypeV1.Stop, start_time: time1, end_time: time2, duration: 1000, positions: [] },
                        { id: '3', org_id: '1', object_id: '1', type: RouteTypeV1.Stay, start_time: time2, end_time: time3, duration: 1000, positions: [] },
                        { id: '4', org_id: '2', object_id: '2', type: RouteTypeV1.Travel, start_time: time1, end_time: time2, duration: 1000, positions: [] }
                    ],
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Delete route
            (callback) => {
                this._client.deleteRouteById(
                    null,
                    '1',
                    '1',
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete routes
            (callback) => {
                this._client.getRouteById(
                    null,
                    '1',
                    '1',
                    (err, route) => {
                        assert.isNull(err);

                        assert.isNull(route || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
