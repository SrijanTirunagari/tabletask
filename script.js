function openModal(userName, userType, lastAccessed, createdBy, contactNo, email) {
  document.getElementById("modal-username").innerText = userName;
  document.getElementById("modal-usertype").innerText = userType;
  document.getElementById("modal-lastaccessed").innerText = lastAccessed;
  document.getElementById("modal-createdby").innerText = createdBy;
  document.getElementById("modal-contactno").innerText = contactNo;
  document.getElementById("modal-email").innerText = email;

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
