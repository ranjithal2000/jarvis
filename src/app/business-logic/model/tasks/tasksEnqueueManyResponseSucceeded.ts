/**
 * tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface TasksEnqueueManyResponseSucceeded {
    /**
     * ID of the succeeded entity
     */
    id?: string;
    /**
     * Number of tasks updated (0 or 1)
     */
    updated?: number;
    /**
     * Updated fields names and values
     */
    fields?: object;
    /**
     * Indicates whether the task was queued
     */
    queued?: boolean;
}
