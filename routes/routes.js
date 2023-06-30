const routes = {
  home: { title: "Home", path: "/" },
  guide: { title: "Guide", path: "/guide" },
  login: { title: "Login", path: "/login" },
  signup: { title: "Signup", path: "/signup" },
  aboutUs: { title: "About us", path: "/about_us" },
  contactUs: { title: "Contact us", path: "/contact_us" },
  
  courses: { title: "Courses", path: "/courses" },
  courseId: { title: "Course", path: (id = "courseId") => `/courses/${id}` },
};

export default routes;
