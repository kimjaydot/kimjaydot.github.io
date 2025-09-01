function adjustContentForViewport() {
  const viewportWidth = window.innerWidth;
  const content1 = document.getElementById("content-1");
  const content2 = document.getElementById("content-2");
  const introText = document.getElementById("intro-text");

  // For smaller screens (e.g., less than 768px wide)
  if (viewportWidth < 768) {
    // Hide content-2 and replace content-1 with a shorter version
    content2.style.display = "none"; // Hides the second content block

    // Replace the first content block with shorter content
    content1.innerHTML = `
      <h1 class="nameheading">Hi, I'm Kim</h1>
      <h2>UX Designer & Researcher</h2>
    `;
  } else {
    // Restore the original content for larger screens
    content2.style.display = "block"; // Shows the second content block
    content1.innerHTML = `
      <h1 class="nameheading">Hi, I'm Kim Johnson</h1>
      <h2>UX Designer & Researcher</h2>
      <img src="images/kimjavatar-ai.png" />
    `;
    introText.innerHTML = `
      I specialize in creating engaging digital experiences by leveraging user feedback and innovative design...
    `;
  }
}

// Run the function on initial page load
adjustContentForViewport();

// Run the function on window resize
window.addEventListener("resize", adjustContentForViewport);
