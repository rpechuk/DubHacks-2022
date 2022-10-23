export type CardItemT = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  isOnline?: boolean;
  matches?: string;
  name: string;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
};

export type NewProfileT = {
  name: string;
  age?: string;
  gender: string;
  drive: string;
  level: string;
};

export type ProfileItemT = {
  image: any;
  phoneNum: string;
  username: string;
  name: string;
  age: string;
  pronouns: string;
  location: string;
  level: string;
  distance: string;
  drive: string;
};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

// export type HikeT = {
//   image: any;
//   name: string;
//   description: string;
//   match: string;
// }

export type DataT = {
  image: any;
  description: string;
  match: string;
  phoneNum: number;
  username: string;
  name: string;
  age: string;
  pronouns: string;
  location: string;
  level: string;
  distance: string;
  drive: string;
  hikeType: string;
};

// export type UserT = {
//   phoneNum: number;
//   username: string;
//   name: boolean;
//   age: string;
//   pronouns: string;
//   location: string;
//   range: any;
//   drive: string;
//   level: string;
// };