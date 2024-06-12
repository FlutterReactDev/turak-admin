export type FormImage = {
  url: string;
  name?: string;
  size?: number;
  nativeFile?: File;
};

export enum UploadMediaType {
  OBJECT = 1,
  ROOM = 2,
}

export interface UploadParams {
  uploadMediaType: UploadMediaType;
  ID: number;
}
