export const columns = [
  { key: 'firstName', title: 'نام' },
  { key: 'lastName', title: 'نام خانوادگی' },
  { key: 'nationalId', title: 'کدملی' },
  {
    key: 'customerType',
    title: 'نوع مشتری',
    className: "tw-bg-indigo-500 tw-px-8 tw-py-2 tw-rounded-lg tw-text-white",
    customText: (value: any) => (value === 0 ? 'حقیقی' : "حقوقی")
  },
  {
    key: 'customerValidityId',
    title: 'نوع اعتبار',
    className: "tw-bg-green-500 tw-px-8 tw-py-2 tw-rounded-lg tw-text-white",
    customText: (value: any) => (value === 1 ? 'عادی' : value === 2 ? "VIP" : "سیاه")
  }, { key: 'mobile', title: 'موبایل' },
  { key: 'tel1', title: 'تلفن یک'},
  { key: 'tel2', title: 'تلفن دو' },
  { 
    key: 'isSupplier', 
    title: 'تامین کننده؟',
    className: "tw-bg-purple-500 tw-px-8 tw-py-2 tw-rounded-lg tw-text-white",
    customText: (value: any) => (value === false ? 'خیر' : "بله")
 },
  { key: 'address1', title: 'آدرس یک' },
  { key: 'address2', title: 'آدرس دو' },
  { key: 'representative', title: 'معرف' },
];