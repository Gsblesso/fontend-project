
const shuffleArray = <T>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};


const questions = [
  {
    id: 1,
    question: "What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    answer: "Meow-Meow",
  },
  {
    id: 2,
    question: "What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    answer: "Ice Cream",
  },
  {
    id: 3,
    question: "What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    answer: "Yellow",
  },
  {
    id: 4,
    question: "How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    answer: "Infinite",
  },

    {
    id: 5,
    question: "Which of these is used to browse the internet?",
    options: ["Calculator", "Web Browser", "Paint"],
    answer: "Web Browser",
  },
  {
    id: 6,
    question: "Which device is mainly used to type text?",
    options: ["Mouse", "Keyboard", "Monitor"],
    answer: "Keyboard",
  },
  {
    id: 7,
    question: "Which one is an operating system?",
    options: ["Windows", "Google", "Chrome"],
    answer: "Windows",
  },

];


export const quizData = shuffleArray(questions);
