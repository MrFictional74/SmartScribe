// Connect to Adobe CEP
const csInterface = new CSInterface();

document.addEventListener("DOMContentLoaded", function () {
  const dropZone = document.getElementById("dropZone");

  dropZone.addEventListener("dragover", function (e) {
    e.preventDefault();
    dropZone.style.borderColor = "#00bfff";
  });

  dropZone.addEventListener("dragleave", function () {
    dropZone.style.borderColor = "#888";
  });

  dropZone.addEventListener("drop", function (e) {
    e.preventDefault();
    dropZone.style.borderColor = "#888";

    const file = e.dataTransfer.files[0];
    if (!file) {
      alert("No file dropped.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function () {
      const fileContent = reader.result;
      // Send content to ExtendScript
      csInterface.evalScript(`handleTextFile(${JSON.stringify(fileContent)})`);
    };
    reader.readAsText(file);
  });
});
