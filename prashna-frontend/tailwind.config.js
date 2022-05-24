module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "generator-img": "url('./Assets/student_dashboard.png')",
        "uploader-img": "url('./Assets/teacher_dashboard.png')",
        "home-img": "url('./Assets/test.jpg')",
      },
    },
  },
  plugins: [],
};
