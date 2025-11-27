<template>
  <div class="page">
    <main class="container-fluid card">
      <h1 class="title">Business Card</h1>

      <p class="intro">
        Hi, my name is <strong>{{ firstName }} {{ lastName }}</strong>!
      </p>

      <h2 class="subtitle">Contact me</h2>
      <p class="email-line">
        Write an e-mail to <strong>{{ email }}</strong>
      </p>
      <p class="hint">or use the formular below:</p>

      <div class="contact-form">
        <textarea
            class="message"
            placeholder="Type some text ..."
            v-model="message"
        ></textarea>

        <button class="submit-button" type="button" @click="onClick">
          Submit
        </button>
      </div>
    </main>

    <footer class="footer container-fluid">
      &copy; 2024 My Business Card. Alle Rechte vorbehalten.
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const firstName = 'Matthias';
const lastName = 'Pfundner';
const email = 'example@gmail.com';

const message = ref<string>('');

function onClick() {
  console.log("Textarea Inhalt:", message.value);
}
</script>

<style scoped>
/* Modernes, gut lesbares Grundlayout */
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 16px;
  background: #e5e7eb; /* helles grau */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Visitenkarte */
.card {
  max-width: 420px;
  width: 100%;
  background: #ffffff; /* weiß für ideale Lesbarkeit */
  padding: 28px 26px 24px;
  border-radius: 14px;
  border: 1px solid #d1d5db;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

/* Überschriften */
.title {
  margin: 0 0 12px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #111827; /* sehr gut lesbar */
}

.subtitle {
  margin: 20px 0 6px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f2937; /* dunkles grau */
}

/* Texte */
.intro,
.email-line {
  color: #374151; /* dunkelgrau */
  margin-bottom: 6px;
}

.hint {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

/* Formularbereich */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Textarea */
.message {
  width: 100%;
  min-height: 90px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  font-size: 0.95rem;
  resize: vertical;
  color: #111827;
}

.message::placeholder {
  color: #9ca3af;
}

/* Button – modern & gut lesbar */
.submit-button {
  align-self: flex-end;
  padding: 8px 18px;
  border-radius: 9999px;
  border: none;
  background-color: #3b82f6; /* blau */
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.15s ease;
}

.submit-button:hover {
  background-color: #2563eb;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.35);
}

.submit-button:active {
  transform: translateY(1px);
  box-shadow: none;
}

/* Footer */
.footer {
  color: #6b7280;
  font-size: 0.85rem;
  text-align: center;
}
</style>
