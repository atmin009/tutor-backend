import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Lesson
 *
 */
export type LessonModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonPayload>;
export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
export type LessonAvgAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    sectionId: number | null;
    duration: number | null;
    sortOrder: number | null;
};
export type LessonSumAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    sectionId: number | null;
    duration: number | null;
    sortOrder: number | null;
};
export type LessonMinAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    sectionId: number | null;
    title: string | null;
    contentType: string | null;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
    sortOrder: number | null;
};
export type LessonMaxAggregateOutputType = {
    id: number | null;
    courseId: number | null;
    sectionId: number | null;
    title: string | null;
    contentType: string | null;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
    sortOrder: number | null;
};
export type LessonCountAggregateOutputType = {
    id: number;
    courseId: number;
    sectionId: number;
    title: number;
    contentType: number;
    contentUrl: number;
    contentText: number;
    duration: number;
    sortOrder: number;
    _all: number;
};
export type LessonAvgAggregateInputType = {
    id?: true;
    courseId?: true;
    sectionId?: true;
    duration?: true;
    sortOrder?: true;
};
export type LessonSumAggregateInputType = {
    id?: true;
    courseId?: true;
    sectionId?: true;
    duration?: true;
    sortOrder?: true;
};
export type LessonMinAggregateInputType = {
    id?: true;
    courseId?: true;
    sectionId?: true;
    title?: true;
    contentType?: true;
    contentUrl?: true;
    contentText?: true;
    duration?: true;
    sortOrder?: true;
};
export type LessonMaxAggregateInputType = {
    id?: true;
    courseId?: true;
    sectionId?: true;
    title?: true;
    contentType?: true;
    contentUrl?: true;
    contentText?: true;
    duration?: true;
    sortOrder?: true;
};
export type LessonCountAggregateInputType = {
    id?: true;
    courseId?: true;
    sectionId?: true;
    title?: true;
    contentType?: true;
    contentUrl?: true;
    contentText?: true;
    duration?: true;
    sortOrder?: true;
    _all?: true;
};
export type LessonAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: Prisma.LessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lessons to fetch.
     */
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lessons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType;
};
export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
    [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLesson[P]> : Prisma.GetScalarType<T[P], AggregateLesson[P]>;
};
export type LessonGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonWhereInput;
    orderBy?: Prisma.LessonOrderByWithAggregationInput | Prisma.LessonOrderByWithAggregationInput[];
    by: Prisma.LessonScalarFieldEnum[] | Prisma.LessonScalarFieldEnum;
    having?: Prisma.LessonScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonCountAggregateInputType | true;
    _avg?: LessonAvgAggregateInputType;
    _sum?: LessonSumAggregateInputType;
    _min?: LessonMinAggregateInputType;
    _max?: LessonMaxAggregateInputType;
};
export type LessonGroupByOutputType = {
    id: number;
    courseId: number;
    sectionId: number | null;
    title: string;
    contentType: string;
    contentUrl: string | null;
    contentText: string | null;
    duration: number | null;
    sortOrder: number;
    _count: LessonCountAggregateOutputType | null;
    _avg: LessonAvgAggregateOutputType | null;
    _sum: LessonSumAggregateOutputType | null;
    _min: LessonMinAggregateOutputType | null;
    _max: LessonMaxAggregateOutputType | null;
};
type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonGroupByOutputType[P]>;
}>>;
export type LessonWhereInput = {
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    id?: Prisma.IntFilter<"Lesson"> | number;
    courseId?: Prisma.IntFilter<"Lesson"> | number;
    sectionId?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    title?: Prisma.StringFilter<"Lesson"> | string;
    contentType?: Prisma.StringFilter<"Lesson"> | string;
    contentUrl?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    contentText?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    duration?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    sortOrder?: Prisma.IntFilter<"Lesson"> | number;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    section?: Prisma.XOR<Prisma.SectionNullableScalarRelationFilter, Prisma.SectionWhereInput> | null;
    lessonCompletions?: Prisma.LessonCompletionListRelationFilter;
};
export type LessonOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    contentText?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    section?: Prisma.SectionOrderByWithRelationInput;
    lessonCompletions?: Prisma.LessonCompletionOrderByRelationAggregateInput;
    _relevance?: Prisma.LessonOrderByRelevanceInput;
};
export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    OR?: Prisma.LessonWhereInput[];
    NOT?: Prisma.LessonWhereInput | Prisma.LessonWhereInput[];
    courseId?: Prisma.IntFilter<"Lesson"> | number;
    sectionId?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    title?: Prisma.StringFilter<"Lesson"> | string;
    contentType?: Prisma.StringFilter<"Lesson"> | string;
    contentUrl?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    contentText?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    duration?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    sortOrder?: Prisma.IntFilter<"Lesson"> | number;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    section?: Prisma.XOR<Prisma.SectionNullableScalarRelationFilter, Prisma.SectionWhereInput> | null;
    lessonCompletions?: Prisma.LessonCompletionListRelationFilter;
}, "id">;
export type LessonOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    contentText?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.LessonCountOrderByAggregateInput;
    _avg?: Prisma.LessonAvgOrderByAggregateInput;
    _max?: Prisma.LessonMaxOrderByAggregateInput;
    _min?: Prisma.LessonMinOrderByAggregateInput;
    _sum?: Prisma.LessonSumOrderByAggregateInput;
};
export type LessonScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonScalarWhereWithAggregatesInput | Prisma.LessonScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Lesson"> | number;
    courseId?: Prisma.IntWithAggregatesFilter<"Lesson"> | number;
    sectionId?: Prisma.IntNullableWithAggregatesFilter<"Lesson"> | number | null;
    title?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    contentType?: Prisma.StringWithAggregatesFilter<"Lesson"> | string;
    contentUrl?: Prisma.StringNullableWithAggregatesFilter<"Lesson"> | string | null;
    contentText?: Prisma.StringNullableWithAggregatesFilter<"Lesson"> | string | null;
    duration?: Prisma.IntNullableWithAggregatesFilter<"Lesson"> | number | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Lesson"> | number;
};
export type LessonCreateInput = {
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
    course: Prisma.CourseCreateNestedOneWithoutLessonsInput;
    section?: Prisma.SectionCreateNestedOneWithoutLessonsInput;
    lessonCompletions?: Prisma.LessonCompletionCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateInput = {
    id?: number;
    courseId: number;
    sectionId?: number | null;
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
    lessonCompletions?: Prisma.LessonCompletionUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    course?: Prisma.CourseUpdateOneRequiredWithoutLessonsNestedInput;
    section?: Prisma.SectionUpdateOneWithoutLessonsNestedInput;
    lessonCompletions?: Prisma.LessonCompletionUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    sectionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonCompletions?: Prisma.LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonCreateManyInput = {
    id?: number;
    courseId: number;
    sectionId?: number | null;
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
};
export type LessonUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LessonUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    sectionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LessonListRelationFilter = {
    every?: Prisma.LessonWhereInput;
    some?: Prisma.LessonWhereInput;
    none?: Prisma.LessonWhereInput;
};
export type LessonOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonOrderByRelevanceInput = {
    fields: Prisma.LessonOrderByRelevanceFieldEnum | Prisma.LessonOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type LessonCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrder;
    contentText?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type LessonAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type LessonMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrder;
    contentText?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type LessonMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    contentType?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrder;
    contentText?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type LessonSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type LessonScalarRelationFilter = {
    is?: Prisma.LessonWhereInput;
    isNot?: Prisma.LessonWhereInput;
};
export type LessonCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutCourseInput, Prisma.LessonUncheckedCreateWithoutCourseInput> | Prisma.LessonCreateWithoutCourseInput[] | Prisma.LessonUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutCourseInput | Prisma.LessonCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.LessonCreateManyCourseInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutCourseInput, Prisma.LessonUncheckedCreateWithoutCourseInput> | Prisma.LessonCreateWithoutCourseInput[] | Prisma.LessonUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutCourseInput | Prisma.LessonCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.LessonCreateManyCourseInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutCourseInput, Prisma.LessonUncheckedCreateWithoutCourseInput> | Prisma.LessonCreateWithoutCourseInput[] | Prisma.LessonUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutCourseInput | Prisma.LessonCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutCourseInput | Prisma.LessonUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.LessonCreateManyCourseInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutCourseInput | Prisma.LessonUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutCourseInput | Prisma.LessonUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutCourseInput, Prisma.LessonUncheckedCreateWithoutCourseInput> | Prisma.LessonCreateWithoutCourseInput[] | Prisma.LessonUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutCourseInput | Prisma.LessonCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutCourseInput | Prisma.LessonUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.LessonCreateManyCourseInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutCourseInput | Prisma.LessonUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutCourseInput | Prisma.LessonUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSectionInput, Prisma.LessonUncheckedCreateWithoutSectionInput> | Prisma.LessonCreateWithoutSectionInput[] | Prisma.LessonUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSectionInput | Prisma.LessonCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.LessonCreateManySectionInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUncheckedCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSectionInput, Prisma.LessonUncheckedCreateWithoutSectionInput> | Prisma.LessonCreateWithoutSectionInput[] | Prisma.LessonUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSectionInput | Prisma.LessonCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.LessonCreateManySectionInputEnvelope;
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
};
export type LessonUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSectionInput, Prisma.LessonUncheckedCreateWithoutSectionInput> | Prisma.LessonCreateWithoutSectionInput[] | Prisma.LessonUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSectionInput | Prisma.LessonCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutSectionInput | Prisma.LessonUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.LessonCreateManySectionInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutSectionInput | Prisma.LessonUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutSectionInput | Prisma.LessonUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutSectionInput, Prisma.LessonUncheckedCreateWithoutSectionInput> | Prisma.LessonCreateWithoutSectionInput[] | Prisma.LessonUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutSectionInput | Prisma.LessonCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.LessonUpsertWithWhereUniqueWithoutSectionInput | Prisma.LessonUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.LessonCreateManySectionInputEnvelope;
    set?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    disconnect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    delete?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    connect?: Prisma.LessonWhereUniqueInput | Prisma.LessonWhereUniqueInput[];
    update?: Prisma.LessonUpdateWithWhereUniqueWithoutSectionInput | Prisma.LessonUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.LessonUpdateManyWithWhereWithoutSectionInput | Prisma.LessonUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
};
export type LessonCreateNestedOneWithoutLessonCompletionsInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutLessonCompletionsInput, Prisma.LessonUncheckedCreateWithoutLessonCompletionsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutLessonCompletionsInput;
    connect?: Prisma.LessonWhereUniqueInput;
};
export type LessonUpdateOneRequiredWithoutLessonCompletionsNestedInput = {
    create?: Prisma.XOR<Prisma.LessonCreateWithoutLessonCompletionsInput, Prisma.LessonUncheckedCreateWithoutLessonCompletionsInput>;
    connectOrCreate?: Prisma.LessonCreateOrConnectWithoutLessonCompletionsInput;
    upsert?: Prisma.LessonUpsertWithoutLessonCompletionsInput;
    connect?: Prisma.LessonWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LessonUpdateToOneWithWhereWithoutLessonCompletionsInput, Prisma.LessonUpdateWithoutLessonCompletionsInput>, Prisma.LessonUncheckedUpdateWithoutLessonCompletionsInput>;
};
export type LessonCreateWithoutCourseInput = {
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
    section?: Prisma.SectionCreateNestedOneWithoutLessonsInput;
    lessonCompletions?: Prisma.LessonCompletionCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutCourseInput = {
    id?: number;
    sectionId?: number | null;
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
    lessonCompletions?: Prisma.LessonCompletionUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutCourseInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutCourseInput, Prisma.LessonUncheckedCreateWithoutCourseInput>;
};
export type LessonCreateManyCourseInputEnvelope = {
    data: Prisma.LessonCreateManyCourseInput | Prisma.LessonCreateManyCourseInput[];
    skipDuplicates?: boolean;
};
export type LessonUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.LessonWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonUpdateWithoutCourseInput, Prisma.LessonUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutCourseInput, Prisma.LessonUncheckedCreateWithoutCourseInput>;
};
export type LessonUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.LessonWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutCourseInput, Prisma.LessonUncheckedUpdateWithoutCourseInput>;
};
export type LessonUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.LessonScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyWithoutCourseInput>;
};
export type LessonScalarWhereInput = {
    AND?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    OR?: Prisma.LessonScalarWhereInput[];
    NOT?: Prisma.LessonScalarWhereInput | Prisma.LessonScalarWhereInput[];
    id?: Prisma.IntFilter<"Lesson"> | number;
    courseId?: Prisma.IntFilter<"Lesson"> | number;
    sectionId?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    title?: Prisma.StringFilter<"Lesson"> | string;
    contentType?: Prisma.StringFilter<"Lesson"> | string;
    contentUrl?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    contentText?: Prisma.StringNullableFilter<"Lesson"> | string | null;
    duration?: Prisma.IntNullableFilter<"Lesson"> | number | null;
    sortOrder?: Prisma.IntFilter<"Lesson"> | number;
};
export type LessonCreateWithoutSectionInput = {
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
    course: Prisma.CourseCreateNestedOneWithoutLessonsInput;
    lessonCompletions?: Prisma.LessonCompletionCreateNestedManyWithoutLessonInput;
};
export type LessonUncheckedCreateWithoutSectionInput = {
    id?: number;
    courseId: number;
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
    lessonCompletions?: Prisma.LessonCompletionUncheckedCreateNestedManyWithoutLessonInput;
};
export type LessonCreateOrConnectWithoutSectionInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutSectionInput, Prisma.LessonUncheckedCreateWithoutSectionInput>;
};
export type LessonCreateManySectionInputEnvelope = {
    data: Prisma.LessonCreateManySectionInput | Prisma.LessonCreateManySectionInput[];
    skipDuplicates?: boolean;
};
export type LessonUpsertWithWhereUniqueWithoutSectionInput = {
    where: Prisma.LessonWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonUpdateWithoutSectionInput, Prisma.LessonUncheckedUpdateWithoutSectionInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutSectionInput, Prisma.LessonUncheckedCreateWithoutSectionInput>;
};
export type LessonUpdateWithWhereUniqueWithoutSectionInput = {
    where: Prisma.LessonWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutSectionInput, Prisma.LessonUncheckedUpdateWithoutSectionInput>;
};
export type LessonUpdateManyWithWhereWithoutSectionInput = {
    where: Prisma.LessonScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyWithoutSectionInput>;
};
export type LessonCreateWithoutLessonCompletionsInput = {
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
    course: Prisma.CourseCreateNestedOneWithoutLessonsInput;
    section?: Prisma.SectionCreateNestedOneWithoutLessonsInput;
};
export type LessonUncheckedCreateWithoutLessonCompletionsInput = {
    id?: number;
    courseId: number;
    sectionId?: number | null;
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
};
export type LessonCreateOrConnectWithoutLessonCompletionsInput = {
    where: Prisma.LessonWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonCreateWithoutLessonCompletionsInput, Prisma.LessonUncheckedCreateWithoutLessonCompletionsInput>;
};
export type LessonUpsertWithoutLessonCompletionsInput = {
    update: Prisma.XOR<Prisma.LessonUpdateWithoutLessonCompletionsInput, Prisma.LessonUncheckedUpdateWithoutLessonCompletionsInput>;
    create: Prisma.XOR<Prisma.LessonCreateWithoutLessonCompletionsInput, Prisma.LessonUncheckedCreateWithoutLessonCompletionsInput>;
    where?: Prisma.LessonWhereInput;
};
export type LessonUpdateToOneWithWhereWithoutLessonCompletionsInput = {
    where?: Prisma.LessonWhereInput;
    data: Prisma.XOR<Prisma.LessonUpdateWithoutLessonCompletionsInput, Prisma.LessonUncheckedUpdateWithoutLessonCompletionsInput>;
};
export type LessonUpdateWithoutLessonCompletionsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    course?: Prisma.CourseUpdateOneRequiredWithoutLessonsNestedInput;
    section?: Prisma.SectionUpdateOneWithoutLessonsNestedInput;
};
export type LessonUncheckedUpdateWithoutLessonCompletionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    sectionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LessonCreateManyCourseInput = {
    id?: number;
    sectionId?: number | null;
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
};
export type LessonUpdateWithoutCourseInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    section?: Prisma.SectionUpdateOneWithoutLessonsNestedInput;
    lessonCompletions?: Prisma.LessonCompletionUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutCourseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sectionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonCompletions?: Prisma.LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateManyWithoutCourseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sectionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LessonCreateManySectionInput = {
    id?: number;
    courseId: number;
    title: string;
    contentType: string;
    contentUrl?: string | null;
    contentText?: string | null;
    duration?: number | null;
    sortOrder?: number;
};
export type LessonUpdateWithoutSectionInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    course?: Prisma.CourseUpdateOneRequiredWithoutLessonsNestedInput;
    lessonCompletions?: Prisma.LessonCompletionUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateWithoutSectionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    lessonCompletions?: Prisma.LessonCompletionUncheckedUpdateManyWithoutLessonNestedInput;
};
export type LessonUncheckedUpdateManyWithoutSectionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    contentType?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contentText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type LessonCountOutputType
 */
export type LessonCountOutputType = {
    lessonCompletions: number;
};
export type LessonCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lessonCompletions?: boolean | LessonCountOutputTypeCountLessonCompletionsArgs;
};
/**
 * LessonCountOutputType without action
 */
export type LessonCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: Prisma.LessonCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LessonCountOutputType without action
 */
export type LessonCountOutputTypeCountLessonCompletionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonCompletionWhereInput;
};
export type LessonSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    courseId?: boolean;
    sectionId?: boolean;
    title?: boolean;
    contentType?: boolean;
    contentUrl?: boolean;
    contentText?: boolean;
    duration?: boolean;
    sortOrder?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.Lesson$sectionArgs<ExtArgs>;
    lessonCompletions?: boolean | Prisma.Lesson$lessonCompletionsArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lesson"]>;
export type LessonSelectScalar = {
    id?: boolean;
    courseId?: boolean;
    sectionId?: boolean;
    title?: boolean;
    contentType?: boolean;
    contentUrl?: boolean;
    contentText?: boolean;
    duration?: boolean;
    sortOrder?: boolean;
};
export type LessonOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "courseId" | "sectionId" | "title" | "contentType" | "contentUrl" | "contentText" | "duration" | "sortOrder", ExtArgs["result"]["lesson"]>;
export type LessonInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    section?: boolean | Prisma.Lesson$sectionArgs<ExtArgs>;
    lessonCompletions?: boolean | Prisma.Lesson$lessonCompletionsArgs<ExtArgs>;
    _count?: boolean | Prisma.LessonCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $LessonPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lesson";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        section: Prisma.$SectionPayload<ExtArgs> | null;
        lessonCompletions: Prisma.$LessonCompletionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        courseId: number;
        sectionId: number | null;
        title: string;
        contentType: string;
        contentUrl: string | null;
        contentText: string | null;
        duration: number | null;
        sortOrder: number;
    }, ExtArgs["result"]["lesson"]>;
    composites: {};
};
export type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonPayload, S>;
export type LessonCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonCountAggregateInputType | true;
};
export interface LessonDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lesson'];
        meta: {
            name: 'Lesson';
        };
    };
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     *
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LessonFindManyArgs>(args?: Prisma.SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     *
     */
    create<T extends LessonCreateArgs>(args: Prisma.SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LessonCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     *
     */
    delete<T extends LessonDeleteArgs>(args: Prisma.SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LessonUpdateArgs>(args: Prisma.SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LessonUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: Prisma.SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(args?: Prisma.Subset<T, LessonCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Prisma.Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>;
    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LessonGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Lesson model
     */
    readonly fields: LessonFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Lesson.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LessonClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    section<T extends Prisma.Lesson$sectionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$sectionArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lessonCompletions<T extends Prisma.Lesson$lessonCompletionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lesson$lessonCompletionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonCompletionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Lesson model
 */
export interface LessonFieldRefs {
    readonly id: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly courseId: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly sectionId: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly title: Prisma.FieldRef<"Lesson", 'String'>;
    readonly contentType: Prisma.FieldRef<"Lesson", 'String'>;
    readonly contentUrl: Prisma.FieldRef<"Lesson", 'String'>;
    readonly contentText: Prisma.FieldRef<"Lesson", 'String'>;
    readonly duration: Prisma.FieldRef<"Lesson", 'Int'>;
    readonly sortOrder: Prisma.FieldRef<"Lesson", 'Int'>;
}
/**
 * Lesson findUnique
 */
export type LessonFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lesson to fetch.
     */
    where: Prisma.LessonWhereUniqueInput;
};
/**
 * Lesson findUniqueOrThrow
 */
export type LessonFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lesson to fetch.
     */
    where: Prisma.LessonWhereUniqueInput;
};
/**
 * Lesson findFirst
 */
export type LessonFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lesson to fetch.
     */
    where?: Prisma.LessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lessons to fetch.
     */
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lessons.
     */
    cursor?: Prisma.LessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lessons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lessons.
     */
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
/**
 * Lesson findFirstOrThrow
 */
export type LessonFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lesson to fetch.
     */
    where?: Prisma.LessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lessons to fetch.
     */
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lessons.
     */
    cursor?: Prisma.LessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lessons.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lessons.
     */
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
/**
 * Lesson findMany
 */
export type LessonFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lessons to fetch.
     */
    where?: Prisma.LessonWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lessons to fetch.
     */
    orderBy?: Prisma.LessonOrderByWithRelationInput | Prisma.LessonOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Lessons.
     */
    cursor?: Prisma.LessonWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lessons.
     */
    skip?: number;
    distinct?: Prisma.LessonScalarFieldEnum | Prisma.LessonScalarFieldEnum[];
};
/**
 * Lesson create
 */
export type LessonCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Lesson.
     */
    data: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
};
/**
 * Lesson createMany
 */
export type LessonCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: Prisma.LessonCreateManyInput | Prisma.LessonCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Lesson update
 */
export type LessonUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Lesson.
     */
    data: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
    /**
     * Choose, which Lesson to update.
     */
    where: Prisma.LessonWhereUniqueInput;
};
/**
 * Lesson updateMany
 */
export type LessonUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: Prisma.XOR<Prisma.LessonUpdateManyMutationInput, Prisma.LessonUncheckedUpdateManyInput>;
    /**
     * Filter which Lessons to update
     */
    where?: Prisma.LessonWhereInput;
    /**
     * Limit how many Lessons to update.
     */
    limit?: number;
};
/**
 * Lesson upsert
 */
export type LessonUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: Prisma.LessonWhereUniqueInput;
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: Prisma.XOR<Prisma.LessonCreateInput, Prisma.LessonUncheckedCreateInput>;
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LessonUpdateInput, Prisma.LessonUncheckedUpdateInput>;
};
/**
 * Lesson delete
 */
export type LessonDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Lesson to delete.
     */
    where: Prisma.LessonWhereUniqueInput;
};
/**
 * Lesson deleteMany
 */
export type LessonDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: Prisma.LessonWhereInput;
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number;
};
/**
 * Lesson.section
 */
export type Lesson$sectionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Lesson.lessonCompletions
 */
export type Lesson$lessonCompletionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCompletion
     */
    select?: Prisma.LessonCompletionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LessonCompletion
     */
    omit?: Prisma.LessonCompletionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LessonCompletionInclude<ExtArgs> | null;
    where?: Prisma.LessonCompletionWhereInput;
    orderBy?: Prisma.LessonCompletionOrderByWithRelationInput | Prisma.LessonCompletionOrderByWithRelationInput[];
    cursor?: Prisma.LessonCompletionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonCompletionScalarFieldEnum | Prisma.LessonCompletionScalarFieldEnum[];
};
/**
 * Lesson without action
 */
export type LessonDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Lesson.d.ts.map