export interface SaleReportRequest {
  saletypeId: number
  saleTotalTypeDetailId: number
  isJavani: number
}
export interface SaleByProductReportRequest {
  saletypeId: number
  saleTotalTypeDetailId: number
  isJavani: number
  winnerType: number
}
export interface SaleByProductPriorityReportRequest {
  saletypeId: number
  saleTotalTypeDetailId: number
  priority: number
  isJavani: number
  winnerType: number
}
