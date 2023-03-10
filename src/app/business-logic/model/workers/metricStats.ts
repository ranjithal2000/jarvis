/**
 * workers
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { AggregationStats } from '././aggregationStats';


export interface MetricStats {
    /**
     * Name of the metric (cpu_usage, memory_used etc.)
     */
    metric?: string;
    /**
     * Name of the metric component. Set only if \'split_by_variant\' was set in the request
     */
    variant?: string;
    /**
     * List of timestamps (in seconds from epoch) in the acceding order. The timestamps are separated by the requested interval. Timestamps where no workers activity was recorded are omitted.
     */
    dates?: Array<number>;
    /**
     * Statistics data by type
     */
    stats?: Array<AggregationStats>;
}
