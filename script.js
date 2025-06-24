let currentTemplate = "classic";

function switchTemplate(template) {
  currentTemplate = template;
  alert(`Switched to ${template} template`);
}

function generatePDF() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const linkedin = document.getElementById("linkedin").value;
  const about = document.getElementById("about").value;
  const skills = document.getElementById("skills").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;

  const resumeWindow = window.open('', '_blank');
  resumeWindow.document.write(`
    <html>
    <head>
      <title>My Resume</title>
      <style>
        body { font-family: Arial; padding: 20px; line-height: 1.6; }
        h1 { text-align: center; color: #00f7ff; }
        .section { margin-bottom: 20px; }
        .template-${currentTemplate} { border: 2px dashed #00f7ff; padding: 15px; }
      </style>
    </head>
    <body>
      <div class="template-${currentTemplate}">
        <h1>${name}</h1>
        <div class="section"><strong>Email:</strong> ${email}</div>
        <div class="section"><strong>Phone:</strong> ${phone}</div>
        <div class="section"><strong>LinkedIn:</strong> ${linkedin}</div>
        <div class="section"><strong>About:</strong><br>${about}</div>
        <div class="section"><strong>Skills:</strong><br>${skills}</div>
        <div class="section"><strong>Education:</strong><br>${education}</div>
        <div class="section"><strong>Experience:</strong><br>${experience}</div>
      </div>
      <script>
        window.print();
      </script>
    </body>
    </html>
  `);
  updateProgressBar();
}

function updateProgressBar() {
  const filledInputs = document.querySelectorAll('#resume-form input:valid, #resume-form textarea:valid').length;
  const totalInputs = document.querySelectorAll('#resume-form input, #resume-form textarea').length;
  const percent = (filledInputs / totalInputs) * 100;
  document.getElementById("progress").style.width = percent + "%";
}