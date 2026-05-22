const form = document.getElementById('raffleForm');
const participantsInput = document.getElementById('participants');
const winnerBadge = document.getElementById('winnerBadge');
const winnerText = document.getElementById('winnerText');
const loadDemo = document.getElementById('loadDemo');

const demoParticipants = [
  'Marcela Betancourt',
  'Juan Pérez',
  'Laura Gómez',
  'Carlos Rivas',
  'Ana Martínez',
  'Sofía Torres'
].join('\n');

loadDemo.addEventListener('click', () => {
  participantsInput.value = demoParticipants;
  participantsInput.focus();
  winnerBadge.textContent = 'Ejemplo cargado';
  winnerText.textContent = 'Ya puedes presionar Sortear ahora para elegir un ganador al azar.';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const participants = participantsInput.value
    .split(/\r?\n/)
    .map((value) => value.trim())
    .filter(Boolean);

  if (participants.length < 2) {
    winnerBadge.textContent = 'Faltan participantes';
    winnerText.textContent = 'Ingresa al menos dos nombres o números en líneas separadas para realizar el sorteo.';
    return;
  }

  const winnerIndex = Math.floor(Math.random() * participants.length);
  const winner = participants[winnerIndex];

  winnerBadge.textContent = winner;
  winnerText.textContent = `Ganador seleccionado entre ${participants.length} participantes.`;
});