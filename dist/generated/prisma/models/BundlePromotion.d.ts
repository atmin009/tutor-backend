import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BundlePromotion
 *
 */
export type BundlePromotionModel = runtime.Types.Result.DefaultSelection<Prisma.$BundlePromotionPayload>;
export type AggregateBundlePromotion = {
    _count: BundlePromotionCountAggregateOutputType | null;
    _avg: BundlePromotionAvgAggregateOutputType | null;
    _sum: BundlePromotionSumAggregateOutputType | null;
    _min: BundlePromotionMinAggregateOutputType | null;
    _max: BundlePromotionMaxAggregateOutputType | null;
};
export type BundlePromotionAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
    maxCourses: number | null;
};
export type BundlePromotionSumAggregateOutputType = {
    id: number | null;
    price: number | null;
    maxCourses: number | null;
};
export type BundlePromotionMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    price: number | null;
    status: string | null;
    courseIds: string | null;
    maxCourses: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BundlePromotionMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    price: number | null;
    status: string | null;
    courseIds: string | null;
    maxCourses: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BundlePromotionCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    status: number;
    courseIds: number;
    maxCourses: number;
    startsAt: number;
    endsAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BundlePromotionAvgAggregateInputType = {
    id?: true;
    price?: true;
    maxCourses?: true;
};
export type BundlePromotionSumAggregateInputType = {
    id?: true;
    price?: true;
    maxCourses?: true;
};
export type BundlePromotionMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    status?: true;
    courseIds?: true;
    maxCourses?: true;
    startsAt?: true;
    endsAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BundlePromotionMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    status?: true;
    courseIds?: true;
    maxCourses?: true;
    startsAt?: true;
    endsAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BundlePromotionCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    status?: true;
    courseIds?: true;
    maxCourses?: true;
    startsAt?: true;
    endsAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BundlePromotionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BundlePromotion to aggregate.
     */
    where?: Prisma.BundlePromotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BundlePromotions to fetch.
     */
    orderBy?: Prisma.BundlePromotionOrderByWithRelationInput | Prisma.BundlePromotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BundlePromotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BundlePromotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BundlePromotions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BundlePromotions
    **/
    _count?: true | BundlePromotionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BundlePromotionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BundlePromotionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BundlePromotionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BundlePromotionMaxAggregateInputType;
};
export type GetBundlePromotionAggregateType<T extends BundlePromotionAggregateArgs> = {
    [P in keyof T & keyof AggregateBundlePromotion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBundlePromotion[P]> : Prisma.GetScalarType<T[P], AggregateBundlePromotion[P]>;
};
export type BundlePromotionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BundlePromotionWhereInput;
    orderBy?: Prisma.BundlePromotionOrderByWithAggregationInput | Prisma.BundlePromotionOrderByWithAggregationInput[];
    by: Prisma.BundlePromotionScalarFieldEnum[] | Prisma.BundlePromotionScalarFieldEnum;
    having?: Prisma.BundlePromotionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BundlePromotionCountAggregateInputType | true;
    _avg?: BundlePromotionAvgAggregateInputType;
    _sum?: BundlePromotionSumAggregateInputType;
    _min?: BundlePromotionMinAggregateInputType;
    _max?: BundlePromotionMaxAggregateInputType;
};
export type BundlePromotionGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    price: number;
    status: string;
    courseIds: string;
    maxCourses: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BundlePromotionCountAggregateOutputType | null;
    _avg: BundlePromotionAvgAggregateOutputType | null;
    _sum: BundlePromotionSumAggregateOutputType | null;
    _min: BundlePromotionMinAggregateOutputType | null;
    _max: BundlePromotionMaxAggregateOutputType | null;
};
type GetBundlePromotionGroupByPayload<T extends BundlePromotionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BundlePromotionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BundlePromotionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BundlePromotionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BundlePromotionGroupByOutputType[P]>;
}>>;
export type BundlePromotionWhereInput = {
    AND?: Prisma.BundlePromotionWhereInput | Prisma.BundlePromotionWhereInput[];
    OR?: Prisma.BundlePromotionWhereInput[];
    NOT?: Prisma.BundlePromotionWhereInput | Prisma.BundlePromotionWhereInput[];
    id?: Prisma.IntFilter<"BundlePromotion"> | number;
    name?: Prisma.StringFilter<"BundlePromotion"> | string;
    description?: Prisma.StringNullableFilter<"BundlePromotion"> | string | null;
    price?: Prisma.FloatFilter<"BundlePromotion"> | number;
    status?: Prisma.StringFilter<"BundlePromotion"> | string;
    courseIds?: Prisma.StringFilter<"BundlePromotion"> | string;
    maxCourses?: Prisma.IntNullableFilter<"BundlePromotion"> | number | null;
    startsAt?: Prisma.DateTimeNullableFilter<"BundlePromotion"> | Date | string | null;
    endsAt?: Prisma.DateTimeNullableFilter<"BundlePromotion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BundlePromotion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BundlePromotion"> | Date | string;
};
export type BundlePromotionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    courseIds?: Prisma.SortOrder;
    maxCourses?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.BundlePromotionOrderByRelevanceInput;
};
export type BundlePromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BundlePromotionWhereInput | Prisma.BundlePromotionWhereInput[];
    OR?: Prisma.BundlePromotionWhereInput[];
    NOT?: Prisma.BundlePromotionWhereInput | Prisma.BundlePromotionWhereInput[];
    name?: Prisma.StringFilter<"BundlePromotion"> | string;
    description?: Prisma.StringNullableFilter<"BundlePromotion"> | string | null;
    price?: Prisma.FloatFilter<"BundlePromotion"> | number;
    status?: Prisma.StringFilter<"BundlePromotion"> | string;
    courseIds?: Prisma.StringFilter<"BundlePromotion"> | string;
    maxCourses?: Prisma.IntNullableFilter<"BundlePromotion"> | number | null;
    startsAt?: Prisma.DateTimeNullableFilter<"BundlePromotion"> | Date | string | null;
    endsAt?: Prisma.DateTimeNullableFilter<"BundlePromotion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BundlePromotion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BundlePromotion"> | Date | string;
}, "id">;
export type BundlePromotionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    courseIds?: Prisma.SortOrder;
    maxCourses?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BundlePromotionCountOrderByAggregateInput;
    _avg?: Prisma.BundlePromotionAvgOrderByAggregateInput;
    _max?: Prisma.BundlePromotionMaxOrderByAggregateInput;
    _min?: Prisma.BundlePromotionMinOrderByAggregateInput;
    _sum?: Prisma.BundlePromotionSumOrderByAggregateInput;
};
export type BundlePromotionScalarWhereWithAggregatesInput = {
    AND?: Prisma.BundlePromotionScalarWhereWithAggregatesInput | Prisma.BundlePromotionScalarWhereWithAggregatesInput[];
    OR?: Prisma.BundlePromotionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BundlePromotionScalarWhereWithAggregatesInput | Prisma.BundlePromotionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BundlePromotion"> | number;
    name?: Prisma.StringWithAggregatesFilter<"BundlePromotion"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"BundlePromotion"> | string | null;
    price?: Prisma.FloatWithAggregatesFilter<"BundlePromotion"> | number;
    status?: Prisma.StringWithAggregatesFilter<"BundlePromotion"> | string;
    courseIds?: Prisma.StringWithAggregatesFilter<"BundlePromotion"> | string;
    maxCourses?: Prisma.IntNullableWithAggregatesFilter<"BundlePromotion"> | number | null;
    startsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BundlePromotion"> | Date | string | null;
    endsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BundlePromotion"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BundlePromotion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BundlePromotion"> | Date | string;
};
export type BundlePromotionCreateInput = {
    name: string;
    description?: string | null;
    price: number;
    status?: string;
    courseIds: string;
    maxCourses?: number | null;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BundlePromotionUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    price: number;
    status?: string;
    courseIds: string;
    maxCourses?: number | null;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BundlePromotionUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    courseIds?: Prisma.StringFieldUpdateOperationsInput | string;
    maxCourses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BundlePromotionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    courseIds?: Prisma.StringFieldUpdateOperationsInput | string;
    maxCourses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BundlePromotionCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
    price: number;
    status?: string;
    courseIds: string;
    maxCourses?: number | null;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BundlePromotionUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    courseIds?: Prisma.StringFieldUpdateOperationsInput | string;
    maxCourses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BundlePromotionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    courseIds?: Prisma.StringFieldUpdateOperationsInput | string;
    maxCourses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BundlePromotionOrderByRelevanceInput = {
    fields: Prisma.BundlePromotionOrderByRelevanceFieldEnum | Prisma.BundlePromotionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BundlePromotionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    courseIds?: Prisma.SortOrder;
    maxCourses?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BundlePromotionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    maxCourses?: Prisma.SortOrder;
};
export type BundlePromotionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    courseIds?: Prisma.SortOrder;
    maxCourses?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BundlePromotionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    courseIds?: Prisma.SortOrder;
    maxCourses?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BundlePromotionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    maxCourses?: Prisma.SortOrder;
};
export type BundlePromotionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    status?: boolean;
    courseIds?: boolean;
    maxCourses?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["bundlePromotion"]>;
export type BundlePromotionSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    status?: boolean;
    courseIds?: boolean;
    maxCourses?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BundlePromotionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "price" | "status" | "courseIds" | "maxCourses" | "startsAt" | "endsAt" | "createdAt" | "updatedAt", ExtArgs["result"]["bundlePromotion"]>;
export type $BundlePromotionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BundlePromotion";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
        price: number;
        status: string;
        courseIds: string;
        maxCourses: number | null;
        startsAt: Date | null;
        endsAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["bundlePromotion"]>;
    composites: {};
};
export type BundlePromotionGetPayload<S extends boolean | null | undefined | BundlePromotionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload, S>;
export type BundlePromotionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BundlePromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BundlePromotionCountAggregateInputType | true;
};
export interface BundlePromotionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BundlePromotion'];
        meta: {
            name: 'BundlePromotion';
        };
    };
    /**
     * Find zero or one BundlePromotion that matches the filter.
     * @param {BundlePromotionFindUniqueArgs} args - Arguments to find a BundlePromotion
     * @example
     * // Get one BundlePromotion
     * const bundlePromotion = await prisma.bundlePromotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BundlePromotionFindUniqueArgs>(args: Prisma.SelectSubset<T, BundlePromotionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BundlePromotionClient<runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BundlePromotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BundlePromotionFindUniqueOrThrowArgs} args - Arguments to find a BundlePromotion
     * @example
     * // Get one BundlePromotion
     * const bundlePromotion = await prisma.bundlePromotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BundlePromotionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BundlePromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BundlePromotionClient<runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BundlePromotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlePromotionFindFirstArgs} args - Arguments to find a BundlePromotion
     * @example
     * // Get one BundlePromotion
     * const bundlePromotion = await prisma.bundlePromotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BundlePromotionFindFirstArgs>(args?: Prisma.SelectSubset<T, BundlePromotionFindFirstArgs<ExtArgs>>): Prisma.Prisma__BundlePromotionClient<runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BundlePromotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlePromotionFindFirstOrThrowArgs} args - Arguments to find a BundlePromotion
     * @example
     * // Get one BundlePromotion
     * const bundlePromotion = await prisma.bundlePromotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BundlePromotionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BundlePromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BundlePromotionClient<runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BundlePromotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlePromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BundlePromotions
     * const bundlePromotions = await prisma.bundlePromotion.findMany()
     *
     * // Get first 10 BundlePromotions
     * const bundlePromotions = await prisma.bundlePromotion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bundlePromotionWithIdOnly = await prisma.bundlePromotion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BundlePromotionFindManyArgs>(args?: Prisma.SelectSubset<T, BundlePromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BundlePromotion.
     * @param {BundlePromotionCreateArgs} args - Arguments to create a BundlePromotion.
     * @example
     * // Create one BundlePromotion
     * const BundlePromotion = await prisma.bundlePromotion.create({
     *   data: {
     *     // ... data to create a BundlePromotion
     *   }
     * })
     *
     */
    create<T extends BundlePromotionCreateArgs>(args: Prisma.SelectSubset<T, BundlePromotionCreateArgs<ExtArgs>>): Prisma.Prisma__BundlePromotionClient<runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BundlePromotions.
     * @param {BundlePromotionCreateManyArgs} args - Arguments to create many BundlePromotions.
     * @example
     * // Create many BundlePromotions
     * const bundlePromotion = await prisma.bundlePromotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BundlePromotionCreateManyArgs>(args?: Prisma.SelectSubset<T, BundlePromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a BundlePromotion.
     * @param {BundlePromotionDeleteArgs} args - Arguments to delete one BundlePromotion.
     * @example
     * // Delete one BundlePromotion
     * const BundlePromotion = await prisma.bundlePromotion.delete({
     *   where: {
     *     // ... filter to delete one BundlePromotion
     *   }
     * })
     *
     */
    delete<T extends BundlePromotionDeleteArgs>(args: Prisma.SelectSubset<T, BundlePromotionDeleteArgs<ExtArgs>>): Prisma.Prisma__BundlePromotionClient<runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BundlePromotion.
     * @param {BundlePromotionUpdateArgs} args - Arguments to update one BundlePromotion.
     * @example
     * // Update one BundlePromotion
     * const bundlePromotion = await prisma.bundlePromotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BundlePromotionUpdateArgs>(args: Prisma.SelectSubset<T, BundlePromotionUpdateArgs<ExtArgs>>): Prisma.Prisma__BundlePromotionClient<runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BundlePromotions.
     * @param {BundlePromotionDeleteManyArgs} args - Arguments to filter BundlePromotions to delete.
     * @example
     * // Delete a few BundlePromotions
     * const { count } = await prisma.bundlePromotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BundlePromotionDeleteManyArgs>(args?: Prisma.SelectSubset<T, BundlePromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BundlePromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlePromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BundlePromotions
     * const bundlePromotion = await prisma.bundlePromotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BundlePromotionUpdateManyArgs>(args: Prisma.SelectSubset<T, BundlePromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one BundlePromotion.
     * @param {BundlePromotionUpsertArgs} args - Arguments to update or create a BundlePromotion.
     * @example
     * // Update or create a BundlePromotion
     * const bundlePromotion = await prisma.bundlePromotion.upsert({
     *   create: {
     *     // ... data to create a BundlePromotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BundlePromotion we want to update
     *   }
     * })
     */
    upsert<T extends BundlePromotionUpsertArgs>(args: Prisma.SelectSubset<T, BundlePromotionUpsertArgs<ExtArgs>>): Prisma.Prisma__BundlePromotionClient<runtime.Types.Result.GetResult<Prisma.$BundlePromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BundlePromotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlePromotionCountArgs} args - Arguments to filter BundlePromotions to count.
     * @example
     * // Count the number of BundlePromotions
     * const count = await prisma.bundlePromotion.count({
     *   where: {
     *     // ... the filter for the BundlePromotions we want to count
     *   }
     * })
    **/
    count<T extends BundlePromotionCountArgs>(args?: Prisma.Subset<T, BundlePromotionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BundlePromotionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BundlePromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlePromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BundlePromotionAggregateArgs>(args: Prisma.Subset<T, BundlePromotionAggregateArgs>): Prisma.PrismaPromise<GetBundlePromotionAggregateType<T>>;
    /**
     * Group by BundlePromotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BundlePromotionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BundlePromotionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BundlePromotionGroupByArgs['orderBy'];
    } : {
        orderBy?: BundlePromotionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BundlePromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBundlePromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BundlePromotion model
     */
    readonly fields: BundlePromotionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BundlePromotion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BundlePromotionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the BundlePromotion model
 */
export interface BundlePromotionFieldRefs {
    readonly id: Prisma.FieldRef<"BundlePromotion", 'Int'>;
    readonly name: Prisma.FieldRef<"BundlePromotion", 'String'>;
    readonly description: Prisma.FieldRef<"BundlePromotion", 'String'>;
    readonly price: Prisma.FieldRef<"BundlePromotion", 'Float'>;
    readonly status: Prisma.FieldRef<"BundlePromotion", 'String'>;
    readonly courseIds: Prisma.FieldRef<"BundlePromotion", 'String'>;
    readonly maxCourses: Prisma.FieldRef<"BundlePromotion", 'Int'>;
    readonly startsAt: Prisma.FieldRef<"BundlePromotion", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"BundlePromotion", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"BundlePromotion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BundlePromotion", 'DateTime'>;
}
/**
 * BundlePromotion findUnique
 */
export type BundlePromotionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
    /**
     * Filter, which BundlePromotion to fetch.
     */
    where: Prisma.BundlePromotionWhereUniqueInput;
};
/**
 * BundlePromotion findUniqueOrThrow
 */
export type BundlePromotionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
    /**
     * Filter, which BundlePromotion to fetch.
     */
    where: Prisma.BundlePromotionWhereUniqueInput;
};
/**
 * BundlePromotion findFirst
 */
export type BundlePromotionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
    /**
     * Filter, which BundlePromotion to fetch.
     */
    where?: Prisma.BundlePromotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BundlePromotions to fetch.
     */
    orderBy?: Prisma.BundlePromotionOrderByWithRelationInput | Prisma.BundlePromotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BundlePromotions.
     */
    cursor?: Prisma.BundlePromotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BundlePromotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BundlePromotions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BundlePromotions.
     */
    distinct?: Prisma.BundlePromotionScalarFieldEnum | Prisma.BundlePromotionScalarFieldEnum[];
};
/**
 * BundlePromotion findFirstOrThrow
 */
export type BundlePromotionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
    /**
     * Filter, which BundlePromotion to fetch.
     */
    where?: Prisma.BundlePromotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BundlePromotions to fetch.
     */
    orderBy?: Prisma.BundlePromotionOrderByWithRelationInput | Prisma.BundlePromotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BundlePromotions.
     */
    cursor?: Prisma.BundlePromotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BundlePromotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BundlePromotions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BundlePromotions.
     */
    distinct?: Prisma.BundlePromotionScalarFieldEnum | Prisma.BundlePromotionScalarFieldEnum[];
};
/**
 * BundlePromotion findMany
 */
export type BundlePromotionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
    /**
     * Filter, which BundlePromotions to fetch.
     */
    where?: Prisma.BundlePromotionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BundlePromotions to fetch.
     */
    orderBy?: Prisma.BundlePromotionOrderByWithRelationInput | Prisma.BundlePromotionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BundlePromotions.
     */
    cursor?: Prisma.BundlePromotionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BundlePromotions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BundlePromotions.
     */
    skip?: number;
    distinct?: Prisma.BundlePromotionScalarFieldEnum | Prisma.BundlePromotionScalarFieldEnum[];
};
/**
 * BundlePromotion create
 */
export type BundlePromotionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
    /**
     * The data needed to create a BundlePromotion.
     */
    data: Prisma.XOR<Prisma.BundlePromotionCreateInput, Prisma.BundlePromotionUncheckedCreateInput>;
};
/**
 * BundlePromotion createMany
 */
export type BundlePromotionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BundlePromotions.
     */
    data: Prisma.BundlePromotionCreateManyInput | Prisma.BundlePromotionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BundlePromotion update
 */
export type BundlePromotionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
    /**
     * The data needed to update a BundlePromotion.
     */
    data: Prisma.XOR<Prisma.BundlePromotionUpdateInput, Prisma.BundlePromotionUncheckedUpdateInput>;
    /**
     * Choose, which BundlePromotion to update.
     */
    where: Prisma.BundlePromotionWhereUniqueInput;
};
/**
 * BundlePromotion updateMany
 */
export type BundlePromotionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BundlePromotions.
     */
    data: Prisma.XOR<Prisma.BundlePromotionUpdateManyMutationInput, Prisma.BundlePromotionUncheckedUpdateManyInput>;
    /**
     * Filter which BundlePromotions to update
     */
    where?: Prisma.BundlePromotionWhereInput;
    /**
     * Limit how many BundlePromotions to update.
     */
    limit?: number;
};
/**
 * BundlePromotion upsert
 */
export type BundlePromotionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
    /**
     * The filter to search for the BundlePromotion to update in case it exists.
     */
    where: Prisma.BundlePromotionWhereUniqueInput;
    /**
     * In case the BundlePromotion found by the `where` argument doesn't exist, create a new BundlePromotion with this data.
     */
    create: Prisma.XOR<Prisma.BundlePromotionCreateInput, Prisma.BundlePromotionUncheckedCreateInput>;
    /**
     * In case the BundlePromotion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BundlePromotionUpdateInput, Prisma.BundlePromotionUncheckedUpdateInput>;
};
/**
 * BundlePromotion delete
 */
export type BundlePromotionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
    /**
     * Filter which BundlePromotion to delete.
     */
    where: Prisma.BundlePromotionWhereUniqueInput;
};
/**
 * BundlePromotion deleteMany
 */
export type BundlePromotionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BundlePromotions to delete
     */
    where?: Prisma.BundlePromotionWhereInput;
    /**
     * Limit how many BundlePromotions to delete.
     */
    limit?: number;
};
/**
 * BundlePromotion without action
 */
export type BundlePromotionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BundlePromotion
     */
    select?: Prisma.BundlePromotionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BundlePromotion
     */
    omit?: Prisma.BundlePromotionOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=BundlePromotion.d.ts.map