import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 6.19.0
 * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Role: "Role";
    readonly Permission: "Permission";
    readonly UserRole: "UserRole";
    readonly RolePermission: "RolePermission";
    readonly Teacher: "Teacher";
    readonly Course: "Course";
    readonly Section: "Section";
    readonly Lesson: "Lesson";
    readonly Enrollment: "Enrollment";
    readonly Order: "Order";
    readonly LessonCompletion: "LessonCompletion";
    readonly Coupon: "Coupon";
    readonly CouponUsage: "CouponUsage";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "role" | "permission" | "userRole" | "rolePermission" | "teacher" | "course" | "section" | "lesson" | "enrollment" | "order" | "lessonCompletion" | "coupon" | "couponUsage";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Role: {
            payload: Prisma.$RolePayload<ExtArgs>;
            fields: Prisma.RoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findFirst: {
                    args: Prisma.RoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findMany: {
                    args: Prisma.RoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                create: {
                    args: Prisma.RoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                createMany: {
                    args: Prisma.RoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                update: {
                    args: Prisma.RoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                deleteMany: {
                    args: Prisma.RoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                aggregate: {
                    args: Prisma.RoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole>;
                };
                groupBy: {
                    args: Prisma.RoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleCountAggregateOutputType> | number;
                };
            };
        };
        Permission: {
            payload: Prisma.$PermissionPayload<ExtArgs>;
            fields: Prisma.PermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findFirst: {
                    args: Prisma.PermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findMany: {
                    args: Prisma.PermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                create: {
                    args: Prisma.PermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                createMany: {
                    args: Prisma.PermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.PermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                update: {
                    args: Prisma.PermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.PermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.PermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                aggregate: {
                    args: Prisma.PermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePermission>;
                };
                groupBy: {
                    args: Prisma.PermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionCountAggregateOutputType> | number;
                };
            };
        };
        UserRole: {
            payload: Prisma.$UserRolePayload<ExtArgs>;
            fields: Prisma.UserRoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserRoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                findFirst: {
                    args: Prisma.UserRoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                findMany: {
                    args: Prisma.UserRoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>[];
                };
                create: {
                    args: Prisma.UserRoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                createMany: {
                    args: Prisma.UserRoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserRoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                update: {
                    args: Prisma.UserRoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                deleteMany: {
                    args: Prisma.UserRoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserRoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserRoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRolePayload>;
                };
                aggregate: {
                    args: Prisma.UserRoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserRole>;
                };
                groupBy: {
                    args: Prisma.UserRoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserRoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleCountAggregateOutputType> | number;
                };
            };
        };
        RolePermission: {
            payload: Prisma.$RolePermissionPayload<ExtArgs>;
            fields: Prisma.RolePermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findFirst: {
                    args: Prisma.RolePermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findMany: {
                    args: Prisma.RolePermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                create: {
                    args: Prisma.RolePermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                createMany: {
                    args: Prisma.RolePermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.RolePermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                update: {
                    args: Prisma.RolePermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.RolePermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                aggregate: {
                    args: Prisma.RolePermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRolePermission>;
                };
                groupBy: {
                    args: Prisma.RolePermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolePermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionCountAggregateOutputType> | number;
                };
            };
        };
        Teacher: {
            payload: Prisma.$TeacherPayload<ExtArgs>;
            fields: Prisma.TeacherFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TeacherFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                findFirst: {
                    args: Prisma.TeacherFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                findMany: {
                    args: Prisma.TeacherFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>[];
                };
                create: {
                    args: Prisma.TeacherCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                createMany: {
                    args: Prisma.TeacherCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.TeacherDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                update: {
                    args: Prisma.TeacherUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                deleteMany: {
                    args: Prisma.TeacherDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TeacherUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.TeacherUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TeacherPayload>;
                };
                aggregate: {
                    args: Prisma.TeacherAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeacher>;
                };
                groupBy: {
                    args: Prisma.TeacherGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TeacherCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TeacherCountAggregateOutputType> | number;
                };
            };
        };
        Course: {
            payload: Prisma.$CoursePayload<ExtArgs>;
            fields: Prisma.CourseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                findFirst: {
                    args: Prisma.CourseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                findMany: {
                    args: Prisma.CourseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>[];
                };
                create: {
                    args: Prisma.CourseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                createMany: {
                    args: Prisma.CourseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CourseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                update: {
                    args: Prisma.CourseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                deleteMany: {
                    args: Prisma.CourseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CourseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CoursePayload>;
                };
                aggregate: {
                    args: Prisma.CourseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourse>;
                };
                groupBy: {
                    args: Prisma.CourseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourseCountAggregateOutputType> | number;
                };
            };
        };
        Section: {
            payload: Prisma.$SectionPayload<ExtArgs>;
            fields: Prisma.SectionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SectionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                findFirst: {
                    args: Prisma.SectionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                findMany: {
                    args: Prisma.SectionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>[];
                };
                create: {
                    args: Prisma.SectionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                createMany: {
                    args: Prisma.SectionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SectionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                update: {
                    args: Prisma.SectionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                deleteMany: {
                    args: Prisma.SectionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SectionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SectionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectionPayload>;
                };
                aggregate: {
                    args: Prisma.SectionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSection>;
                };
                groupBy: {
                    args: Prisma.SectionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SectionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SectionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SectionCountAggregateOutputType> | number;
                };
            };
        };
        Lesson: {
            payload: Prisma.$LessonPayload<ExtArgs>;
            fields: Prisma.LessonFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LessonFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                findFirst: {
                    args: Prisma.LessonFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                findMany: {
                    args: Prisma.LessonFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>[];
                };
                create: {
                    args: Prisma.LessonCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                createMany: {
                    args: Prisma.LessonCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.LessonDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                update: {
                    args: Prisma.LessonUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                deleteMany: {
                    args: Prisma.LessonDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LessonUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.LessonUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonPayload>;
                };
                aggregate: {
                    args: Prisma.LessonAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLesson>;
                };
                groupBy: {
                    args: Prisma.LessonGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LessonCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonCountAggregateOutputType> | number;
                };
            };
        };
        Enrollment: {
            payload: Prisma.$EnrollmentPayload<ExtArgs>;
            fields: Prisma.EnrollmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                findFirst: {
                    args: Prisma.EnrollmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                findMany: {
                    args: Prisma.EnrollmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>[];
                };
                create: {
                    args: Prisma.EnrollmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                createMany: {
                    args: Prisma.EnrollmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.EnrollmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                update: {
                    args: Prisma.EnrollmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                deleteMany: {
                    args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.EnrollmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EnrollmentPayload>;
                };
                aggregate: {
                    args: Prisma.EnrollmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEnrollment>;
                };
                groupBy: {
                    args: Prisma.EnrollmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnrollmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EnrollmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EnrollmentCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        LessonCompletion: {
            payload: Prisma.$LessonCompletionPayload<ExtArgs>;
            fields: Prisma.LessonCompletionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LessonCompletionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LessonCompletionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                findFirst: {
                    args: Prisma.LessonCompletionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LessonCompletionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                findMany: {
                    args: Prisma.LessonCompletionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>[];
                };
                create: {
                    args: Prisma.LessonCompletionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                createMany: {
                    args: Prisma.LessonCompletionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.LessonCompletionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                update: {
                    args: Prisma.LessonCompletionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                deleteMany: {
                    args: Prisma.LessonCompletionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LessonCompletionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.LessonCompletionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LessonCompletionPayload>;
                };
                aggregate: {
                    args: Prisma.LessonCompletionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLessonCompletion>;
                };
                groupBy: {
                    args: Prisma.LessonCompletionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonCompletionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LessonCompletionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LessonCompletionCountAggregateOutputType> | number;
                };
            };
        };
        Coupon: {
            payload: Prisma.$CouponPayload<ExtArgs>;
            fields: Prisma.CouponFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CouponFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                findFirst: {
                    args: Prisma.CouponFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                findMany: {
                    args: Prisma.CouponFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>[];
                };
                create: {
                    args: Prisma.CouponCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                createMany: {
                    args: Prisma.CouponCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CouponDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                update: {
                    args: Prisma.CouponUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                deleteMany: {
                    args: Prisma.CouponDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CouponUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CouponUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponPayload>;
                };
                aggregate: {
                    args: Prisma.CouponAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCoupon>;
                };
                groupBy: {
                    args: Prisma.CouponGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CouponCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponCountAggregateOutputType> | number;
                };
            };
        };
        CouponUsage: {
            payload: Prisma.$CouponUsagePayload<ExtArgs>;
            fields: Prisma.CouponUsageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CouponUsageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CouponUsageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                findFirst: {
                    args: Prisma.CouponUsageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CouponUsageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                findMany: {
                    args: Prisma.CouponUsageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>[];
                };
                create: {
                    args: Prisma.CouponUsageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                createMany: {
                    args: Prisma.CouponUsageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CouponUsageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                update: {
                    args: Prisma.CouponUsageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                deleteMany: {
                    args: Prisma.CouponUsageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CouponUsageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CouponUsageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CouponUsagePayload>;
                };
                aggregate: {
                    args: Prisma.CouponUsageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCouponUsage>;
                };
                groupBy: {
                    args: Prisma.CouponUsageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponUsageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CouponUsageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CouponUsageCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly phone: "phone";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const UserRoleScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly roleId: "roleId";
};
export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly id: "id";
    readonly roleId: "roleId";
    readonly permissionId: "permissionId";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const TeacherScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly bio: "bio";
    readonly avatarUrl: "avatarUrl";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum];
export declare const CourseScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly description: "description";
    readonly summary: "summary";
    readonly price: "price";
    readonly salePrice: "salePrice";
    readonly status: "status";
    readonly coverImage: "coverImage";
    readonly previewVideoUrl: "previewVideoUrl";
    readonly teacherId: "teacherId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];
export declare const SectionScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly title: "title";
    readonly sortOrder: "sortOrder";
    readonly videoUrl: "videoUrl";
    readonly attachmentUrl: "attachmentUrl";
};
export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum];
export declare const LessonScalarFieldEnum: {
    readonly id: "id";
    readonly courseId: "courseId";
    readonly sectionId: "sectionId";
    readonly title: "title";
    readonly contentType: "contentType";
    readonly contentUrl: "contentUrl";
    readonly contentText: "contentText";
    readonly duration: "duration";
    readonly sortOrder: "sortOrder";
};
export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum];
export declare const EnrollmentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly courseId: "courseId";
    readonly enrolledAt: "enrolledAt";
    readonly expireAt: "expireAt";
};
export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly userId: "userId";
    readonly courseId: "courseId";
    readonly amount: "amount";
    readonly status: "status";
    readonly paymentType: "paymentType";
    readonly transactionId: "transactionId";
    readonly paymentUrl: "paymentUrl";
    readonly qrImageUrl: "qrImageUrl";
    readonly couponId: "couponId";
    readonly discountAmount: "discountAmount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const LessonCompletionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly lessonId: "lessonId";
    readonly completedAt: "completedAt";
};
export type LessonCompletionScalarFieldEnum = (typeof LessonCompletionScalarFieldEnum)[keyof typeof LessonCompletionScalarFieldEnum];
export declare const CouponScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly description: "description";
    readonly discountType: "discountType";
    readonly discountValue: "discountValue";
    readonly minPurchaseAmount: "minPurchaseAmount";
    readonly maxDiscountAmount: "maxDiscountAmount";
    readonly validFrom: "validFrom";
    readonly validUntil: "validUntil";
    readonly usageLimit: "usageLimit";
    readonly usageCount: "usageCount";
    readonly userLimit: "userLimit";
    readonly courseIds: "courseIds";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum];
export declare const CouponUsageScalarFieldEnum: {
    readonly id: "id";
    readonly couponId: "couponId";
    readonly userId: "userId";
    readonly orderId: "orderId";
    readonly discountAmount: "discountAmount";
    readonly usedAt: "usedAt";
};
export type CouponUsageScalarFieldEnum = (typeof CouponUsageScalarFieldEnum)[keyof typeof CouponUsageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly phone: "phone";
    readonly status: "status";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const RoleOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum];
export declare const PermissionOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type PermissionOrderByRelevanceFieldEnum = (typeof PermissionOrderByRelevanceFieldEnum)[keyof typeof PermissionOrderByRelevanceFieldEnum];
export declare const TeacherOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly bio: "bio";
    readonly avatarUrl: "avatarUrl";
};
export type TeacherOrderByRelevanceFieldEnum = (typeof TeacherOrderByRelevanceFieldEnum)[keyof typeof TeacherOrderByRelevanceFieldEnum];
export declare const CourseOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly slug: "slug";
    readonly description: "description";
    readonly summary: "summary";
    readonly status: "status";
    readonly coverImage: "coverImage";
    readonly previewVideoUrl: "previewVideoUrl";
};
export type CourseOrderByRelevanceFieldEnum = (typeof CourseOrderByRelevanceFieldEnum)[keyof typeof CourseOrderByRelevanceFieldEnum];
export declare const SectionOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly videoUrl: "videoUrl";
    readonly attachmentUrl: "attachmentUrl";
};
export type SectionOrderByRelevanceFieldEnum = (typeof SectionOrderByRelevanceFieldEnum)[keyof typeof SectionOrderByRelevanceFieldEnum];
export declare const LessonOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly contentType: "contentType";
    readonly contentUrl: "contentUrl";
    readonly contentText: "contentText";
};
export type LessonOrderByRelevanceFieldEnum = (typeof LessonOrderByRelevanceFieldEnum)[keyof typeof LessonOrderByRelevanceFieldEnum];
export declare const OrderOrderByRelevanceFieldEnum: {
    readonly orderId: "orderId";
    readonly status: "status";
    readonly paymentType: "paymentType";
    readonly transactionId: "transactionId";
    readonly paymentUrl: "paymentUrl";
    readonly qrImageUrl: "qrImageUrl";
};
export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum];
export declare const CouponOrderByRelevanceFieldEnum: {
    readonly code: "code";
    readonly description: "description";
    readonly discountType: "discountType";
    readonly courseIds: "courseIds";
    readonly status: "status";
};
export type CouponOrderByRelevanceFieldEnum = (typeof CouponOrderByRelevanceFieldEnum)[keyof typeof CouponOrderByRelevanceFieldEnum];
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    role?: Prisma.RoleOmit;
    permission?: Prisma.PermissionOmit;
    userRole?: Prisma.UserRoleOmit;
    rolePermission?: Prisma.RolePermissionOmit;
    teacher?: Prisma.TeacherOmit;
    course?: Prisma.CourseOmit;
    section?: Prisma.SectionOmit;
    lesson?: Prisma.LessonOmit;
    enrollment?: Prisma.EnrollmentOmit;
    order?: Prisma.OrderOmit;
    lessonCompletion?: Prisma.LessonCompletionOmit;
    coupon?: Prisma.CouponOmit;
    couponUsage?: Prisma.CouponUsageOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map