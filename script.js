window.onload = () => {
  const btn = document.getElementById('view-tours-btn')
  btn.addEventListener('click', () => {
    document.getElementById('tour-1').scrollIntoView({
      behavior: 'smooth'
    })
  })
}