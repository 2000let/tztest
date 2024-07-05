import testPhoto from "../../../../assets/testPhoto.png";

export interface ReviewListItemI {
  id: number;
  imgSrc: string;
  nickName: string;
  address: string;
  text: string;
}

const reviewList: ReviewListItemI[] = [
  {
    id: 1,
    imgSrc: testPhoto,
    nickName: "Lorenzo",
    address: "@lorenzoo",
    text: "Amazing Telegram bot! Provides real-time crypto prices and news",
  },
  {
    id: 2,
    imgSrc: testPhoto,
    nickName: "Lorenzo",
    address: "@lorenzoo",
    text: "Amazing Telegram bot! Provides real-time crypto prices and news",
  },
  {
    id: 3,
    imgSrc: testPhoto,
    nickName: "Lorenzo",
    address: "@lorenzoo",
    text: "Amazing Telegram bot! Provides real-time crypto prices and news",
  },
  {
    id: 4,
    imgSrc: testPhoto,
    nickName: "Lorenzo",
    address: "@lorenzoo",
    text: "Amazing Telegram bot! Provides real-time crypto prices and news",
  },
];
export default reviewList;
