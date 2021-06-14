// const mockData = {
//   card_groups: [
//     {
//       id: 4,
//       name: "Add money",
//       design_type: "HC3",
//       card_type: 1,
//       cards: [
//         {
//           name: "Add money",
//           title: "Your account looks empty!",
//           formatted_title: {
//             text: "Your account looks empty!",
//             entities: [],
//           },
//           description: "Add some money to your account to get started.",
//           formatted_description: {
//             text: "Add some money to your {} to get {}.",
//             entities: [
//               {
//                 text: "accountA",
//                 color: "lightblue",
//                 font_style: "italic",
//                 url: "https://google.com",
//               },
//               "started",
//             ],
//           },
//           url: "https://facebook.com/",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/5e97239d1bd747878828852d4f397361.png",
//             aspect_ratio: 0.9142857,
//           },
//           bg_color: "#FFB486",
//           cta: [
//             {
//               text: "Add",
//               bg_color: "#000000",
//               text_color: "#FFFFFF",
//               url_choice: "add",
//               url: "https://instagram.com/",
//             },
//           ],
//           is_disabled: false,
//         },
//         {
//           name: "Add money",
//           title: "Your account looks empty!",
//           formatted_title: {
//             text: "Your account looks empty!",
//             entities: [],
//           },
//           description: "Add some money to your account to get started.",
//           formatted_description: {
//             text: "Add some money to your account to get started.",
//             entities: [],
//           },
//           url: "https://facebook.com/",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/5e97239d1bd747878828852d4f397361.png",
//             aspect_ratio: 0.9142857,
//           },
//           bg_color: "#FFB486",
//           cta: [
//             {
//               text: "Add",
//               bg_color: "#000000",
//               text_color: "#FFFFFF",
//               url_choice: "add",
//               url: "https://instagram.com/",
//             },
//           ],
//           is_disabled: false,
//         },
//       ],
//       is_scrollable: true,
//       level: 10,
//     },
//     {
//       id: 31,
//       name: "UPI Register HCG",
//       design_type: "HC6",
//       cards: [
//         {
//           name: "UPI Register card",
//           title: "Setup your UPI ID",
//           formatted_title: {
//             text: "Setup your UPI ID",
//             align: "left",
//             entities: [],
//           },
//           description: "Register now and start UPI payments",
//           formatted_description: {
//             text: "Register now and start UPI payments",
//             align: "left",
//             entities: [],
//           },
//           icon: {
//             image_type: "ext",
//             image_url:
//               "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/128x128/plain/shape_square.png",
//           },
//           url: "https://youtube.com/",
//           is_disabled: false,
//         },
//       ],
//       is_scrollable: false,
//     },
//     {
//       id: 80,
//       name: "New small HCs for club, transactions and store",
//       design_type: "HC9",
//       cards: [
//         {
//           name: "Club for teenagers (GenZ & GenS)",
//           url: "https://youtube.com/",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/718171493a944663a167a71c11c5e10a.png",
//             aspect_ratio: 0.84,
//           },
//           is_disabled: false,
//         },
//         {
//           name: "Rewards (For all personas)",
//           url: "https://viserion.fampay.in/rewards/?fp_type=fpSurvey&fp_hide_bar=true&fp_bar_color=1f1f1f&tab=2&fp_ios_webview_type=2",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/8b9c873bc2cf42a39523b589b319990a.png",
//             aspect_ratio: 0.84,
//           },
//           is_disabled: false,
//         },
//         {
//           name: "Transactions History (For all personas)",
//           url: "https://google.com/",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/1f388bca015345a7ad125fc40e45d1ae.png",
//             aspect_ratio: 0.84,
//           },
//           is_disabled: false,
//         },
//         {
//           name: "Store (For all personas)",
//           url: "https://",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/f8f9a6536f9a4e17aff3d25fbef3c12a.png",
//             aspect_ratio: 0.84,
//           },
//           is_disabled: false,
//         },
//       ],
//       is_scrollable: true,
//       height: 78,
//     },
//     {
//       id: 7,
//       name: "All transactions",
//       design_type: "HC1",
//       card_type: 1,
//       cards: [
//         {
//           name: "View all txn",
//           title: "Transactions",
//           formatted_title: {
//             text: "Transactions",
//             entities: [],
//           },
//           icon: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/4ce76db9e755497f8d176764b6d590ba.png",
//             aspect_ratio: 1.0,
//           },
//           url: "https://google.com/",
//           bg_color: "#FFFFFF",
//           is_disabled: false,
//         },
//         {
//           name: "Rewards",
//           title: "Rewards",
//           formatted_title: {
//             text: "Rewards",
//             align: "left",
//             entities: [],
//           },
//           icon: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/aa7354aad52243728066169761045344.png",
//             aspect_ratio: 1.0,
//           },
//           url: "https://youtube.com/",
//           is_disabled: false,
//         },
//       ],
//       is_scrollable: false,
//     },
//     {
//       id: 7,
//       name: "All transactions",
//       design_type: "HC1",
//       card_type: 1,
//       cards: [
//         {
//           name: "View all txn",
//           title: "Transactions",
//           formatted_title: {
//             text: "Transactions",
//             entities: [],
//           },
//           icon: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/4ce76db9e755497f8d176764b6d590ba.png",
//             aspect_ratio: 1.0,
//           },
//           url: "https://google.com/",
//           bg_color: "#FFFFFF",
//           is_disabled: false,
//         },
//         {
//           name: "Rewards",
//           title: "Rewards",
//           formatted_title: {
//             text: "Rewards",
//             align: "left",
//             entities: [],
//           },
//           icon: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/aa7354aad52243728066169761045344.png",
//             aspect_ratio: 1.0,
//           },
//           url: "https://youtube.com/",
//           is_disabled: false,
//         },
//       ],
//       is_scrollable: true,
//     },
//     {
//       id: 149,
//       name: "Gamezop4",
//       design_type: "HC5",
//       card_type: 1,
//       cards: [
//         {
//           name: "savage revenge",
//           url: "https://www.gamezop.com/g/ry6bwfUt_Jg?id=bM14MfArj&fp_type=fpGame",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/a612b3e534ba4ca389293a2b92c7ba25.jpeg",
//             aspect_ratio: 2.1548822,
//           },
//           bg_color: "#050402",
//           is_disabled: false,
//         },
//         {
//           name: "Tower twist",
//           url: "https://www.gamezop.com/g/HJT46GkPcy7?id=bM14MfArj&fp_type=fpGame",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/8521293693574a81ad9e1f47769ee820.jpeg",
//             aspect_ratio: 2.1548822,
//           },
//           bg_color: "#2b1157",
//           is_disabled: false,
//         },
//         {
//           name: "Rocket Man",
//           url: "https://www.gamezop.com/g/SyXuN7W1F?id=bM14MfArj&fp_type=fpGame",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/d9261c88c6fc4d8e9631fd53fdd1408f.jpeg",
//             aspect_ratio: 2.1548822,
//           },
//           bg_color: "#151515",
//           is_disabled: false,
//         },
//       ],
//       is_scrollable: true,
//       level: 9,
//     },
//     {
//       id: 148,
//       name: "Gamezop3",
//       design_type: "HC5",
//       card_type: 1,
//       cards: [
//         {
//           name: "Grumpy gorilla",
//           url: "https://www.gamezop.com/g/N1sZfO1fWqg?id=bM14MfArj&fp_type=fpGame",
//           bg_image: {
//             image_type: "ext",
//             image_url:
//               "https://westeros-staging.s3.amazonaws.com/media/images/generic/be744c8bef704487b744d355ff292871.jpeg",
//             aspect_ratio: 2.1548822,
//           },
//           bg_color: "#2e5d62",
//           is_disabled: false,
//         },
//       ],
//       is_scrollable: true,
//       level: 8,
//     },
//   ],
// };

// function fetchHomePageData() {
//   return new Promise((resolve, reject) => {
//     resolve(mockData);
//   });
// }

async function fetchHomePageData() {
  try {
    let jsonResponse = await fetch(
      "https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad"
    );
    if (!jsonResponse.ok) throw new Error("Somthing went wrong");

    let dataResponse = await jsonResponse.json();
    return dataResponse;
  } catch (err) {
    console.log(err, "I am error from api");
  }
}

export default fetchHomePageData;
