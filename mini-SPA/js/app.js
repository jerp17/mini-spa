
const Home = () => `
  <h1>🏠 Home Page</h1>
  <p>Welcome to our Single Page Application built using Vanilla JavaScript!</p>
`;

const About = () => `
  <h1>ℹ️ About Page</h1>
  <p>This page loads without refreshing the browser. That is SPA magic ✨</p>
`;

const Contact = () => `
  <h1>📞 Contact Page</h1>
  <p>You can contact us at: example@mail.com</p>
`;


const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact
};


function loadPage(path) {
  const app = document.getElementById("app");

  // Show loading message 
  app.innerHTML = "<p>Loading...</p>";

  setTimeout(() => {
    const view = routes[path] || (() => "<h1>404 - Page Not Found</h1>");
    app.innerHTML = view();
  }, 200);
}


document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault(); // Stop normal page reload

    const url = e.target.getAttribute("href");

    history.pushState(null, null, url); // Change URL without reload
    loadPage(url); // Load new content
  }
});


window.addEventListener("popstate", () => {
  loadPage(location.pathname);
});


window.addEventListener("DOMContentLoaded", () => {
  loadPage(location.pathname);
});