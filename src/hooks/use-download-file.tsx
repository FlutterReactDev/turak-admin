export const useDownloadFile = () => {
  const download = (base64: string, filename: string) => {
    const a = document.createElement("a");
    a.href = base64;

    a.download = filename;

    a.click();
  };
  return {
    download,
  };
};
