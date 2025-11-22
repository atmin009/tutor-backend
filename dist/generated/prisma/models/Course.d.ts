import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Course
 *
 */
export type CourseModel = runtime.Types.Result.DefaultSelection<Prisma.$CoursePayload>;
export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
export type CourseAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
    salePrice: number | null;
    teacherId: number | null;
};
export type CourseSumAggregateOutputType = {
    id: number | null;
    price: number | null;
    salePrice: number | null;
    teacherId: number | null;
};
export type CourseMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    slug: string | null;
    description: string | null;
    summary: string | null;
    price: number | null;
    salePrice: number | null;
    status: string | null;
    coverImage: string | null;
    previewVideoUrl: string | null;
    teacherId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    slug: string | null;
    description: string | null;
    summary: string | null;
    price: number | null;
    salePrice: number | null;
    status: string | null;
    coverImage: string | null;
    previewVideoUrl: string | null;
    teacherId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    description: number;
    summary: number;
    price: number;
    salePrice: number;
    status: number;
    coverImage: number;
    previewVideoUrl: number;
    teacherId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CourseAvgAggregateInputType = {
    id?: true;
    price?: true;
    salePrice?: true;
    teacherId?: true;
};
export type CourseSumAggregateInputType = {
    id?: true;
    price?: true;
    salePrice?: true;
    teacherId?: true;
};
export type CourseMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    description?: true;
    summary?: true;
    price?: true;
    salePrice?: true;
    status?: true;
    coverImage?: true;
    previewVideoUrl?: true;
    teacherId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    description?: true;
    summary?: true;
    price?: true;
    salePrice?: true;
    status?: true;
    coverImage?: true;
    previewVideoUrl?: true;
    teacherId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    description?: true;
    summary?: true;
    price?: true;
    salePrice?: true;
    status?: true;
    coverImage?: true;
    previewVideoUrl?: true;
    teacherId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CourseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: Prisma.CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType;
};
export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourse[P]> : Prisma.GetScalarType<T[P], AggregateCourse[P]>;
};
export type CourseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithAggregationInput | Prisma.CourseOrderByWithAggregationInput[];
    by: Prisma.CourseScalarFieldEnum[] | Prisma.CourseScalarFieldEnum;
    having?: Prisma.CourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
};
export type CourseGroupByOutputType = {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    summary: string | null;
    price: number;
    salePrice: number | null;
    status: string;
    coverImage: string | null;
    previewVideoUrl: string | null;
    teacherId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]>;
}>>;
export type CourseWhereInput = {
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    id?: Prisma.IntFilter<"Course"> | number;
    title?: Prisma.StringFilter<"Course"> | string;
    slug?: Prisma.StringFilter<"Course"> | string;
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    summary?: Prisma.StringNullableFilter<"Course"> | string | null;
    price?: Prisma.FloatFilter<"Course"> | number;
    salePrice?: Prisma.FloatNullableFilter<"Course"> | number | null;
    status?: Prisma.StringFilter<"Course"> | string;
    coverImage?: Prisma.StringNullableFilter<"Course"> | string | null;
    previewVideoUrl?: Prisma.StringNullableFilter<"Course"> | string | null;
    teacherId?: Prisma.IntNullableFilter<"Course"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    sections?: Prisma.SectionListRelationFilter;
    lessons?: Prisma.LessonListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
};
export type CourseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    previewVideoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    sections?: Prisma.SectionOrderByRelationAggregateInput;
    lessons?: Prisma.LessonOrderByRelationAggregateInput;
    enrollments?: Prisma.EnrollmentOrderByRelationAggregateInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    _relevance?: Prisma.CourseOrderByRelevanceInput;
};
export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    slug?: string;
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    title?: Prisma.StringFilter<"Course"> | string;
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    summary?: Prisma.StringNullableFilter<"Course"> | string | null;
    price?: Prisma.FloatFilter<"Course"> | number;
    salePrice?: Prisma.FloatNullableFilter<"Course"> | number | null;
    status?: Prisma.StringFilter<"Course"> | string;
    coverImage?: Prisma.StringNullableFilter<"Course"> | string | null;
    previewVideoUrl?: Prisma.StringNullableFilter<"Course"> | string | null;
    teacherId?: Prisma.IntNullableFilter<"Course"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    sections?: Prisma.SectionListRelationFilter;
    lessons?: Prisma.LessonListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
    orders?: Prisma.OrderListRelationFilter;
}, "id" | "slug">;
export type CourseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    summary?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    previewVideoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacherId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CourseCountOrderByAggregateInput;
    _avg?: Prisma.CourseAvgOrderByAggregateInput;
    _max?: Prisma.CourseMaxOrderByAggregateInput;
    _min?: Prisma.CourseMinOrderByAggregateInput;
    _sum?: Prisma.CourseSumOrderByAggregateInput;
};
export type CourseScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Course"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    summary?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    price?: Prisma.FloatWithAggregatesFilter<"Course"> | number;
    salePrice?: Prisma.FloatNullableWithAggregatesFilter<"Course"> | number | null;
    status?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    coverImage?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    previewVideoUrl?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    teacherId?: Prisma.IntNullableWithAggregatesFilter<"Course"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
};
export type CourseCreateInput = {
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutCoursesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutCourseInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateInput = {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    teacherId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutCourseInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutCoursesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutCourseNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutCourseNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateManyInput = {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    teacherId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseListRelationFilter = {
    every?: Prisma.CourseWhereInput;
    some?: Prisma.CourseWhereInput;
    none?: Prisma.CourseWhereInput;
};
export type CourseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CourseOrderByRelevanceInput = {
    fields: Prisma.CourseOrderByRelevanceFieldEnum | Prisma.CourseOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CourseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    previewVideoUrl?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
};
export type CourseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    previewVideoUrl?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    coverImage?: Prisma.SortOrder;
    previewVideoUrl?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    salePrice?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
};
export type CourseScalarRelationFilter = {
    is?: Prisma.CourseWhereInput;
    isNot?: Prisma.CourseWhereInput;
};
export type CourseCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput> | Prisma.CourseCreateWithoutTeacherInput[] | Prisma.CourseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutTeacherInput | Prisma.CourseCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.CourseCreateManyTeacherInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput> | Prisma.CourseCreateWithoutTeacherInput[] | Prisma.CourseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutTeacherInput | Prisma.CourseCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.CourseCreateManyTeacherInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput> | Prisma.CourseCreateWithoutTeacherInput[] | Prisma.CourseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutTeacherInput | Prisma.CourseCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutTeacherInput | Prisma.CourseUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.CourseCreateManyTeacherInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutTeacherInput | Prisma.CourseUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutTeacherInput | Prisma.CourseUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type CourseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput> | Prisma.CourseCreateWithoutTeacherInput[] | Prisma.CourseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutTeacherInput | Prisma.CourseCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutTeacherInput | Prisma.CourseUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.CourseCreateManyTeacherInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutTeacherInput | Prisma.CourseUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutTeacherInput | Prisma.CourseUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CourseCreateNestedOneWithoutSectionsInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutSectionsInput, Prisma.CourseUncheckedCreateWithoutSectionsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutSectionsInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutSectionsInput, Prisma.CourseUncheckedCreateWithoutSectionsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutSectionsInput;
    upsert?: Prisma.CourseUpsertWithoutSectionsInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutSectionsInput, Prisma.CourseUpdateWithoutSectionsInput>, Prisma.CourseUncheckedUpdateWithoutSectionsInput>;
};
export type CourseCreateNestedOneWithoutLessonsInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutLessonsInput, Prisma.CourseUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutLessonsInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutLessonsInput, Prisma.CourseUncheckedCreateWithoutLessonsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutLessonsInput;
    upsert?: Prisma.CourseUpsertWithoutLessonsInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutLessonsInput, Prisma.CourseUpdateWithoutLessonsInput>, Prisma.CourseUncheckedUpdateWithoutLessonsInput>;
};
export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutEnrollmentsInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutEnrollmentsInput;
    upsert?: Prisma.CourseUpsertWithoutEnrollmentsInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutEnrollmentsInput, Prisma.CourseUpdateWithoutEnrollmentsInput>, Prisma.CourseUncheckedUpdateWithoutEnrollmentsInput>;
};
export type CourseCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutOrdersInput, Prisma.CourseUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutOrdersInput, Prisma.CourseUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.CourseUpsertWithoutOrdersInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutOrdersInput, Prisma.CourseUpdateWithoutOrdersInput>, Prisma.CourseUncheckedUpdateWithoutOrdersInput>;
};
export type CourseCreateWithoutTeacherInput = {
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionCreateNestedManyWithoutCourseInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutTeacherInput = {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutCourseInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutTeacherInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput>;
};
export type CourseCreateManyTeacherInputEnvelope = {
    data: Prisma.CourseCreateManyTeacherInput | Prisma.CourseCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type CourseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.CourseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourseUpdateWithoutTeacherInput, Prisma.CourseUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput>;
};
export type CourseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.CourseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutTeacherInput, Prisma.CourseUncheckedUpdateWithoutTeacherInput>;
};
export type CourseUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.CourseScalarWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyWithoutTeacherInput>;
};
export type CourseScalarWhereInput = {
    AND?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
    OR?: Prisma.CourseScalarWhereInput[];
    NOT?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
    id?: Prisma.IntFilter<"Course"> | number;
    title?: Prisma.StringFilter<"Course"> | string;
    slug?: Prisma.StringFilter<"Course"> | string;
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    summary?: Prisma.StringNullableFilter<"Course"> | string | null;
    price?: Prisma.FloatFilter<"Course"> | number;
    salePrice?: Prisma.FloatNullableFilter<"Course"> | number | null;
    status?: Prisma.StringFilter<"Course"> | string;
    coverImage?: Prisma.StringNullableFilter<"Course"> | string | null;
    previewVideoUrl?: Prisma.StringNullableFilter<"Course"> | string | null;
    teacherId?: Prisma.IntNullableFilter<"Course"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
};
export type CourseCreateWithoutSectionsInput = {
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutCoursesInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutSectionsInput = {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    teacherId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutSectionsInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutSectionsInput, Prisma.CourseUncheckedCreateWithoutSectionsInput>;
};
export type CourseUpsertWithoutSectionsInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutSectionsInput, Prisma.CourseUncheckedUpdateWithoutSectionsInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutSectionsInput, Prisma.CourseUncheckedCreateWithoutSectionsInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutSectionsInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutSectionsInput, Prisma.CourseUncheckedUpdateWithoutSectionsInput>;
};
export type CourseUpdateWithoutSectionsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutCoursesNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutSectionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateWithoutLessonsInput = {
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutCoursesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutLessonsInput = {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    teacherId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutLessonsInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutLessonsInput, Prisma.CourseUncheckedCreateWithoutLessonsInput>;
};
export type CourseUpsertWithoutLessonsInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutLessonsInput, Prisma.CourseUncheckedUpdateWithoutLessonsInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutLessonsInput, Prisma.CourseUncheckedCreateWithoutLessonsInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutLessonsInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutLessonsInput, Prisma.CourseUncheckedUpdateWithoutLessonsInput>;
};
export type CourseUpdateWithoutLessonsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutCoursesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutLessonsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateWithoutEnrollmentsInput = {
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutCoursesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutCourseInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    teacherId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutCourseInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutCourseInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
};
export type CourseUpsertWithoutEnrollmentsInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutEnrollmentsInput, Prisma.CourseUncheckedUpdateWithoutEnrollmentsInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutEnrollmentsInput, Prisma.CourseUncheckedUpdateWithoutEnrollmentsInput>;
};
export type CourseUpdateWithoutEnrollmentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutCoursesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutCourseNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutCourseNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateWithoutOrdersInput = {
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutCoursesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutCourseInput;
    lessons?: Prisma.LessonCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutOrdersInput = {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    teacherId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutCourseInput;
    lessons?: Prisma.LessonUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutOrdersInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutOrdersInput, Prisma.CourseUncheckedCreateWithoutOrdersInput>;
};
export type CourseUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutOrdersInput, Prisma.CourseUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutOrdersInput, Prisma.CourseUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutOrdersInput, Prisma.CourseUncheckedUpdateWithoutOrdersInput>;
};
export type CourseUpdateWithoutOrdersInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutCoursesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutCourseNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutCourseNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateManyTeacherInput = {
    id?: number;
    title: string;
    slug: string;
    description?: string | null;
    summary?: string | null;
    price?: number;
    salePrice?: number | null;
    status?: string;
    coverImage?: string | null;
    previewVideoUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateWithoutTeacherInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUpdateManyWithoutCourseNestedInput;
    lessons?: Prisma.LessonUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutCourseNestedInput;
    lessons?: Prisma.LessonUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    summary?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    salePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    coverImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    previewVideoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CourseCountOutputType
 */
export type CourseCountOutputType = {
    sections: number;
    lessons: number;
    enrollments: number;
    orders: number;
};
export type CourseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sections?: boolean | CourseCountOutputTypeCountSectionsArgs;
    lessons?: boolean | CourseCountOutputTypeCountLessonsArgs;
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs;
    orders?: boolean | CourseCountOutputTypeCountOrdersArgs;
};
/**
 * CourseCountOutputType without action
 */
export type CourseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: Prisma.CourseCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CourseCountOutputType without action
 */
export type CourseCountOutputTypeCountSectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectionWhereInput;
};
/**
 * CourseCountOutputType without action
 */
export type CourseCountOutputTypeCountLessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
};
/**
 * CourseCountOutputType without action
 */
export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
};
/**
 * CourseCountOutputType without action
 */
export type CourseCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type CourseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    summary?: boolean;
    price?: boolean;
    salePrice?: boolean;
    status?: boolean;
    coverImage?: boolean;
    previewVideoUrl?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.Course$teacherArgs<ExtArgs>;
    sections?: boolean | Prisma.Course$sectionsArgs<ExtArgs>;
    lessons?: boolean | Prisma.Course$lessonsArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Course$enrollmentsArgs<ExtArgs>;
    orders?: boolean | Prisma.Course$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["course"]>;
export type CourseSelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    description?: boolean;
    summary?: boolean;
    price?: boolean;
    salePrice?: boolean;
    status?: boolean;
    coverImage?: boolean;
    previewVideoUrl?: boolean;
    teacherId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CourseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "description" | "summary" | "price" | "salePrice" | "status" | "coverImage" | "previewVideoUrl" | "teacherId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>;
export type CourseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Course$teacherArgs<ExtArgs>;
    sections?: boolean | Prisma.Course$sectionsArgs<ExtArgs>;
    lessons?: boolean | Prisma.Course$lessonsArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Course$enrollmentsArgs<ExtArgs>;
    orders?: boolean | Prisma.Course$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CoursePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Course";
    objects: {
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        sections: Prisma.$SectionPayload<ExtArgs>[];
        lessons: Prisma.$LessonPayload<ExtArgs>[];
        enrollments: Prisma.$EnrollmentPayload<ExtArgs>[];
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        slug: string;
        description: string | null;
        summary: string | null;
        price: number;
        salePrice: number | null;
        status: string;
        coverImage: string | null;
        previewVideoUrl: string | null;
        teacherId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["course"]>;
    composites: {};
};
export type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CoursePayload, S>;
export type CourseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourseCountAggregateInputType | true;
};
export interface CourseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Course'];
        meta: {
            name: 'Course';
        };
    };
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     *
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CourseFindManyArgs>(args?: Prisma.SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     *
     */
    create<T extends CourseCreateArgs>(args: Prisma.SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CourseCreateManyArgs>(args?: Prisma.SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     *
     */
    delete<T extends CourseDeleteArgs>(args: Prisma.SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CourseUpdateArgs>(args: Prisma.SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CourseUpdateManyArgs>(args: Prisma.SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: Prisma.SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(args?: Prisma.Subset<T, CourseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Prisma.Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>;
    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CourseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourseGroupByArgs['orderBy'];
    } : {
        orderBy?: CourseGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Course model
     */
    readonly fields: CourseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Course.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CourseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.Course$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sections<T extends Prisma.Course$sectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lessons<T extends Prisma.Course$lessonsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    enrollments<T extends Prisma.Course$enrollmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orders<T extends Prisma.Course$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Course model
 */
export interface CourseFieldRefs {
    readonly id: Prisma.FieldRef<"Course", 'Int'>;
    readonly title: Prisma.FieldRef<"Course", 'String'>;
    readonly slug: Prisma.FieldRef<"Course", 'String'>;
    readonly description: Prisma.FieldRef<"Course", 'String'>;
    readonly summary: Prisma.FieldRef<"Course", 'String'>;
    readonly price: Prisma.FieldRef<"Course", 'Float'>;
    readonly salePrice: Prisma.FieldRef<"Course", 'Float'>;
    readonly status: Prisma.FieldRef<"Course", 'String'>;
    readonly coverImage: Prisma.FieldRef<"Course", 'String'>;
    readonly previewVideoUrl: Prisma.FieldRef<"Course", 'String'>;
    readonly teacherId: Prisma.FieldRef<"Course", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Course", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Course", 'DateTime'>;
}
/**
 * Course findUnique
 */
export type CourseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where: Prisma.CourseWhereUniqueInput;
};
/**
 * Course findUniqueOrThrow
 */
export type CourseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where: Prisma.CourseWhereUniqueInput;
};
/**
 * Course findFirst
 */
export type CourseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where?: Prisma.CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courses.
     */
    cursor?: Prisma.CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courses.
     */
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
/**
 * Course findFirstOrThrow
 */
export type CourseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Course to fetch.
     */
    where?: Prisma.CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courses.
     */
    cursor?: Prisma.CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courses.
     */
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
/**
 * Course findMany
 */
export type CourseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    /**
     * Filter, which Courses to fetch.
     */
    where?: Prisma.CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Courses.
     */
    cursor?: Prisma.CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
/**
 * Course create
 */
export type CourseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    /**
     * The data needed to create a Course.
     */
    data: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
};
/**
 * Course createMany
 */
export type CourseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: Prisma.CourseCreateManyInput | Prisma.CourseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Course update
 */
export type CourseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    /**
     * The data needed to update a Course.
     */
    data: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
    /**
     * Choose, which Course to update.
     */
    where: Prisma.CourseWhereUniqueInput;
};
/**
 * Course updateMany
 */
export type CourseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyInput>;
    /**
     * Filter which Courses to update
     */
    where?: Prisma.CourseWhereInput;
    /**
     * Limit how many Courses to update.
     */
    limit?: number;
};
/**
 * Course upsert
 */
export type CourseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: Prisma.CourseWhereUniqueInput;
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
};
/**
 * Course delete
 */
export type CourseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    /**
     * Filter which Course to delete.
     */
    where: Prisma.CourseWhereUniqueInput;
};
/**
 * Course deleteMany
 */
export type CourseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: Prisma.CourseWhereInput;
    /**
     * Limit how many Courses to delete.
     */
    limit?: number;
};
/**
 * Course.teacher
 */
export type Course$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    where?: Prisma.TeacherWhereInput;
};
/**
 * Course.sections
 */
export type Course$sectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: Prisma.SectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Section
     */
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SectionInclude<ExtArgs> | null;
    where?: Prisma.SectionWhereInput;
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    cursor?: Prisma.SectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SectionScalarFieldEnum | Prisma.SectionScalarFieldEnum[];
};
/**
 * Course.lessons
 */
export type Course$lessonsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: Prisma.LessonSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lesson
     */
    omit?: Prisma.LessonOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LessonInclude<ExtArgs> | null;
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    cursor?: Prisma.LessonWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
/**
 * Course.enrollments
 */
export type Course$enrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentScalarFieldEnum | Prisma.EnrollmentScalarFieldEnum[];
};
/**
 * Course.orders
 */
export type Course$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Course without action
 */
export type CourseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Course.d.ts.map