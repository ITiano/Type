const routes = {
  home: { title: "Home", path: "/" },
  auth: { title: "Auth", path: "/auth" },
  guide: { title: "Guide", path: "/guide" },
  aboutUs: { title: "About us", path: "/about_us" },
  contactUs: { title: "Contact us", path: "/contact_us" },
  courses: { title: "Courses", path: "/courses" },
  courseId: { title: "Course", path: (id = "courseId") => `/courses/${id}` },
};

export default routes;
