import { Hall } from "@/lib/hall-data/hall.type";

export const MILAD_INTL_PRICES = {
  PRICE_ROW_1: 8500000,
  PRICE_ROW_2: 8500000,
  PRICE_ROW_3: 800000,
  PRICE_ROW_4: 800000,
  PRICE_ROW_5: 600000,
  PRICE_ROW_6: 600000,
};

export const MILAD_INTL: Hall = {
  id: "111",
  name: "سالن میلاد نمایشگاه بین المللی",
  capacity: 100,
  city: "تهران",
  getRowsOffsetX: (seatWidth, desktopRectMargin) => {
    return {
      0: -seatWidth - desktopRectMargin,
      1: 0,
      2: seatWidth + desktopRectMargin,
      3: 0,
      4: -seatWidth - desktopRectMargin,
      5: -2 * seatWidth - 2 * desktopRectMargin,
    };
  },
  getRowsOffsetY: (seatWidth, desktopRectMargin) => {
    return {
      0: 0,
      1: -seatWidth - desktopRectMargin,
      2: -seatWidth - desktopRectMargin,
      3: -seatWidth - desktopRectMargin,
      4: -seatWidth - desktopRectMargin,
      5: -seatWidth - desktopRectMargin,
    };
  },
  seatsByRow: [
    [
      {
        id: 1111,
        rowNumber: 1,
        seatNumber: 1,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1112,
        rowNumber: 1,
        seatNumber: 2,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1113,
        rowNumber: 1,
        seatNumber: 3,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1114,
        rowNumber: 1,
        seatNumber: 4,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1115,
        rowNumber: 1,
        seatNumber: 5,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1116,
        rowNumber: 1,
        seatNumber: 6,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1117,
        rowNumber: 1,
        seatNumber: 7,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1118,
        rowNumber: 1,
        seatNumber: 8,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1119,
        rowNumber: 1,
        seatNumber: 9,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1120,
        rowNumber: 1,
        seatNumber: 10,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1121,
        rowNumber: 1,
        seatNumber: 11,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1122,
        rowNumber: 1,
        seatNumber: 12,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1123,
        rowNumber: 1,
        seatNumber: 13,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1124,
        rowNumber: 1,
        seatNumber: 14,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1125,
        rowNumber: 1,
        seatNumber: 15,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1126,
        rowNumber: 1,
        seatNumber: 16,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1127,
        rowNumber: 1,
        seatNumber: 17,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1128,
        rowNumber: 1,
        seatNumber: 18,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1129,
        rowNumber: 1,
        seatNumber: 19,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
      {
        id: 1130,
        rowNumber: 1,
        seatNumber: 20,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_1,
        status: "booked",
      },
    ],

    [
      {
        id: 1131,
        rowNumber: 2,
        seatNumber: 1,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1132,
        rowNumber: 2,
        seatNumber: 2,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1133,
        rowNumber: 2,
        seatNumber: 3,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1134,
        rowNumber: 2,
        seatNumber: 4,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1135,
        rowNumber: 2,
        seatNumber: 5,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1136,
        rowNumber: 2,
        seatNumber: 6,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1137,
        rowNumber: 2,
        seatNumber: 7,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1138,
        rowNumber: 2,
        seatNumber: 8,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      null,
      null,
      null,
      null,
      null,
      null,
      {
        id: 1139,
        rowNumber: 2,
        seatNumber: 9,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1140,
        rowNumber: 2,
        seatNumber: 10,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1141,
        rowNumber: 2,
        seatNumber: 11,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1142,
        rowNumber: 2,
        seatNumber: 12,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1143,
        rowNumber: 2,
        seatNumber: 13,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1144,
        rowNumber: 2,
        seatNumber: 14,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1145,
        rowNumber: 2,
        seatNumber: 15,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
      {
        id: 1146,
        rowNumber: 2,
        seatNumber: 16,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_2,
        status: "booked",
      },
    ],

    [
      {
        id: 1147,
        rowNumber: 3,
        seatNumber: 1,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      {
        id: 1148,
        rowNumber: 3,
        seatNumber: 2,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      {
        id: 1149,
        rowNumber: 3,
        seatNumber: 3,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "free",
      },
      {
        id: 1150,
        rowNumber: 3,
        seatNumber: 4,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "free",
      },
      {
        id: 1151,
        rowNumber: 3,
        seatNumber: 5,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "free",
      },
      {
        id: 1152,
        rowNumber: 3,
        seatNumber: 6,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      {
        id: 1153,
        rowNumber: 3,
        seatNumber: 7,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      {
        id: 1154,
        rowNumber: 3,
        seatNumber: 8,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      {
        id: 1155,
        rowNumber: 3,
        seatNumber: 9,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      {
        id: 1156,
        rowNumber: 3,
        seatNumber: 10,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      {
        id: 1157,
        rowNumber: 3,
        seatNumber: 11,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      {
        id: 1158,
        rowNumber: 3,
        seatNumber: 12,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "free",
      },
      {
        id: 1159,
        rowNumber: 3,
        seatNumber: 13,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "free",
      },
      {
        id: 1160,
        rowNumber: 3,
        seatNumber: 14,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      {
        id: 1161,
        rowNumber: 3,
        seatNumber: 15,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
      {
        id: 1162,
        rowNumber: 3,
        seatNumber: 16,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_3,
        status: "booked",
      },
    ],

    [
      {
        id: 1163,
        rowNumber: 4,
        seatNumber: 1,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1164,
        rowNumber: 4,
        seatNumber: 2,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1165,
        rowNumber: 4,
        seatNumber: 3,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1166,
        rowNumber: 4,
        seatNumber: 4,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1167,
        rowNumber: 4,
        seatNumber: 5,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1168,
        rowNumber: 4,
        seatNumber: 6,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1169,
        rowNumber: 4,
        seatNumber: 7,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1170,
        rowNumber: 4,
        seatNumber: 8,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      null,
      null,
      null,
      null,
      null,
      null,
      {
        id: 1171,
        rowNumber: 4,
        seatNumber: 9,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1172,
        rowNumber: 4,
        seatNumber: 10,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1173,
        rowNumber: 4,
        seatNumber: 11,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1174,
        rowNumber: 4,
        seatNumber: 12,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1175,
        rowNumber: 4,
        seatNumber: 13,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "booked",
      },
      {
        id: 1176,
        rowNumber: 4,
        seatNumber: 14,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "free",
      },
      {
        id: 1177,
        rowNumber: 4,
        seatNumber: 15,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "free",
      },
      {
        id: 1178,
        rowNumber: 4,
        seatNumber: 16,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_4,
        status: "free",
      },
    ],

    [
      {
        id: 1179,
        rowNumber: 5,
        seatNumber: 1,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "free",
      },
      {
        id: 1180,
        rowNumber: 5,
        seatNumber: 2,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "free",
      },
      {
        id: 1181,
        rowNumber: 5,
        seatNumber: 3,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1182,
        rowNumber: 5,
        seatNumber: 4,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1183,
        rowNumber: 5,
        seatNumber: 5,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1184,
        rowNumber: 5,
        seatNumber: 6,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1185,
        rowNumber: 5,
        seatNumber: 7,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1186,
        rowNumber: 5,
        seatNumber: 8,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      null,
      null,
      null,
      null,
      {
        id: 1187,
        rowNumber: 5,
        seatNumber: 9,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1188,
        rowNumber: 5,
        seatNumber: 10,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1189,
        rowNumber: 5,
        seatNumber: 11,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1190,
        rowNumber: 5,
        seatNumber: 12,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1191,
        rowNumber: 5,
        seatNumber: 13,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1192,
        rowNumber: 5,
        seatNumber: 14,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1193,
        rowNumber: 5,
        seatNumber: 15,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "booked",
      },
      {
        id: 1194,
        rowNumber: 5,
        seatNumber: 16,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_5,
        status: "free",
      },
    ],

    [
      {
        id: 1195,
        rowNumber: 6,
        seatNumber: 1,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "booked",
      },
      {
        id: 1196,
        rowNumber: 6,
        seatNumber: 2,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "booked",
      },
      {
        id: 1197,
        rowNumber: 6,
        seatNumber: 3,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "booked",
      },
      {
        id: 1198,
        rowNumber: 6,
        seatNumber: 4,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "booked",
      },
      {
        id: 1199,
        rowNumber: 6,
        seatNumber: 5,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "booked",
      },
      {
        id: 1200,
        rowNumber: 6,
        seatNumber: 6,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "free",
      },
      {
        id: 1201,
        rowNumber: 6,
        seatNumber: 7,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "free",
      },
      {
        id: 1202,
        rowNumber: 6,
        seatNumber: 8,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "free",
      },
      null,
      null,
      {
        id: 1203,
        rowNumber: 6,
        seatNumber: 9,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "booked",
      },
      {
        id: 1204,
        rowNumber: 6,
        seatNumber: 10,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "booked",
      },
      {
        id: 1205,
        rowNumber: 6,
        seatNumber: 11,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "free",
      },
      {
        id: 1206,
        rowNumber: 6,
        seatNumber: 12,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "free",
      },
      {
        id: 1207,
        rowNumber: 6,
        seatNumber: 13,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "free",
      },
      {
        id: 1208,
        rowNumber: 6,
        seatNumber: 14,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "free",
      },
      {
        id: 1209,
        rowNumber: 6,
        seatNumber: 15,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "free",
      },
      {
        id: 1210,
        rowNumber: 6,
        seatNumber: 16,
        seatPrice: MILAD_INTL_PRICES.PRICE_ROW_6,
        status: "free",
      },
    ],
  ],
};
