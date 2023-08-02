import {FC, useEffect, useState} from 'react'
import Modal from './Modal'
import RadioGroupSaleType from './RadioGroupSaleType'
import {
  useGetSaleTotalDetailsReport,
} from '../_core/_hooks'
import { SaleTotalDetailTable } from './SaleTotalDetailTable'
import { DownloadExcelFile } from './DownloadExcel'
import { downloadTotalTypeDetailExcel } from '../_core/_requests'

interface IProps {
  isOpen: boolean
  setIsOpen: any
  data?: any
}

const SaleTotalDetailModal: FC<IProps> = ({isOpen, setIsOpen}) => {
  const [excelLoading, setExcelLoading] = useState(false)

  const [radioSelect, setRadioSelect] = useState(-1)

  const {mutate: saleReport, data: saleReportData, isLoading, isError} = useGetSaleTotalDetailsReport()


  const onChangeRadioSelect = (event: any) => {
    setRadioSelect(event.target.value)
    saleReport(event.target.value)
  }

  useEffect(() => {
      saleReport(-1)
  
  }, [])
  const handleDownloadExcel = async () => {
    setExcelLoading(true)
    try {
      const response = await downloadTotalTypeDetailExcel(radioSelect)
      const outputFilename = `SaleTotalType${Date.now()}.csv`
      DownloadExcelFile(response, outputFilename)
      setExcelLoading(false)
    } catch (error) {
      console.log(error)
      setExcelLoading(false)
    }
  }


  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className='container mt-4 mb-4'>
        <RadioGroupSaleType 
        onChange={onChangeRadioSelect}
        id="saleTotalTypeDetailTables"
        key="saleTotalTypeDetailTables"
/>
        <div className='flex justify-start items-start'>
          <button
            disabled={saleReportData === undefined}
            onClick={handleDownloadExcel}
            className='text-white rounded-lg bg-green-500 px-8 py-2'
          >
            {excelLoading ? 'در حال دانلود...' : 'دانلود خروجی اکسل'}
          </button>
        </div>

        <SaleTotalDetailTable className='' data={saleReportData} isError={isError} isLoading={isLoading} />
      </div>
    </Modal>
  )
}

export default SaleTotalDetailModal
