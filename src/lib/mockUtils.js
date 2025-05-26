export const getRandomDepartment = () => {
  const departments = ["Engineering", "HR", "Sales", "Marketing", "Operations"];
  return departments[Math.floor(Math.random() * departments.length)];
};

export const getRandomPerformance = () => Math.floor(Math.random() * 5) + 1;

export const generateMockPerformanceHistory = () => {
  return Array.from({ length: 5 }, (_, i) => ({
    year: 2024 - i,
    rating: Math.floor(Math.random() * 5) + 1,
  }));
};

export const generateMockBio = () =>
  "An experienced professional dedicated to organizational success with a passion for collaboration and growth.";
