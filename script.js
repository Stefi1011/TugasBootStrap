// Untuk contact agar tombol hanya bisa diklik bila semua data sudah terisi dan meresetnya setelah tombol diklik
document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault(); 

if (this.checkValidity()) {
    var emailModal = new bootstrap.Modal(document.getElementById('emailModal'), {});
    emailModal.show();
    this.reset();
} else {
    this.reportValidity();
}
});


// Untuk mengisi membership type dan price secara otomatis
document.addEventListener('DOMContentLoaded', function() {
    const membershipButtons = document.querySelectorAll('.membership-button');

    membershipButtons.forEach(button => {
      button.addEventListener('click', function() {
        const membershipType = button.getAttribute('data-membership');
        const membershipPrice = button.getAttribute('data-price');
        document.getElementById('membershipType').value = membershipType;
        document.getElementById('membershipPrice').value = membershipPrice;
      });
    });
  });