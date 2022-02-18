export interface CollectionMeta {
  title: string;
  description: string;
}

export interface CollectionPhotos {
  alt_description: null;
  blur_hash: string;
  color: string;
  created_at: string;
  height: number;
  width: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  updated_at: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    links: {
      followers: string;
      following: string;
      html: string;
      likes: string;
      photos: string;
      portfolio: string;
      self: string;
    };
  };
}
