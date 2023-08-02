export const DownloadExcelFile = (response: any, outputFilename: string) => {
    const url = URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', outputFilename);
    document.body.appendChild(link);
    link.click();

    link.parentNode?.removeChild(link);
}