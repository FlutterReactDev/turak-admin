import clsx from "clsx";
import { Download } from "lucide-react";
import { useRef, useState } from "react";

type FileUploadFieldProps = {
  onFileChosen: (files: File[]) => void;
  filetypes: string[];
  errorMessage?: string;
  placeholder?: React.ReactElement | string;
  className?: string;
  multiple?: boolean;
  text?: React.ReactElement | string;
};

const defaultText = (
  <div className="flex flex-col items-center gap-2">
    <div className="flex gap-2">
      <Download />
      <h4 className="text-lg">Импортировать файлы</h4>
    </div>

    <span>Перетащите сюда файлы или выберите на устройстве</span>
  </div>
);

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  onFileChosen,
  filetypes,
  errorMessage,
  className,
  text = defaultText,
  placeholder = "",
  multiple = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileUploadError, setFileUploadError] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList) {
      onFileChosen(Array.from(fileList));
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setFileUploadError(false);

    e.preventDefault();

    const files: File[] = [];

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          if (file && filetypes.indexOf(file.type) > -1) {
            files.push(file);
          }
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)ц
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        if (filetypes.indexOf(e.dataTransfer.files[i].type) > -1) {
          files.push(e.dataTransfer.files[i]);
        }
      }
    }

    onFileChosen(files);
  };

  return (
    <div
      onClick={() => inputRef?.current?.click()}
      onDrop={handleFileDrop}
      onDragOver={(e) => e.preventDefault()}
      className={clsx(
        " text-grey-50 rounded-lg border-grey-20 hover:border-violet-60 hover:text-grey-40 flex h-full w-full cursor-pointer select-none flex-col items-center justify-center border-4 border-dashed transition-colors",
        className
      )}
    >
      <div className="flex flex-col items-center">
        <p>{text}</p>
        {placeholder}
      </div>
      {fileUploadError && (
        <span className="text-rose-60">
          {errorMessage || "Please upload an image file"}
        </span>
      )}
      <input
        ref={inputRef}
        accept={filetypes.join(", ")}
        multiple={multiple}
        type="file"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default FileUploadField;
