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

import { TasksResetManyResponseFailed } from '././tasksResetManyResponseFailed';
import { TasksArchiveManyResponseSucceeded } from '././tasksArchiveManyResponseSucceeded';


export interface TasksArchiveManyResponse {
    succeeded?: Array<TasksArchiveManyResponseSucceeded>;
    failed?: Array<TasksResetManyResponseFailed>;
}