/**
 * models
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface ModelsDeleteRequest {
    /**
     * Model ID
     */
    model: string;
    /**
     * Force. Required if there are tasks that use the model as an execution model, or   if the model\'s creating task is published.
     */
    force?: boolean;
}
