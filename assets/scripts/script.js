function openBottomSheet(id) {
  const el = document.getElementById(id);
  el.classList.add('active');  
}
function closeBottomSheet(id) {
  const el = document.getElementById(id);
  el.classList.remove('active');  
}