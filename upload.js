document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const agent = params.get('agent') || 'Invité mystère';
  const mission = params.get('mission') || 'Ta mission secrète apparaît ici.';
  
  document.getElementById('agentName').textContent = `${agent} – ${mission}`;

  const form = document.getElementById('uploadForm');
  const fileInput = document.getElementById('fileInput');
  const status = document.getElementById('status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const file = fileInput.files[0];
    if (!file) return;

    status.textContent = 'Envoi en cours...';

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('https://uploadthing.com/api/uploadFiles', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer sk_live_f685b216f1eed0dd93ac0b9f6db50f42e9d14862fb879b1ce8e99442bfcff881',
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        status.innerHTML = `✅ Vidéo envoyée ! Merci beaucoup 🙌`;
      } else {
        throw new Error(data.message || 'Erreur inconnue');
      }
    } catch (err) {
      console.error(err);
      status.textContent = '❌ Échec de l’envoi. Réessaie.';
    }
  });
});
