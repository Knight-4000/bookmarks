const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookMarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

// Show modal and focus on first input

function showModal() {
  modal.classList.add('show-modal');
    websiteNameEl.focus();
}

// Event Listener
modalShow.addEventListener('click', showModal);