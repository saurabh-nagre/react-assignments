import { rest } from "msw";

const Data = [
  [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      birth_date: "01/16/99",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      birth_date: "11/03/91",
    },
  ],
  [
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      birth_date: "11/03/91",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      birth_date: "11/03/91",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
      birth_date: "11/03/91",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
      birth_date: "11/03/91",
    },
  ],
  [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      birth_date: "11/03/91",
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      birth_date: "11/03/91",
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      birth_date: "11/03/91",
    },
  ],
  [
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      birth_date: "11/03/91",
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      birth_date: "11/03/91",
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      birth_date: "11/03/91",
    },
  ],
];

export const handlers = [
  rest.get(`/persons/:listNo`, (req, res, ctx) => {
    const { listNo } = req.params;

    return res(
      ctx.status(200),
      ctx.json(
        Data[Number.parseInt(Array.isArray(listNo) ? listNo[0] : listNo)]
      )
    );
  }),
  
  rest.put("/persons/:listNo", async (req, res, ctx) => {
    const { pos, details } = await req.json;
    const { listNo } = req.params;

    const index = Number.parseInt(Array.isArray(listNo) ? listNo[0] : listNo);
    let list = Data[index];

    list = [...list.slice(0, pos), details, ...list.slice(pos + 1)];

    Data[index] = list;

    return res(ctx.status(200), ctx.json(Data[index]));
  }),
];
