const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "00100 Nairobi, Kenya",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "Mombasa Kenya",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Nairobi, Kenya",
    date: "2022-04-10",
    image: "images/networking-event.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "254 devs",
    description:
      "A meet up for developers around Kenya, interact and share knowledge. This is also a chance to network and link with new people.",
    location: "Nakuru, Kenya",
    date: "2021-01-30",
    image: "images/devs.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "pycon ke",
    description:
      "A conference to link all python developers within Kenya. A meetup to talk and discuss all things python.",
    location: "Nairobi, Kenya",
    date: "2022-02-10",
    image: "images/pycon.jpg",
    isFeatured: true,
  },
  {
    id: "e6",
    title: "Music and art festival",
    description:
      "A meetup to celebrate and enjoy exotic and African's rich cultures. A place to learn and pass not only the culture but also the values to the upcoming generation.",
    location: "Mombasa, Kenya",
    date: "2021-03-20",
    image: "images/culture.jpg",
    isFeatured: true,
  },
  {
    id: "e7",
    title: "Nature walk",
    description:
      "An event where we stroll aroung the savanna enjoying the wild life and the beauty that comes with it.",
    location: "Nairobi, Kenya",
    date: "2022-05-15",
    image: "images/nature.jpg",
    isFeatured: true,
  },
  {
    id: "e8",
    title: "Nairobi community meet up",
    description:
      "An event where the residents of the city and its surroundings come together to discuss major issues on the city and come with solutions to major problems.",
    location: "Nairobi, Kenya",
    date: "2021-11-12",
    image: "images/nairobi.jpg",
    isFeatured: false,
  },
  {
    id: "e9",
    title: "Annual music concert",
    description:
      "An event for all music enthusiasts and lovers to enjoy the latest in music and also art. Anopportunity for individuals to interact with their favourite artists",
    location: "Nairobi, Kenya",
    date: "2022-06-23",
    image: "images/music.jpg",
    isFeatured: false,
  },
  {
    id: "e10",
    title: "Color festival Kenya",
    description:
      "A festival of pomp and color for every individual. A way to pass time and enjoy in the splashes of radiance and brightness with everything to lighten up your mood",
    location: "Nakuru town,00200",
    date: "2021-05-12",
    image: "images/color.jpg",
    isFeatured: false,
  },
  {
    id: "e11",
    title: "Choma fest",
    description:
      "An event to enjoy various Kenyan delicasies including the favourite Kenyan roasted beef from the best chefs around the country.",
    location: "Mombasa, Kenya",
    date: "2021-01-20",
    image: "images/choma.jpg",
    isFeatured: false,
  },
  {
    id: "e12",
    title: "JS conference",
    description:
      "An event to celebrate the javascript programming language and forecast on the path it is headed.",
    location: "Nairobi, Kenya",
    date: "2022-01-10",
    image: "images/js.jpg",
    isFeatured: false,
  },
  {
    id: "e13",
    title: "UI & Design event",
    description:
      "An event for designers and creators of interfaces and user experiences. A place to discus all current trends in modern ui design",
    location: "Mombasa, Kenya",
    date: "2021-05-30",
    image: "images/ui.jpg",
    isFeatured: false,
  },
  {
    id: "e14",
    title: "Standup comedy",
    description:
      "An event to laugh out loud. Enjoy the best in comedy all while having fun from the blis of Nairobi.",
    location: "Nairobi, Kenya",
    date: "2022-04-10",
    image: "images/standup.jpg",
    isFeatured: false,
  },
  {
    id: "e15",
    title: "Media event",
    description:
      "A place to enjoy the Kenyan media discuss changes to be implemented and celebrate where we have come from",
    location: "Mombasa, Kenya",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: false,
  },
  {
    id: "e16",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Nairobi, Kenya",
    date: "2022-04-10",
    image: "images/networking-event.jpg",
    isFeatured: false,
  },
  {
    id: "e17",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "Mombasa, Kenya",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: false,
  },
  {
    id: "e18",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Nairobi, Kenya",
    date: "2022-04-10",
    image: "images/networking-event.jpg",
    isFeatured: false,
  },
  {
    id: "e19",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Nakuru town,00200",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e20",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "Mombasa, Kenya",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: false,
  },
  {
    id: "e21",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Nairobi, Kenya",
    date: "2022-04-10",
    image: "images/networking-event.jpg",
    isFeatured: false,
  },
  {
    id: "e22",
    title: "Car Garage 254",
    description:
      "An event for the car lovers to share their love for autos and mobiles at all levels",
    location: "Mombasa, Kenya",
    date: "2021-05-30",
    image: "images/cars.jpg",
    isFeatured: false,
  },
  {
    id: "e23",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Nairobi, Kenya",
    date: "2022-04-10",
    image: "images/networking-event.jpg",
    isFeatured: false,
  },
  {
    id: "e24",
    title: "Interior decor event",
    description:
      "An event for all interior designers and interior decor enthusiast todecorate and bring the empty to life",
    location: "Mombasa, Kenya",
    date: "2021-05-30",
    image: "images/interior.jpg",
    isFeatured: false,
  },
  {
    id: "e25",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "Nairobi, Kenya",
    date: "2022-04-10",
    image: "images/networking-event.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
