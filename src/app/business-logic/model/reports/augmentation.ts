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

import { AugmentationSet } from '././augmentationSet';


export interface Augmentation {
    /**
     * List of augmentation sets
     */
    sets?: Array<AugmentationSet>;
    /**
     * Crop image data around all frame ROIs
     */
    crop_around_rois?: boolean;
}
