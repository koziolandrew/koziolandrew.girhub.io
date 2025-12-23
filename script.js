document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const attendance = document.getElementById('attendance').value;
  const msg = attendance === "yes"
    ? `Thanks, ${name}! See you at the concert! 🎶`
    : `Thanks for letting us know, ${name}! We'll miss you 💛`;
  document.getElementById('responseMsg').textContent = msg;
  this.reset();
});
