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