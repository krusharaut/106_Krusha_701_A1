async function fetchGoogle() {
  try {
    const fetchModule = await import("node-fetch");
    const fetch = fetchModule.default;

    const response = await fetch("https://www.google.com");
    const html = await response.text();
    console.log(html);
  } catch (error) {
    console.error("Error fetching Google:", error);
  }
}

fetchGoogle();
