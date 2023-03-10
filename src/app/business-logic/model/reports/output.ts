/**
 * reports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 999.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { View } from '././view';


export interface Output {
    view?: View;
    /**
     * Storage id. This is where output files will be stored.
     */
    destination?: string;
    /**
     * Model id.
     */
    model?: string;
    /**
     * Task result. Values: \'success\', \'failure\'
     */
    result?: string;
    /**
     * Last error text
     */
    error?: string;
}
