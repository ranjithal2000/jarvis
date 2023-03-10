import {ProjectsGetAllResponseSingleSubProjects} from '~/business-logic/model/projects/projectsGetAllResponseSingleSubProjects';
import {Stats} from '~/business-logic/model/projects/stats';
import {ProjectsGetAllResponseSingleDatasetStats} from '~/business-logic/model/projects/projectsGetAllResponseSingleDatasetStats';

/**
 * projects
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.14
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface Project {
    /**
     * Project id
     */
    id?: string;
    /**
     * Project name
     */
    name?: string;
    /**
     * Project base name
     */
    basename?: string;
    /**
     * Project description
     */
    description?: string;
    /**
     * Associated user id
     */
    user?: string;
    /**
     * Company id
     */
    company?: {id: string; name?: string};
    /**
     * Creation time
     */
    created?: string;
    /**
     * User-defined tags
     */
    tags?: Array<string>;
    /**
     * System tags. This field is reserved for system use, please don\'t use it.
     */
    system_tags?: Array<string>;
    /**
     * The default output destination URL for new tasks under this project
     */
    default_output_destination?: string;
    stats?: Stats;
    dataset_stats?: ProjectsGetAllResponseSingleDatasetStats;
    /**
     * Last project update time. Reflects the last time the project metadata was changed or a task in this project has changed status
     */
    last_update?: string;
    sub_projects?: ProjectsGetAllResponseSingleSubProjects[];

    own_tasks?: number;
    own_models?: number;
}
