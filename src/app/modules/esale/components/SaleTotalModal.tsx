import {FC, useEffect, useState} from 'react'
import Modal from './Modal'
import ProfessionalSelect from './ProfessionalSelect'
import RadioGroupSaleType from './RadioGroupSaleType'
import {
  useGetSaleDetailsReport,
  useGetSaleTotalExcel,
  useGetSaleTotalTypeDetails,
  useGetSaleTotalTypes,
} from '../_core/_hooks'
import {dropdownSaleTotalType, dropdownSaleTotalTypeDetails} from '../helpers/dropdownSaleTotalType'
import {TablesWidget1, TablesWidget9} from '../../../../_cloner/partials/widgets'
import {SaleTotalTable} from './SaleTotalTable'
import {DownloadExcelFile} from './DownloadExcel'
import {downloadTotalTypeExcel} from '../_core/_requests'

interface IProps {
  isOpen: boolean
  setIsOpen: any
  data?: any
}

const SaleTotalModal: FC<IProps> = ({isOpen, setIsOpen}) => {
  const [excelLoading, setExcelLoading] = useState(false)
  const [radioSelect, setRadioSelect] = useState(-1)
  const [totalTypesSelect, setTotalTypesSelect] = useState<any>({value: 2, label: 'فروش یکپارچه'})
  const [totalTypeDetailSelect, setTotalTypeDetailSelect] = useState<any>({value: 0, label: 'همه'})

  const {data: saleTotalTypes} = useGetSaleTotalTypes()

  const {mutate: totalDetails, data: saleTotalTypeDetails} = useGetSaleTotalTypeDetails()
  const {
    mutate: saleReport,
    data: saleReportData,
    isLoading,
    isError,
    status,
  } = useGetSaleDetailsReport()

  const onChangeTotalTypes = (selectOption: any) => {
    setTotalTypesSelect(selectOption)
    totalDetails(selectOption?.value)
    const formData = {
      saletypeId: selectOption?.value,
      saleTotalTypeDetailId: 0,
      isJavani: radioSelect,
    }
    saleReport(formData)
  }
  const onChangeTotalTypeDetail = (selectOption: any) => {
    setTotalTypeDetailSelect(selectOption)
    const formData = {
      saletypeId: totalTypesSelect?.value,
      saleTotalTypeDetailId: selectOption?.value,
      isJavani: radioSelect,
    }
    saleReport(formData)
  }

  const onChangeRadioSelect = (event: any) => {
    setRadioSelect(event.target.value)
    const formData = {
      saletypeId: totalTypesSelect?.value,
      saleTotalTypeDetailId: 0,
      isJavani: event.target.value,
    }
    saleReport(formData)
  }

  useEffect(() => {
    const formData = {
      saletypeId: 2,
      saleTotalTypeDetailId: 0,
      isJavani: -1,
    }
    saleReport(formData)
  }, [])

  const handleDownloadExcel = async () => {
    setExcelLoading(true)
    const formData = {
      saletypeId: totalTypesSelect?.value,
      saleTotalTypeDetailId: totalTypeDetailSelect?.value,
      isJavani: radioSelect,
    }
    try {
      const response = await downloadTotalTypeExcel(formData)
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
        <div className='md:grid md:grid-cols-2 md:gap-4 text-start'>
          <ProfessionalSelect
            options={dropdownSaleTotalType(saleTotalTypes)}
            onChange={onChangeTotalTypes}
            value={totalTypesSelect}
            defaultValue={{value: 2, label: 'فروش یکپارچه'}}
            placeholder=''
          />
          <ProfessionalSelect
            options={dropdownSaleTotalTypeDetails(saleTotalTypeDetails)}
            onChange={onChangeTotalTypeDetail}
            value={totalTypeDetailSelect}
            defaultValue={{value: 0, label: 'همه'}}
            placeholder=''
          />
        </div>
        <RadioGroupSaleType 
        onChange={onChangeRadioSelect}
        id="saleTotalTypeTables"
        key="saleTotalTypeTables"

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

        <SaleTotalTable
          className=''
          data={saleReportData}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
    </Modal>
  )
}

export default SaleTotalModal
