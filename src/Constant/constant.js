const data = [
  {
    id: "1",
    firstname: "Pranav",
    lastname: "Pandya",
    branch: 21,
    month: "July - 2022",
    icon: "⭕️"
  },
  {
    id: "2",
    firstname: "Ravi",
    lastname: "Rana",
    branch: 354,
    month: "July - 2022",
    icon: "⭕️"
  },
  {
    id: "3",
    firstname: "Keval",
    lastname: "Chavda",
    branch: 87,
    month: "August - 2022",
    icon: "⭕️"
  },
  {
    id: "4",
    firstname: "Jay",
    lastname: "Soni",
    branch: 96,
    month: "August - 2022",
    icon: "⭕️"
  },
  {
    id: "5",
    firstname: "Jaydeep",
    lastname: "Barad",
    branch: 75,
    month: "July - 2022",
    icon: "⭕️"
  },
  {
    id: "6",
    firstname: "Smit",
    lastname: "Panchal",
    branch: 43,
    month: "August - 2022",
    icon: "⭕️"
  },
  {
    id: "7",
    firstname: "Rohit",
    lastname: "Oza",
    branch: 71,
    month: "June - 2022",
    icon: "⭕️"
  },
];

export const columnsFromBackend = {
  Requested: {
    title: "Requested",
    id: "1",
    items: data,
  },
  // ToDo: {
  //   title: "To Do",
  //   id: "2",
  //   items: [],
  // },
  InProgress: {
    title: "In Progress",
    id: "3",
    items: [],
  },
  Done: {
    title: "Done",
    id: "4",
    items: [],
  },
};
