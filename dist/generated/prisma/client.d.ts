import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Role
 *
 */
export type Role = Prisma.RoleModel;
/**
 * Model Permission
 *
 */
export type Permission = Prisma.PermissionModel;
/**
 * Model UserRole
 *
 */
export type UserRole = Prisma.UserRoleModel;
/**
 * Model RolePermission
 *
 */
export type RolePermission = Prisma.RolePermissionModel;
/**
 * Model Teacher
 *
 */
export type Teacher = Prisma.TeacherModel;
/**
 * Model Course
 *
 */
export type Course = Prisma.CourseModel;
/**
 * Model Section
 *
 */
export type Section = Prisma.SectionModel;
/**
 * Model Lesson
 *
 */
export type Lesson = Prisma.LessonModel;
/**
 * Model Enrollment
 *
 */
export type Enrollment = Prisma.EnrollmentModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model LessonCompletion
 *
 */
export type LessonCompletion = Prisma.LessonCompletionModel;
/**
 * Model Coupon
 *
 */
export type Coupon = Prisma.CouponModel;
/**
 * Model CouponUsage
 *
 */
export type CouponUsage = Prisma.CouponUsageModel;
//# sourceMappingURL=client.d.ts.map