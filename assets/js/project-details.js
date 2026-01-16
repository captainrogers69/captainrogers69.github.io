// document.addEventListener("DOMContentLoaded", () => {
//   const params = new URLSearchParams(window.location.search);
//   const projectId = params.get("id");

//   const project = PROJECTS[projectId];
//   if (!project) {
//     document.body.innerHTML = "<h2 class='text-center'>Project not found</h2>";
//     return;
//   }

//   // Hero
//   document.getElementById("projectTitle").textContent = project.title;
//   document.getElementById("projectSubtitle").textContent = project.subtitle;

//   // Tags
//   const tagsContainer = document.getElementById("projectTags");
//   project.tags.forEach((tag) => {
//     const span = document.createElement("span");
//     span.className = "badge rounded-pill bg-secondary";
//     span.textContent = tag;
//     tagsContainer.appendChild(span);
//   });

//   // Play Store
//   const playBtn = document.getElementById("playStoreBtn");
//   playBtn.href = project.playStoreUrl;

//   // Gallery
//   const gallery = document.getElementById("galleryWrapper");
//   project.heroImages.forEach((img) => {
//     const div = document.createElement("div");
//     div.className = "gallery-item";
//     div.innerHTML = `<img src="${img}" />`;
//     gallery.appendChild(div);
//   });

//   // About
//   document.getElementById("projectAbout").textContent = project.about.trim();

//   // Features
//   const featuresGrid = document.getElementById("featuresGrid");
//   project.features.forEach((feature) => {
//     const col = document.createElement("div");
//     col.className = "col-md-6";
//     col.innerHTML = `
//       <div class="feature-card">
//         <h5>${feature.title}</h5>
//         <p class="text-muted">${feature.description}</p>
//       </div>
//     `;
//     featuresGrid.appendChild(col);
//   });
// });
