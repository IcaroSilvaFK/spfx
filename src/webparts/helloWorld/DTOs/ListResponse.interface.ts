export interface IResponseData {
  Title: string;
  situation: string;
  username: string;
  GUID: string;
  ID: number;
  Created: string;
  anime_cover: string;
}

export interface IStateData {
  Title: string;
  situation: string;
  username: string;
  GUID: string;
  ID: number;
  Created: string;
  image_cover: {
    serverRelativeUrl: string;
    serverUrl: string;
  };
}
