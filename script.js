<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ask Without Shame</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: #fff0f5;
      color: #333;
      line-height: 1.6;
    }

    header {
      background-color: #ff8da5;
      color: white;
      text-align: center;
      padding: 2rem 1rem;
    }

    main {
      padding: 2rem;
      max-width: 800px;
      margin: auto;
    }

    h2 {
      color: #cc3366;
      margin-top: 2rem;
    }

    .question-section form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

    input[type="text"],
    textarea {
      padding: 0.8rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 1rem;
    }

    button {
      background-color: #ff8da5;
      color: white;
      padding: 0.8rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover {
      background-color: #e67691;
    }

    #submittedQuestions {
      margin-top: 2rem;
      background: #fff5f8;
      border-left: 4px solid #ff8da5;
      padding: 1rem;
      border-radius: 5px;
    }

    .stories-section ul {
      padding-left: 1.2rem;
    }

    footer {
      text-align: center;
      padding: 1rem;
      background-color: #ffe1ea;
      margin-top: 3rem;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <header>
    <h1>Ask Without Shame</h1>
    <p>Helping girls feel safe asking about periods, health, and growing up 💖</p>
  </header>

  <main>
    <section class="question-section">
      <h2>💬 Ask a Question</h2>
      <p>Ask anything anonymously. No shame, just support.</p>
      <form id="questionForm">
        <input type="text" id="name" placeholder="Your name (optional)" />
        <textarea id="question" rows="4" placeholder="Type your question here..."></textarea>
        <button type="submit">Submit</button>
      </form>
      <div id="submittedQuestions"></div>
    </section>

    <section class="tracker-section">
      <h2>📅 Period Tracker</h2>
      <p>(Coming soon!) Track your cycle and mood here.</p>
    </section>

    <section class="stories-section">
      <h2>🩸 Real Period Stories</h2>
      <p>Read how others navigated their first period, awkward questions, and more:</p>
      <ul>
        <li>"I thought I was dying... until my older cousin told me what it was."</li>
        <li>"I was afraid to tell anyone at school. Now I want to help others not feel that way."</li>
        <li>More stories coming soon...</li>
      </ul>
    </section>
  </main>

  <footer>
    &copy; 2025 Ask Without Shame | Built with love for social good 💕
  </footer>

  <script>
    const form = document.getElementById('questionForm');
    const submittedQuestions = document.getElementById('submittedQuestions');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const question = document.getElementById('question').value.trim();

      if (question) {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${name || 'Anonymous'} asked:</strong><p>${question}</p><hr />`;
        submittedQuestions.prepend(div);
        form.reset();
      }
    });
  </script>
</body>
</html>
