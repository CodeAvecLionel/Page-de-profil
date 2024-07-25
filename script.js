
document.addEventListener('DOMContentLoaded', function() {
    // Données de l'utilisateur (simulées)
    let userData = {
      name: "Lionel",
      firstname: "Jean",
      birthdate: "1997-05-15",
      birthplace: "Paris",
      email: "lioneljean@email.com",
      phone: "+33 6 12 34 56 78",
      address: "123 Rue de la République, 75001 Paris",
      profession: "Ingénieur Logiciel",
      company: "TechInnovation SA"
    };
  
    const form = document.getElementById('profile-form');
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const themeSelect = document.getElementById('theme-select');
  
    // Fonction pour mettre à jour les informations du profil
    function updateProfile(data) {
      for (const key in data) {
        const element = document.getElementById(key);
        const input = document.getElementById(`${key}-input`);
        if (element && input) {
          element.textContent = data[key];
          input.value = data[key];
        }
      }
  
      // Mise à jour de l'image de profil avec les initiales
      const initials = (data.firstname[0] + data.name[0]).toUpperCase();
      document.getElementById('profile-picture').textContent = initials;
    }
  
    // Fonction pour basculer entre le mode affichage et le mode édition
    function toggleEditMode() {
      const infoValues = document.querySelectorAll('.info-value');
      const inputs = document.querySelectorAll('input');
      
      infoValues.forEach(value => value.classList.toggle('hidden'));
      inputs.forEach(input => input.classList.toggle('hidden'));
      
      editBtn.classList.toggle('hidden');
      saveBtn.classList.toggle('hidden');
    }
  
    // Gestionnaire d'événement pour le bouton "Modifier"
    editBtn.addEventListener('click', toggleEditMode);
  
    // Gestionnaire d'événement pour le formulaire
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Mettre à jour les données utilisateur avec les nouvelles valeurs
      for (const key in userData) {
        const input = document.getElementById(`${key}-input`);
        if (input) {
          userData[key] = input.value;
        }
      }
      
      // Mettre à jour l'affichage
      updateProfile(userData);
      toggleEditMode();
      
      // Ici, vous pourriez envoyer les données mises à jour au serveur
      console.log('Données mises à jour:', userData);
    });
  
    // Fonction pour changer le thème
    function changeTheme(theme) {
      const root = document.documentElement;
      switch (theme) {
        case 'dark':
          root.style.setProperty('--primary-color', '#3498db');
          root.style.setProperty('--secondary-color', '#2ecc71');
          root.style.setProperty('--background-color', '#2c3e50');
          root.style.setProperty('--text-color', '#ecf0f1');
          root.style.setProperty('--border-color', '#7f8c8d');
          root.style.setProperty('--container-bg', '#34495e');
          break;
        case 'light':
          root.style.setProperty('--primary-color', '#3498db');
          root.style.setProperty('--secondary-color', '#2ecc71');
          root.style.setProperty('--background-color', '#ecf0f1');
          root.style.setProperty('--text-color', '#2c3e50');
          root.style.setProperty('--border-color', '#bdc3c7');
          root.style.setProperty('--container-bg', '#ffffff');
          break;
        case 'colorful':
          root.style.setProperty('--primary-color', '#e74c3c');
          root.style.setProperty('--secondary-color', '#f39c12');
          root.style.setProperty('--background-color', '#1abc9c');
          root.style.setProperty('--text-color', '#34495e');
          root.style.setProperty('--border-color', '#9b59b6');
          root.style.setProperty('--container-bg', '#ffffff');
          break;
        default:
          root.style.setProperty('--primary-color', '#3498db');
          root.style.setProperty('--secondary-color', '#2ecc71');
          root.style.setProperty('--background-color', '#ecf0f1');
          root.style.setProperty('--text-color', '#34495e');
          root.style.setProperty('--border-color', '#bdc3c7');
          root.style.setProperty('--container-bg', '#ffffff');
      }
    }
  
    // Gestionnaire d'événement pour le sélecteur de thème
    themeSelect.addEventListener('change', function() {
      changeTheme(this.value);
    });
  
    // Initialiser l'affichage du profil
    updateProfile(userData);
  });
  