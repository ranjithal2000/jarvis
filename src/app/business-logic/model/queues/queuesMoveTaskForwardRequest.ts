/**
 * queues
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface QueuesMoveTaskForwardRequest {
    /**
     * Queue id
     */
    queue: string;
    /**
     * Task id
     */
    task: string;
    /**
     * Number of positions in the queue to move the task forward relative to the   current position. Optional, the default value is 1.
     */
    count?: number;
}
