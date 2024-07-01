import { IStatisticsItemSizeType } from "../enums/statistics.enum";
import { IStatisticsItem } from "../models/statistics.model";

export const STATISTICS: IStatisticsItem[] = [
  {
    title: "Summary",
    count: 21,
    countTitle: "Due Tasks",
    countColor: "blue",
    hint:"Completed",
    hintCount: 13,
    showActions: true,
    itemSize: IStatisticsItemSizeType.LARGE
  },
  {
    title: "Overdue",
    count: 17,
    countTitle: "Tasks",
    countColor: "danger",
    hint:"From yesterday",
    hintCount: 9,
    showActions: true,
    itemSize: IStatisticsItemSizeType.LARGE
  },
  {
    title: "Issues",
    count: 24,
    countTitle: "Open",
    countColor: "warning",
    hint:"Closed Today",
    hintCount: 19,
    showActions: true,
    itemSize: IStatisticsItemSizeType.LARGE
  },
  {
    title: "Features",
    count: 38,
    countTitle: "Proposals",
    countColor: "success",
    hint:"Implemented",
    hintCount: 16,
    showActions: true,
    itemSize: IStatisticsItemSizeType.LARGE
  },
]
export const SUMMARY_HEADER_STATISTICS: IStatisticsItem[] = [
  {
    count: 214,
    countTitle: "New Issues",
    countColor: "purple",
    bgColor: "secondary-card",
    itemSize: IStatisticsItemSizeType.LARGE
  },
  {
    count: 75,
    countTitle: "Closed",
    countColor: "success",
    bgColor: "secondary-card",
    itemSize: IStatisticsItemSizeType.LARGE
  }
]
export const SUMMARY_FOOTER_STATISTICS: IStatisticsItem[] = [
  {
    count: 3,
    countTitle: "Fixed",
    countColor: "gray",
    bgColor: "secondary-card",
    itemSize: IStatisticsItemSizeType.MEDIUM
  },
  {
    count: 4,
    countTitle: "Won`t Fix",
    countColor: "gray",
    bgColor: "secondary-card",
    itemSize: IStatisticsItemSizeType.MEDIUM
   },
  {
    count: 8,
    countTitle: "Re-opend",
    countColor: "gray",
    bgColor: "secondary-card",
    itemSize: IStatisticsItemSizeType.MEDIUM
  },
  {
    count: 6,
    countTitle: "Needs Triage",
    countColor: "gray",
    bgColor: "secondary-card",
    itemSize: IStatisticsItemSizeType.MEDIUM
  },
]
