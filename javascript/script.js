const chatBox   = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const response = getBotResponse(text);
    addMessage(response, "bot");
    playSound();
  }, 600);
}

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  // 1) Saludo personalizado
  if (input.includes("hola")) {
    return "Hola, soy Maxi, tu asistente virtual que te recuerda tus tareas y tus horarios de clase.";
  }

  // 2) Matemática / mate
  if (input.includes("mate") || input.includes("matemática") || input.includes("matematicas")) {
    return "Tienes clase de Matemática a las 5pm.";
  }

  // 3) Creatividad
  if (input.includes("creatividad")) {
    return "Tu curso de Creatividad es los lunes a las 3 pm.";
  }

  // 4) Programación
  if (input.includes("programación") || input.includes("programacion")) {
    return "Tu curso de Programación es los martes a las 7 pm.";
  }

  // 5) ¿Tengo tarea?
  if (input.includes("tarea")) {
    return "Tienes una exposición en el curso de Creatividad.";
  }

  // 6) ¿Tengo exámenes?
if (input.includes("examen") || input.includes("examenes")) {
  return "Tienes un examen de Matemática para mañana a las 5pm.";
}

// 7) Tengo algo más?
if (input.includes("más")) {
    return "No presentas más examenes para esta semana. No hay tareas pendientes."
}

  // 7) Fallback
  return "Lo siento, no entendí tu pregunta.";
}

// Catch 'Enter'
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

// Sonido al responder
function playSound() {
  const audio = document.getElementById("popSound");
  audio.currentTime = 0;
  audio.play().catch(console.error);
}




