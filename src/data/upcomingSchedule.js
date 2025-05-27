import {faEye,faHeart,faUserDoctor,faSyringe,} from "@fortawesome/free-solid-svg-icons";

export const upcomingSchedule = [
  {
    title: "Upcoming schedule",
    day: "On Thursday",
    appointments: [
      { title: "Health checkup complete", icon: faSyringe, time: "11:00 AM" },
      { title: "Ophthalmologist", icon: faEye, time: "14:00 PM" },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", icon: faHeart, time: "12:00 AM" },
      { title: "Neurologist", icon: faUserDoctor, time: "16:00 PM" },
    ],
  },
];
