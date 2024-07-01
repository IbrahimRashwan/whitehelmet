import { IStatisticsItemSizeType } from "../enums/statistics.enum";

export interface IStatisticsItem {
  title?:string,
  showActions?:boolean,
  count:number,
  countTitle:string,
  hint?:string,
  hintCount?:number,
  countColor:string
  bgColor?:string,
  itemSize?:IStatisticsItemSizeType,
}
