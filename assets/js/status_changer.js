// Attach function to all status buttons
window.onload = function () {
  const buttons = document.getElementsByClassName('status-btn')
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      const status = this.getAttribute('data-status')
      const clue = this.closest('tr').querySelector('.guess-component')
      
      // Remove all status classes
      clue.classList.remove('x', 'checked', 'question')
      
      // Remove active state from all buttons in this row
      const rowButtons = this.closest('.status-buttons').querySelectorAll('.status-btn')
      rowButtons.forEach(btn => btn.classList.remove('active'))
      
      // Add the appropriate class and mark button as active
      if (status === 'x') {
        clue.classList.add('x')
        this.classList.add('active')
      } else if (status === 'checked') {
        clue.classList.add('checked')
        this.classList.add('active')
      } else if (status === 'question') {
        clue.classList.add('question')
        this.classList.add('active')
      } else {
        // unchecked - just mark button as active
        this.classList.add('active')
      }
    }
  }
}
