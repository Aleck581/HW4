import  { v4 as uuidv4 } from "uuid";


function chillHop() {

  return [
    {
      name: "Sunrise Serenade",
      cover:
`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3")}&bgcolor=FFFFFF`,
      artist: "TuneLab Edition",
      audio:
"https://media.geeksforgeeks.org/wp-content/uploads/20231004185212/Jawan-Prevue-Theme.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
      mood: ["calm"],
    },

  ];
}

export default chillHop;