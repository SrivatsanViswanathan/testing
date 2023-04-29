function header() {
  const header = document.getElementById("header");
  header.textContent = "";

  const title = document.createElement("h1");
  title.textContent = "COE 538 MicroProcessor Systems";
  header.append(title);

  const image = document.createElement("img");
  image.setAttribute("class", "responsive-image");
  image.setAttribute("src", "./Images/ryerson.jpg");
  image.setAttribute("alt", "Ryerson");
  header.append(image);

  const navbar = document.createElement("nav");
  navbar.setAttribute("class", "navbar");
  navbar.setAttribute("id", "navbar");
  header.append(navbar);

  const link1 = document.createElement("a");
  link1.setAttribute("href", "./index.html");
  link1.setAttribute("class", "active");
  link1.textContent = "Home";
  navbar.append(link1);

  const link2 = document.createElement("a");
  link2.setAttribute("href", "./labs.html");
  link2.textContent = "Labs";
  navbar.append(link2);

  const link3 = document.createElement("a");
  link3.setAttribute("href", "./study-guide.html");
  link3.textContent = "Study Guide";
  navbar.append(link3);

  const link4 = document.createElement("a");
  link4.setAttribute("href", "./modules.html");
  link4.textContent = "Modules";
  navbar.append(link4);

  const link5 = document.createElement("a");
  link5.setAttribute("href", "./lectures.html");
  link5.textContent = "Lecture Notes";
  navbar.append(link5);

  const link6 = document.createElement("a");
  link6.setAttribute("href", "./data-sheets.html");
  link6.textContent = "Data Sheets";
  navbar.append(link6);

  const link7 = document.createElement("a");
  link7.setAttribute("href", "./instructors.html");
  link7.textContent = "Instructors";
  navbar.append(link7);

  const link8 = document.createElement("a");
  link8.setAttribute("href", "javascript:void(0);");
  link8.setAttribute("class", "icon");
  link8.setAttribute("onclick", "myFunction()");
  navbar.append(link8);

  const icon = document.createElement("i");
  icon.setAttribute("class", "fa fa-bars");
  link8.append(icon);
}

header();
