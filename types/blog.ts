export interface IBlogProps {
  slug: string;
  title: string;
  excerpt: string;
  displayPicture: {
    url: string;
  };
  imageCredit: {
    html: string;
  };
  theProcess: {
    html: string;
  };
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
  date: string;
  highlight: string;
}
