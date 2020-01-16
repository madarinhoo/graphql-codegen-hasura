import { FieldDefinitionNode, FragmentDefinitionNode } from "graphql";
import { ContentManager } from ".";
import { TypeMap } from "graphql/type/schema";
export declare function injectGlobalReactCodePre({ contentManager, typescriptCodegenOutputPath, withUpdates }: {
    contentManager: ContentManager;
    typescriptCodegenOutputPath: string;
    withUpdates: boolean;
}): void;
export declare function injectSharedReactPre({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectFetchReact({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField?: FieldDefinitionNode | null;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectInsertReact({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectUpdateReact({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectDeleteReact({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
}): void;
export declare function injectSharedReactPost({ contentManager, entityName, fragmentName, trimString, primaryKeyIdField, typescriptCodegenOutputPath, withQueries, withInserts, withUpdates, withDeletes }: {
    contentManager: ContentManager;
    entityName: string;
    fragmentName: string;
    trimString?: string;
    primaryKeyIdField: FieldDefinitionNode;
    typescriptCodegenOutputPath: string;
    withQueries?: boolean;
    withInserts?: boolean;
    withUpdates?: boolean;
    withDeletes?: boolean;
}): void;
export declare function injectGlobalReactCodePost({ contentManager, fragmentDefinitionNodes, schemaTypeMap, trimString, withQueries, withInserts, withUpdates, withDeletes }: {
    contentManager: ContentManager;
    fragmentDefinitionNodes: FragmentDefinitionNode[];
    schemaTypeMap: TypeMap;
    trimString?: string;
    withQueries?: boolean;
    withInserts?: boolean;
    withUpdates?: boolean;
    withDeletes?: boolean;
}): void;
