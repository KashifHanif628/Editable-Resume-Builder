const form = document.getElementById("resume-form") as HTMLFormElement;

const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

// form submission handling

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("Phone-Number") as HTMLInputElement)
    .value;
  const email = (document.getElementById("Email") as HTMLInputElement).value;
  const address = (document.getElementById("Address") as HTMLInputElement)
    .value;
  const academic = (document.getElementById("Academics") as HTMLTextAreaElement)
    .value;
  const CareerHighlight = (
    document.getElementById("Career-Highlights") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("Skills") as HTMLInputElement).value;
  const experience = (document.getElementById("Experience") as HTMLInputElement)
    .value;

  // generate the resume content dynamically.
  const resumeHtML = `
    <h2><b><u>Editable Resume</u></b></h2>
    <h3><b>Personal Information:</b></h3>
    <p><b><span contenteditable="true">Name:</b>${name}</span></p>
    <p><b><span contenteditable="true">Speak to:</b>${phone}</span></p>  
    <p><b><span contenteditable="true">Email:</b>${email}</span></p>
    <p><b><span contenteditable="true">Address:</b>${address}</span></p>

    <h3><b>Academics:</b></h3>
    <p contenteditable="true">${academic}</p>

    <h3><b>Career Highlights:</b></h3>
    <p contenteditable="true">${CareerHighlight}</p>

    <h3><b>Skills:</b></h3>
    <p contenteditable="true">${skills}</p>

    <h3><b>Experience:</b></h3>
    <p contenteditable="true">${experience}</p>
    `;

  // Now displaying the resume dynamically.

  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHtML;
  } else {
    console.log("Please fill the required field first.");
  }
});
