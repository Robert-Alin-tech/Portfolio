document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebarToggle");
  const mainContent = document.getElementById("main");
  const footer = document.querySelector('.footer');

  // Initialize sidebar state
  function initSidebar() {
    sidebar.classList.add("collapsed");
    mainContent.style.marginLeft = "125px";
    footer.style.marginLeft = "125px";
    footer.style.width = "calc(100% - 125px)";
  }
  initSidebar();

  // Sidebar toggle (for mobile)
  toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("collapsed");
    if (sidebar.classList.contains("collapsed")) {
      mainContent.style.marginLeft = "125px";
      footer.style.marginLeft = "125px";
      footer.style.width = "calc(100% - 125px)";
    } else {
      mainContent.style.marginLeft = "250px";
      footer.style.marginLeft = "250px";
      footer.style.width = "calc(100% - 250px)";
    }
  });

  // Sidebar expand on mouseenter, collapse on mouseleave
  sidebar.addEventListener("mouseenter", function() {
    sidebar.classList.remove("collapsed");
    mainContent.style.marginLeft = "250px";
    footer.style.marginLeft = "250px";
    footer.style.width = "calc(100% - 250px)";
  });
  sidebar.addEventListener("mouseleave", function() {
    sidebar.classList.add("collapsed");
    mainContent.style.marginLeft = "125px";
    footer.style.marginLeft = "125px";
    footer.style.width = "calc(100% - 125px)";
  });

  // Insights: Tag filtering and "Load More" functionality
  const tagFilters = document.querySelectorAll('.tag-filter');
  const insightPosts = document.querySelectorAll('.insight-post');
  const loadMoreBtn = document.getElementById('loadMoreInsights');

  tagFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      let tag = btn.getAttribute('data-tag');
      insightPosts.forEach(post => {
        if (tag === 'all' || post.getAttribute('data-tags').includes(tag)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      insightPosts.forEach(post => {
        post.style.display = 'block';
      });
      loadMoreBtn.style.display = 'none';
    });
  }
});
