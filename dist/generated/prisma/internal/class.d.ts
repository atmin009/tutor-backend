import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.role`: Exposes CRUD operations for the **Role** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Roles
      * const roles = await prisma.role.findMany()
      * ```
      */
    get role(): Prisma.RoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Permissions
      * const permissions = await prisma.permission.findMany()
      * ```
      */
    get permission(): Prisma.PermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserRoles
      * const userRoles = await prisma.userRole.findMany()
      * ```
      */
    get userRole(): Prisma.UserRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RolePermissions
      * const rolePermissions = await prisma.rolePermission.findMany()
      * ```
      */
    get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Teachers
      * const teachers = await prisma.teacher.findMany()
      * ```
      */
    get teacher(): Prisma.TeacherDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.course`: Exposes CRUD operations for the **Course** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Courses
      * const courses = await prisma.course.findMany()
      * ```
      */
    get course(): Prisma.CourseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.section`: Exposes CRUD operations for the **Section** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sections
      * const sections = await prisma.section.findMany()
      * ```
      */
    get section(): Prisma.SectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Lessons
      * const lessons = await prisma.lesson.findMany()
      * ```
      */
    get lesson(): Prisma.LessonDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Enrollments
      * const enrollments = await prisma.enrollment.findMany()
      * ```
      */
    get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.order`: Exposes CRUD operations for the **Order** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Orders
      * const orders = await prisma.order.findMany()
      * ```
      */
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lessonCompletion`: Exposes CRUD operations for the **LessonCompletion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LessonCompletions
      * const lessonCompletions = await prisma.lessonCompletion.findMany()
      * ```
      */
    get lessonCompletion(): Prisma.LessonCompletionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Coupons
      * const coupons = await prisma.coupon.findMany()
      * ```
      */
    get coupon(): Prisma.CouponDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.couponUsage`: Exposes CRUD operations for the **CouponUsage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CouponUsages
      * const couponUsages = await prisma.couponUsage.findMany()
      * ```
      */
    get couponUsage(): Prisma.CouponUsageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map