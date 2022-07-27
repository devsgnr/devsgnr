export interface IProjectProps {
  id: string;
  slug: string;
  title: string;
  role: string;
  coverPicture: {
    url: string;
  };
  coverPictureTwo: {
    url: string;
  };
  mainContent: {
    html: string;
  };
}
