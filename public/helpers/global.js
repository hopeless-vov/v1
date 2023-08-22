function getById(id) {
  return document.getElementById(id);
}

export default function getElementBounding(id) {
  return getById(id)?.getBoundingClientRect();
}
