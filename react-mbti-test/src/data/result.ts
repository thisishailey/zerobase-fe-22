export const CatMBTI = {
    ESTP: 'The Bengal',
    ESTJ: 'The Li Hua',
    ESFP: 'The Sphynx',
    ESFJ: 'The German Rex',
    ENTP: 'The Balinese',
    ENTJ: 'The Siamese',
    ENFP: 'The Singapura',
    ENFJ: 'Tonkinese',
    ISTP: 'The Lynx',
    ISTJ: 'The British Shorthair',
    ISFP: 'The Anatolian',
    ISFJ: 'The Persian',
    INTP: 'The Turkish Van',
    INTJ: 'The Norwegian Forest Cat',
    INFP: 'The Birman',
    INFJ: 'The Russian Blue',
};

export type MBTI = keyof typeof CatMBTI;

export const listMBTI = Object.keys(CatMBTI);
