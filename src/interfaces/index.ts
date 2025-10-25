export interface introduceCard {
  header?: string;
  description?: string;
  className?: string;
}

export interface sectionCard {
  content?: string;
  className?: string;
  imgUrl?: string;
}

export interface eclipse {
  imageUrl: string;
}

export interface circle {
  className?: string;
  width?: string;
  height?: string;
  // backgroundColor?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface contact {
  className?: string;
  style?: React.CSSProperties;
}

export interface ticket {
  // className
  className?: string;
  // Hình ảnh chính
  imageURL?: string;
  // Nền 1
  backgroundImageURL?: string;
  // Tiêu đề
  header?: string;
  // Mô tả
  description?: string;
  // className dành cho hình ảnh chính
  classNameForImg?: string;
  // className dành cho nền 1
  classNameForBgImg?: string;
  // Decor style cho nền 1
  bgImgStyle?: React.CSSProperties;
  // Decor style cho ảnh chính
  imgStyle?: React.CSSProperties;
  // Nền 2
  classNameForAfterBgImg?: string;
  // Decor style cho nền 2
  afterBgImgStyle?: React.CSSProperties;
  afterBgImageURL?: string;
  classNameForDescription?: string;
}

export interface analysisCard {
  className?: string;
  // data: {};
}

export interface overallCard {}
