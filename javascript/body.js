// Home Page
async function home() {
 if (document.getElementById("course-outline") == null) {
  const response = await fetch('./database/home.json');
  const home = await response.json();

  const body = document.getElementById("body");
  body.textContent = "";
  const header = document.createElement("h2");
  header.textContent = "Course Outline";
  body.append(header);

  const course_outline = document.createElement("iframe");
  course_outline.setAttribute("class", "outline");
  course_outline.setAttribute("id", "course-outline");
  course_outline.setAttribute("src", home.course_outline);
  course_outline.setAttribute("type", "application/pdf");
  body.append(course_outline);

  const header2 = document.createElement("h2");
  header2.textContent = "Course Schedule";
  body.append(header2);

  const course_schedule = document.createElement("iframe");
  course_schedule.setAttribute("class", "schedule");
  course_schedule.setAttribute("id", "course-schedule");
  course_schedule.setAttribute("src", home.course_schedule);
  course_schedule.setAttribute("type", "application/pdf");
  body.append(course_schedule);
 }
}

// Labs Page
async function labs() {
 if (document.getElementById("labs") == null) {
  const response = await fetch('./database/labs.json');
  const all_labs = await response.json();
  const body = document.getElementById("body");
  body.textContent = "";
  const header = document.createElement("h2");
  header.textContent = "Labs";
  body.append(header);

  const labs = document.createElement("div");
  labs.setAttribute("id", "labs")
  labs.setAttribute("class", "labs")
  body.append(labs);
  
  for (let i = 0; i < all_labs.length; i++) {
   const section = document.createElement("h3");
   section.textContent = all_labs[i].title;
   labs.append(section);

   const table = document.createElement("table");
   table.setAttribute("id", "labs-table" + i)
   table.setAttribute("class", "labs-table")
   labs.append(table);

   const row1 = document.createElement("tr");
   const heading1 = document.createElement('th');
   heading1.textContent = all_labs[i].title;
   const heading2 = document.createElement('th');
   heading2.textContent = "PDF Link";
   row1.append(heading1);
   row1.append(heading2);

   if (i == 1) {
    const heading3 = document.createElement('th');
    heading3.textContent = "FAQ";
    row1.append(heading3);
   }

   table.append(row1);

   for (let j = 0; j < all_labs[i].container.length; j++) {
    const row = document.createElement("tr");
    const data1 = document.createElement("td");
    if (i == 1) {
     data1.textContent = all_labs[i].container[j].name + ": " + all_labs[i].container[j].title;
    }
    else {
     data1.textContent = all_labs[i].container[j].name;
    }

    const data2 = document.createElement("td");

    for (let k = 0; k < all_labs[i].container[j].link.length; k++) {
     const link = document.createElement("a");
     data2.append(link);
     link.setAttribute("href", all_labs[i].container[j].link[k]);
     link.setAttribute("target", "_blank");
     link.textContent = all_labs[i].container[j].name[k];
    }

    row.append(data1);
    row.append(data2);

    if (i == 1) {
     const data3 = document.createElement("td");
     const link2 = document.createElement("a");
     data3.append(link2);
     if (all_labs[i].container[j].faq != "-----") {
      link2.textContent = "FAQ";
      link2.setAttribute("href", all_labs[i].container[j].faq);
      link2.setAttribute("target", "_blank");
     }
     else {
      link2.textContent = all_labs[i].container[j].faq;
     }

     row.append(data3);
   }
    table.append(row);
   }
  }
 }
}

//Study Guide
async function study_guide() {
 if (document.getElementById("study-guide") == null) {
  const response = await fetch('./database/study_guide.json');
  const study_guide = await response.json();
  const body = document.getElementById("body");
  body.textContent = "";
  const header = document.createElement("h2");
  header.textContent = "Study Guide";
  body.append(header);

  const study = document.createElement("div");
  study.setAttribute("id", "study-guide")
  study.setAttribute("class", "study-guide")
  body.append(study);

  for (let i = 0; i < study_guide[0].intro.length; i++) {
   const intro = document.createElement("p");
   intro.setAttribute("class", "intro");
   intro.textContent = study_guide[0].intro[i];
   study.append(intro);
  }

  for (let i = 1; i < study_guide.length; i++) {
   const section = document.createElement("h3");
   section.textContent = study_guide[i].title;
   study.append(section);

   const table = document.createElement("table");
   table.setAttribute("id", "quiz-table" + i)
   table.setAttribute("class", "quiz-table")
   study.append(table);

   const row1 = document.createElement("tr");
   const heading1 = document.createElement('th');
   heading1.textContent = study_guide[i].title;
   const heading2 = document.createElement('th');
   heading2.textContent = "PDF Link";
   row1.append(heading1);
   row1.append(heading2);
   table.append(row1);

   for (let j = 0; j < study_guide[i].container.length; j++) {
    const row = document.createElement("tr");
    const data1 = document.createElement("td");
    data1.textContent = study_guide[i].container[j].title;
    const data2 = document.createElement("td");
    const link = document.createElement("a");
    data2.append(link);
    link.setAttribute("href", study_guide[i].container[j].link);
    link.setAttribute("target", "_blank");
    link.textContent = study_guide[i].container[j].title;
    row.append(data1);
    row.append(data2);
    table.append(row);
   }
  }
 }
}

//Modules
async function modules() {
 if (document.getElementById("modules") == null) {
  const response = await fetch('./database/modules.json');
  const all_modules = await response.json();
  const body = document.getElementById("body");
  body.textContent = "";
  const header = document.createElement("h2");
  header.textContent = "Modules";
  body.append(header);

  const modules = document.createElement("div");
  modules.setAttribute("id", "modules")
  modules.setAttribute("class", "modules")
  body.append(modules);

  for (let i = 0; i < all_modules.length; i++) {
   const section = document.createElement("h3");
   section.textContent = all_modules[i].title;
   modules.append(section);

   const table = document.createElement("table");
   table.setAttribute("id", "modules-table" + i)
   table.setAttribute("class", "modules-table")
   modules.append(table);

   const row1 = document.createElement("tr");
   const heading1 = document.createElement('th');
   heading1.textContent = all_modules[i].title;
   const heading2 = document.createElement('th');
   heading2.textContent = "PDF Link";
   row1.append(heading1);
   row1.append(heading2);
   table.append(row1);
   for (let j = 0; j < all_modules[i].container.length; j++) {
    const row = document.createElement("tr");
    const data1 = document.createElement("td");
    data1.textContent = all_modules[i].container[j].name;
    const data2 = document.createElement("td");
    const link = document.createElement("a");
    data2.append(link);
    link.setAttribute("href", all_modules[i].container[j].link);
    link.setAttribute("target", "_blank");
    link.textContent = all_modules[i].container[j].name;
    row.append(data1);
    row.append(data2);
    table.append(row);
   }
  }

 }
}

//Lecture Notes
async function lectures() {

 if (document.getElementById("lectures") == null) {
  const body = document.getElementById("body");
  body.textContent = "";
  const response = await fetch('./database/lectures.json');
  const all_lectures = await response.json();
  const header = document.createElement("h2");
  header.textContent = "Lecture Notes";
  body.append(header);

  const lectures = document.createElement("div");
  lectures.setAttribute("id", "lectures")
  lectures.setAttribute("class", "lectures")
  body.append(lectures);

  for (let i = 0; i < all_lectures.length; i++) {
   const professor = document.createElement("h3");
   professor.textContent = "Professor " + all_lectures[i].name;
   professor.setAttribute("class", "professor")
   professor.setAttribute("id", "professor" + i)
   lectures.append(professor);

   const table = document.createElement("table");
   table.setAttribute("id", "lecture-table" + i)
   table.setAttribute("class", "lecture-table")
   lectures.append(table);

   const row1 = document.createElement("tr");
   const heading1 = document.createElement('th');
   heading1.textContent = "Week";
   const heading2 = document.createElement('th');
   heading2.textContent = "PDF Link";
   row1.append(heading1);
   row1.append(heading2);
   table.append(row1);

   for (let j = 0; j < all_lectures[i].lectures.length; j++) {
    const row = document.createElement("tr");
    const data1 = document.createElement("td");
    data1.textContent = all_lectures[i].lectures[j].week;
    const data2 = document.createElement("td");
    const link = document.createElement("a");
    data2.append(link);
    link.setAttribute("href", all_lectures[i].lectures[j].link);
    link.setAttribute("target", "_blank");
    link.textContent = all_lectures[i].lectures[j].week;
    row.append(data1);
    row.append(data2);
    table.append(row);
   }
  }
 }
}

//Data Sheets
async function data_sheets() {
 if (document.getElementById("data-sheets") == null) {
  const body = document.getElementById("body");
  body.textContent = "";
  const response = await fetch('./database/data_sheets.json');
  const all_data_sheets = await response.json();
  const header = document.createElement("h2");
  header.textContent = "Data Sheets";
  body.append(header);

  const data_sheets = document.createElement("div");
  data_sheets.setAttribute("id", "data-sheets")
  data_sheets.setAttribute("class", "data-sheets")
  body.append(data_sheets);

  const table = document.createElement("table");
  table.setAttribute("id", "sheet-table")
  table.setAttribute("class", "sheet-table")
  data_sheets.append(table);

  const row1 = document.createElement("tr");
  const heading1 = document.createElement('th');
  heading1.textContent = "Data Sheets";
  const heading2 = document.createElement('th');
  heading2.textContent = "PDF";
  row1.append(heading1);
  row1.append(heading2);
  table.append(row1);

  for (let i = 0; i < all_data_sheets.length; i++) {
   const row = document.createElement("tr");
   const data1 = document.createElement("td");
   data1.textContent = all_data_sheets[i].name;
   const data2 = document.createElement("td");
   const link = document.createElement("a");
   data2.append(link);
   link.setAttribute("href", all_data_sheets[i].link);
   link.setAttribute("target", "_blank");
   link.textContent = all_data_sheets[i].name;

   row.append(data1);
   row.append(data2);
   table.append(row);
  }
 }
}

//Professors
async function instructors() {
 if (document.getElementById("instructors") == null) {
  const body = document.getElementById("body");
  body.textContent = "";
  const response = await fetch('./database/instructors.json');
  const professors = await response.json();
  const header = document.createElement("h2");
  header.textContent = "Instructors";
  body.append(header);

  const div = document.createElement("div");
  div.setAttribute("class", "table")
  body.append(div);

  const table = document.createElement("table");
  table.setAttribute("id", "instructors")
  table.setAttribute("class", "professors")
  div.append(table);

  const row1 = document.createElement("tr");
  const heading1 = document.createElement('th');
  heading1.textContent = "Professor";
  const heading2 = document.createElement('th');
  heading2.textContent = "Contact";
  const heading3 = document.createElement('th');
  heading3.textContent = "More Information";
  const heading4 = document.createElement('th');
  heading4.textContent = "Image";
  row1.append(heading1);
  row1.append(heading2);
  row1.append(heading3);
  row1.append(heading4);
  table.append(row1);

  for (let i = 0; i < professors.length; i++) {
   const row = document.createElement("tr");
   const data1 = document.createElement("td");
   data1.textContent = professors[i].name;
   const data2 = document.createElement("td");
   data2.textContent = professors[i].email;
   const data3 = document.createElement("td");
   const link = document.createElement("a");
   data3.append(link);
   link.setAttribute("href", professors[i].link);
   link.setAttribute("target", "_blank");
   link.textContent = "Ryerson";
   const data4 = document.createElement("td");
   image = document.createElement("img");
   image.setAttribute("src", professors[i].image);
   image.setAttribute("alt", professors[i].name);
   data4.append(image);
   row.append(data1);
   row.append(data2);
   row.append(data3);
   row.append(data4);
   table.append(row);
  }
 }
}
