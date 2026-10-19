// ============================================================
// Training Tracker PWA - Main Application
// ============================================================

(function () {
  'use strict';

  // --- Supabase Client ---
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // --- In-memory cache (populated on login) ---
  const _data = { customExercises: [], trainingDays: [], workoutLogs: [] };
  let currentUser = null;

  // --- i18n ---
  const T = {
    en: {
      appTitle: 'Training Tracker',
      home: 'Home',
      exercises: 'Exercises',
      workout: 'Workout',
      days: 'Days',
      stats: 'Stats',
      startWorkout: 'Start Workout',
      workouts: 'Workouts',
      dayStreak: 'Day Streak',
      plans: 'Plans',
      lastWorkout: 'Last Workout',
      noWorkoutsYet: 'No workouts yet. Create a training day and start your first workout!',
      exercisesCount: 'exercises',
      setsCount: 'sets',
      kgVolume: 'kg volume',
      add: '+ Add',
      searchExercises: 'Search exercises...',
      all: 'All',
      noExercisesFound: 'No exercises found.',
      back: 'Back',
      noGifSet: 'No GIF set',
      howToPerform: 'How to Perform',
      watchOnYouTube: 'Watch on YouTube',
      sets: 'Sets',
      reps: 'Reps',
      method: 'Method',
      addExercise: 'Add Exercise',
      name: 'Name',
      exerciseName: 'Exercise name',
      muscleGroup: 'Muscle Group',
      select: 'Select...',
      otherTypeBelow: 'Other (type below)',
      customMuscleGroup: 'Custom Muscle Group',
      recommendedSets: 'Recommended Sets',
      recommendedReps: 'Recommended Reps',
      description: 'Description',
      howToPerformPlaceholder: 'How to perform this exercise...',
      youtubeUrlOpt: 'YouTube URL (optional)',
      gifUrlOpt: 'GIF URL (optional)',
      saveExercise: 'Save Exercise',
      enterNameAndMuscle: 'Please enter a name and muscle group.',
      trainingDays: 'Day Plans',
      create: '+ Create',
      removed: '(removed)',
      noTrainingDaysYet: 'No day plans yet.\nCreate one to get started!',
      createTrainingDay: 'Create Day Plan',
      selected: 'selected',
      selectExercises: 'Select Exercises',
      saveTrainingDay: 'Save Training Day',
      enterName: 'Please enter a name.',
      selectAtLeastOne: 'Please select at least one exercise.',
      edit: 'Edit',
      saveChanges: 'Save Changes',
      deleteTrainingDay: 'Delete Day Plan',
      deleteConfirm: 'Delete',
      noTrainingDaysCreated: 'No day plans created yet.',
      selectDayToBegin: 'Select a training day to begin:',
      exercise: 'Exercise',
      of: 'of',
      end: 'End',
      set: 'Set',
      lastTime: 'Last Time',
      setsCompleted: 'Sets completed',
      weight: 'Weight (kg)',
      difficulty: 'Difficulty',
      easy: 'Easy',
      hard: 'Hard',
      tooHard: 'Too Hard',
      comment: 'Comment',
      optionalNotes: 'Optional notes...',
      addComment: '+ Add Comment',
      nextSet: 'Next Set',
      exerciseDone: 'Exercise Done',
      confirm: 'Confirm',
      enterWeight: 'Enter weight in kg',
      enterReps: 'Enter number of reps',
      selectDifficulty: 'How did it feel?',
      endWorkoutConfirm: 'End this workout? Progress will be saved.',
      workoutComplete: 'Workout Complete!',
      backToHome: 'Back to Home',
      statistics: 'Statistics',
      history: 'History',
      volume: 'Volume',
      noWorkoutsRecorded: 'No workouts recorded yet.',
      noDataYet: 'No data yet.',
      volumePerWorkout: 'Volume per Workout (last 10)',
      exerciseStats: 'Exercise Stats',
      max: 'Max',
      totalSets: 'total sets',
      noExerciseData: 'No exercise data yet.',
      done: 'Done',
      language: 'Language',
      german: 'Deutsch',
      english: 'English',
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      createAccount: 'Create Account',
      fillAllFields: 'Please fill all fields.',
      passwordsNoMatch: 'Passwords do not match.',
      accountCreated: 'Account created successfully! You can log in now.',
      logout: 'Logout',
      deleteWorkout: 'Delete Workout',
      next: 'Next',
      addSet: '+ Add Set',
      nextExercise: 'Next Exercise',
      finishWorkout: 'Finish Workout',
      endWorkout: 'End Workout',
      exerciseOverview: 'Exercise Overview',
      recommended: 'Recommended',
      cancelEndWorkout: 'Cancel',
      saveAndExit: 'Save & Exit',
      discardAndExit: "Don't Save & Exit",
      noHistoryYet: 'No history yet.',
      last10: 'Last 10 sessions',
      resumeWorkout: 'Resume Workout',
      continueWorkout: 'Continue Workout',
      editWorkout: 'Edit Workout',
      cancelEdit: 'Cancel',
      inProgress: 'In Progress',
      gym: 'Gym',
      posture: 'Posture',
      postureTitle: 'Posture Correction',
      problem: 'Problem',
      possiblePain: 'Possible Pain',
      cause: 'Cause',
      howToAddress: 'How to address it',
      exercise: 'Exercise',
      tips: 'Tips',
    },
    de: {
      appTitle: 'Training Tracker',
      home: 'Start',
      exercises: 'Übungen',
      workout: 'Training',
      days: 'Tage',
      stats: 'Statistik',
      startWorkout: 'Training starten',
      workouts: 'Trainings',
      dayStreak: 'Tage-Serie',
      plans: 'Pläne',
      lastWorkout: 'Letztes Training',
      noWorkoutsYet: 'Noch keine Trainings. Erstelle einen Trainingstag und starte dein erstes Training!',
      exercisesCount: 'Übungen',
      setsCount: 'Sätze',
      kgVolume: 'kg Volumen',
      add: '+ Neu',
      searchExercises: 'Übungen suchen...',
      all: 'Alle',
      noExercisesFound: 'Keine Übungen gefunden.',
      back: 'Zurück',
      noGifSet: 'Kein GIF gesetzt',
      howToPerform: 'Ausführung',
      watchOnYouTube: 'Auf YouTube ansehen',
      sets: 'Sätze',
      reps: 'Wdh.',
      method: 'Methode',
      addExercise: 'Übung hinzufügen',
      name: 'Name',
      exerciseName: 'Übungsname',
      muscleGroup: 'Muskelgruppe',
      select: 'Auswählen...',
      otherTypeBelow: 'Andere (unten eingeben)',
      customMuscleGroup: 'Eigene Muskelgruppe',
      recommendedSets: 'Empfohlene Sätze',
      recommendedReps: 'Empfohlene Wdh.',
      description: 'Beschreibung',
      howToPerformPlaceholder: 'Wie wird die Übung ausgeführt...',
      youtubeUrlOpt: 'YouTube URL (optional)',
      gifUrlOpt: 'GIF URL (optional)',
      saveExercise: 'Übung speichern',
      enterNameAndMuscle: 'Bitte Name und Muskelgruppe eingeben.',
      trainingDays: 'Tagespläne',
      create: '+ Erstellen',
      removed: '(entfernt)',
      noTrainingDaysYet: 'Noch keine Tagespläne.\nErstelle einen um loszulegen!',
      createTrainingDay: 'Tagesplan erstellen',
      selected: 'ausgewählt',
      selectExercises: 'Übungen auswählen',
      saveTrainingDay: 'Trainingstag speichern',
      enterName: 'Bitte einen Namen eingeben.',
      selectAtLeastOne: 'Bitte mindestens eine Übung auswählen.',
      edit: 'Bearbeiten',
      saveChanges: 'Änderungen speichern',
      deleteTrainingDay: 'Tagesplan löschen',
      deleteConfirm: 'Löschen',
      noTrainingDaysCreated: 'Noch keine Tagespläne erstellt.',
      selectDayToBegin: 'Wähle einen Trainingstag:',
      exercise: 'Übung',
      of: 'von',
      end: 'Ende',
      set: 'Satz',
      lastTime: 'Letztes Mal',
      setsCompleted: 'Abgeschlossene Sätze',
      weight: 'Gewicht (kg)',
      difficulty: 'Schwierigkeit',
      easy: 'Leicht',
      hard: 'Schwer',
      tooHard: 'Zu Schwer',
      comment: 'Kommentar',
      optionalNotes: 'Optionale Notizen...',
      addComment: '+ Kommentar',
      nextSet: 'Nächster Satz',
      exerciseDone: 'Übung fertig',
      confirm: 'Bestätigen',
      enterWeight: 'Gewicht in kg eingeben',
      enterReps: 'Anzahl Wiederholungen',
      selectDifficulty: 'Wie hat es sich angefühlt?',
      endWorkoutConfirm: 'Training beenden? Fortschritt wird gespeichert.',
      workoutComplete: 'Training abgeschlossen!',
      backToHome: 'Zurück zur Startseite',
      statistics: 'Statistik',
      history: 'Verlauf',
      volume: 'Volumen',
      noWorkoutsRecorded: 'Noch keine Trainings aufgezeichnet.',
      noDataYet: 'Noch keine Daten.',
      volumePerWorkout: 'Volumen pro Training (letzte 10)',
      exerciseStats: 'Übungs-Statistik',
      max: 'Max',
      totalSets: 'Sätze gesamt',
      noExerciseData: 'Noch keine Übungsdaten.',
      done: 'Fertig',
      language: 'Sprache',
      german: 'Deutsch',
      english: 'English',
      login: 'Anmelden',
      register: 'Registrieren',
      email: 'E-Mail',
      password: 'Passwort',
      confirmPassword: 'Passwort bestätigen',
      createAccount: 'Konto erstellen',
      fillAllFields: 'Bitte alle Felder ausfüllen.',
      passwordsNoMatch: 'Passwörter stimmen nicht überein.',
      accountCreated: 'Konto erfolgreich erstellt! Du kannst dich jetzt anmelden.',
      logout: 'Abmelden',
      deleteWorkout: 'Training löschen',
      next: 'Weiter',
      addSet: '+ Satz',
      nextExercise: 'Nächste Übung',
      finishWorkout: 'Training abschließen',
      endWorkout: 'Training beenden',
      exerciseOverview: 'Übungsübersicht',
      recommended: 'Empfohlen',
      cancelEndWorkout: 'Abbrechen',
      saveAndExit: 'Speichern & Beenden',
      discardAndExit: 'Nicht speichern & Beenden',
      noHistoryYet: 'Noch keine Aufzeichnungen.',
      last10: 'Letzte 10 Einheiten',
      resumeWorkout: 'Training fortsetzen',
      continueWorkout: 'Training fortführen',
      editWorkout: 'Training bearbeiten',
      cancelEdit: 'Abbrechen',
      inProgress: 'Läuft',
      gym: 'Gym',
      posture: 'Haltung',
      postureTitle: 'Haltungskorrektur',
      problem: 'Problem',
      possiblePain: 'Mögliche Schmerzen',
      cause: 'Ursache',
      howToAddress: 'Wie du es angehen kannst',
      exercise: 'Übung',
      tips: 'Tipps',
    }
  };

  function t(key) {
    const lang = Store.getLang();
    return (T[lang] && T[lang][key]) || T.en[key] || key;
  }

  function exName(ex) {
    return (Store.getLang() === 'de' && ex.name_de) ? ex.name_de : ex.name;
  }
  function exMuscle(ex) {
    return (Store.getLang() === 'de' && ex.muscle_de) ? ex.muscle_de : ex.muscle;
  }
  function exDesc(ex) {
    return (Store.getLang() === 'de' && ex.description_de) ? ex.description_de : ex.description;
  }
  function getMuscleLabel(muscle) {
    if (Store.getLang() !== 'de') return muscle;
    const ex = Store.getExercises().find(e => e.muscle === muscle);
    return (ex && ex.muscle_de) ? ex.muscle_de : muscle;
  }

  // IDs encode creation time as base36 in the second segment (e.g. "wl_lp3k2jf...").
  // Use this as a tiebreaker when two logs share the same date string.
  function logSortKey(log) {
    const ts = parseInt((log.id || '').split('_')[1] || '0', 36);
    return isNaN(ts) ? 0 : ts;
  }
  function sortLogsByDateDesc(logs) {
    return [...logs].sort((a, b) => {
      const dateDiff = new Date(b.date) - new Date(a.date);
      return dateDiff !== 0 ? dateDiff : logSortKey(b) - logSortKey(a);
    });
  }

  // --- Data Layer (in-memory cache + async Supabase sync) ---
  const Store = {
    getLang() { return localStorage.getItem('lang') || 'en'; },
    setLang(lang) { localStorage.setItem('lang', lang); },

    getExercises() {
      return [...DEFAULT_EXERCISES, ..._data.customExercises];
    },
    getExercise(id) { return this.getExercises().find(e => e.id === id); },

    getPostureExercises() { return POSTURE_EXERCISES; },
    getPostureExercise(id) { return POSTURE_EXERCISES.find(p => p.id === id); },

    async addExercise(ex) {
      _data.customExercises.push(ex);
      await sb.from('custom_exercises').insert({
        id: ex.id,
        user_id: currentUser.id,
        name: ex.name,
        name_de: ex.name_de || '',
        muscle: ex.muscle,
        muscle_de: ex.muscle_de || '',
        recommended_sets: ex.recommendedSets || '3',
        recommended_reps: ex.recommendedReps || '10',
        method: ex.method || 'Straight Sets',
        description: ex.description || '',
        description_de: ex.description_de || '',
        gif_url: ex.gifUrl || '',
        youtube_url: ex.youtubeUrl || ''
      });
    },

    getTrainingDays() { return _data.trainingDays; },
    async saveTrainingDays(days) {
      _data.trainingDays = days;
      await sb.from('training_days').delete().eq('user_id', currentUser.id);
      if (days.length > 0) {
        await sb.from('training_days').insert(days.map(d => ({
          id: d.id,
          user_id: currentUser.id,
          name: d.name,
          exercise_ids: d.exerciseIds
        })));
      }
    },

    getWorkoutLogs() { return _data.workoutLogs; },
    async addWorkoutLog(log) {
      _data.workoutLogs.push(log);
      await sb.from('workout_logs').insert({
        id: log.id,
        user_id: currentUser.id,
        training_day_id: log.trainingDayId,
        training_day_name: log.trainingDayName,
        date: log.date,
        completed: log.completed,
        exercises: log.exercises
      });
    },

    getLastWorkoutForExercise(exerciseId) {
      const logs = sortLogsByDateDesc(this.getWorkoutLogs().filter(l => l.completed));
      for (const log of logs) {
        const ex = log.exercises.find(e => e.exerciseId === exerciseId);
        if (ex && ex.sets.some(s => parseFloat(s.reps) > 0 || parseFloat(s.weight) > 0)) return ex;
      }
      return null;
    },

    getLastWorkoutPositionForExercise(exerciseId) {
      const logs = sortLogsByDateDesc(this.getWorkoutLogs().filter(l => l.completed));
      for (const log of logs) {
        const idx = log.exercises.findIndex(e => e.exerciseId === exerciseId);
        if (idx === -1) continue;
        const ex = log.exercises[idx];
        if (ex.sets.some(s => parseFloat(s.reps) > 0 || parseFloat(s.weight) > 0)) {
          return { position: idx + 1, total: log.exercises.length };
        }
      }
      return null;
    },

    async saveWorkoutProgress(log) {
      const existingIdx = _data.workoutLogs.findIndex(l => l.id === log.id);
      if (existingIdx >= 0) {
        _data.workoutLogs[existingIdx] = { ...log };
        await sb.from('workout_logs').update({
          exercises: log.exercises,
          completed: log.completed
        }).eq('id', log.id).eq('user_id', currentUser.id);
      } else {
        _data.workoutLogs.push({ ...log });
        await sb.from('workout_logs').insert({
          id: log.id,
          user_id: currentUser.id,
          training_day_id: log.trainingDayId,
          training_day_name: log.trainingDayName,
          date: log.date,
          completed: log.completed,
          exercises: log.exercises
        });
      }
    },

    async updateWorkoutLog(log) {
      const idx = _data.workoutLogs.findIndex(l => l.id === log.id);
      if (idx >= 0) _data.workoutLogs[idx] = { ...log };
      await sb.from('workout_logs').update({
        exercises: log.exercises,
        completed: log.completed
      }).eq('id', log.id).eq('user_id', currentUser.id);
    },

    async deleteWorkoutLog(id) {
      _data.workoutLogs = _data.workoutLogs.filter(l => l.id !== id);
      await sb.from('workout_logs').delete().eq('id', id).eq('user_id', currentUser.id);
    },

    getLastWorkout() {
      const logs = sortLogsByDateDesc(this.getWorkoutLogs().filter(l => l.completed));
      return logs.length > 0 ? logs[0] : null;
    },

    getStreak() {
      const logs = this.getWorkoutLogs().filter(l => l.completed);
      if (logs.length === 0) return 0;
      let streak = 0;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let checkDate = new Date(today);

      for (let i = logs.length - 1; i >= 0; i--) {
        const logDate = new Date(logs[i].date);
        logDate.setHours(0, 0, 0, 0);
        const diff = Math.floor((checkDate - logDate) / 86400000);
        if (diff <= 1) {
          streak++;
          checkDate = new Date(logDate);
        } else break;
      }
      return streak;
    }
  };

  // --- Load all user data from Supabase into cache ---
  async function loadUserData() {
    const [exRes, dayRes, logRes] = await Promise.all([
      sb.from('custom_exercises').select('*'),
      sb.from('training_days').select('*'),
      sb.from('workout_logs').select('*')
    ]);
    if (exRes.error || dayRes.error || logRes.error) {
      throw new Error('Failed to load data from server.');
    }
    const customExercises = exRes.data;
    const trainingDays = dayRes.data;
    const workoutLogs = logRes.data;

    _data.customExercises = (customExercises || []).map(row => ({
      id: row.id,
      name: row.name,
      name_de: row.name_de || '',
      muscle: row.muscle,
      muscle_de: row.muscle_de || '',
      recommendedSets: row.recommended_sets || '3',
      recommendedReps: row.recommended_reps || '10',
      method: row.method || 'Straight Sets',
      description: row.description || '',
      description_de: row.description_de || '',
      gifUrl: row.gif_url || '',
      youtubeUrl: row.youtube_url || '',
      isCustom: true
    }));

    _data.trainingDays = (trainingDays || []).map(row => ({
      id: row.id,
      name: row.name,
      exerciseIds: row.exercise_ids || []
    }));

    _data.workoutLogs = (workoutLogs || []).map(row => ({
      id: row.id,
      trainingDayId: row.training_day_id,
      trainingDayName: row.training_day_name,
      date: row.date,
      completed: row.completed,
      exercises: row.exercises || []
    }));
  }

  // --- Router ---
  let currentView = 'home';
  let viewParams = {};
  const app = document.getElementById('app');

  function navigate(view, params = {}) {
    currentView = view;
    viewParams = params;
    render();
    window.scrollTo(0, 0);
  }

  // --- Loading screen ---
  function renderLoading() {
    document.body.classList.add('auth-mode');
    app.innerHTML = '<div class="loading-screen"><div class="spinner"></div></div>';
  }

  // --- Auth screen ---
  function renderAuth() {
    document.body.classList.add('auth-mode');
    let isLogin = true;

    function renderAuthForm() {
      app.innerHTML = `
        <div class="auth-container">
          <h1 class="auth-title">${t('appTitle')}</h1>
          <div class="filter-pills" style="justify-content:center;margin-bottom:24px">
            <button class="pill ${isLogin ? 'active' : ''}" id="tab-login">${t('login')}</button>
            <button class="pill ${!isLogin ? 'active' : ''}" id="tab-register">${t('register')}</button>
          </div>
          <div class="input-group">
            <label>${t('email')}</label>
            <input type="email" id="auth-email" placeholder="you@example.com" autocomplete="email">
          </div>
          <div class="input-group">
            <label>${t('password')}</label>
            <input type="password" id="auth-password" placeholder="••••••••" autocomplete="${isLogin ? 'current-password' : 'new-password'}">
          </div>
          ${!isLogin ? `
          <div class="input-group">
            <label>${t('confirmPassword')}</label>
            <input type="password" id="auth-confirm" placeholder="••••••••" autocomplete="new-password">
          </div>` : ''}
          <div id="auth-error" class="auth-error" style="display:none"></div>
          <button class="btn btn-primary btn-full mt-8" id="auth-submit">${isLogin ? t('login') : t('createAccount')}</button>
        </div>
      `;

      document.getElementById('tab-login').addEventListener('click', () => { isLogin = true; renderAuthForm(); });
      document.getElementById('tab-register').addEventListener('click', () => { isLogin = false; renderAuthForm(); });

      function showError(msg) {
        const el = document.getElementById('auth-error');
        el.textContent = msg;
        el.style.display = '';
      }

      async function submit() {
        const email = document.getElementById('auth-email').value.trim();
        const password = document.getElementById('auth-password').value;
        if (!email || !password) return showError(t('fillAllFields'));

        if (!isLogin) {
          const confirmVal = document.getElementById('auth-confirm').value;
          if (password !== confirmVal) return showError(t('passwordsNoMatch'));
          const { error } = await sb.auth.signUp({ email, password });
          if (error) return showError(error.message);
          const savedEmail = email;
          isLogin = true;
          renderAuthForm();
          document.getElementById('auth-email').value = savedEmail;
          const successEl = document.getElementById('auth-error');
          successEl.textContent = t('accountCreated');
          successEl.style.display = '';
          successEl.classList.add('auth-success');
        } else {
          const { data, error } = await sb.auth.signInWithPassword({ email, password });
          if (error) return showError(error.message);
          await onLogin(data.user);
        }
      }

      document.getElementById('auth-submit').addEventListener('click', submit);
      document.getElementById('auth-password').addEventListener('keydown', e => {
        if (e.key === 'Enter') submit();
      });
      if (!isLogin) {
        document.getElementById('auth-confirm').addEventListener('keydown', e => {
          if (e.key === 'Enter') submit();
        });
      }
    }

    renderAuthForm();
  }

  // --- On successful login ---
  async function onLogin(user) {
    currentUser = user;
    renderLoading();
    await loadUserData();
    if (!checkAndResumeCrashedWorkout()) {
      navigate('home');
    }
  }

  // --- Logout ---
  async function logout() {
    await sb.auth.signOut();
    currentUser = null;
    _data.customExercises = [];
    _data.trainingDays = [];
    _data.workoutLogs = [];
    renderAuth();
  }

  function render() {
    if (!currentUser) { renderAuth(); return; }
    document.body.classList.remove('auth-mode');

    app.style.animation = 'none';
    app.offsetHeight; // reflow
    app.style.animation = 'fadeIn 0.2s ease';

    const views = {
      'home': renderHome,
      'exercises': renderExercises,
      'exercise-detail': renderExerciseDetail,
      'posture-detail': renderPostureDetail,
      'add-exercise': renderAddExercise,
      'training-days': renderTrainingDays,
      'create-day': renderCreateDay,
      'edit-day': renderEditDay,
      'start-workout': renderStartWorkout,
      'active-workout': renderActiveWorkout,
      'workout-summary': renderWorkoutSummary,
      'statistics': renderStatistics,
      'workout-detail': renderWorkoutDetail,
    };

    (views[currentView] || renderHome)();
    updateNav();
  }

  function updateNav() {
    // Update nav labels
    const navLabels = {
      'home': t('home'),
      'exercises': t('exercises'),
      'start-workout': t('workout'),
      'training-days': t('days'),
      'statistics': t('stats')
    };
    document.querySelectorAll('.nav-btn').forEach(btn => {
      const label = btn.querySelector('span');
      if (label && navLabels[btn.dataset.view]) {
        label.textContent = navLabels[btn.dataset.view];
      }
      btn.classList.toggle('active', btn.dataset.view === currentView ||
        (btn.dataset.view === 'exercises' && currentView === 'exercise-detail') ||
        (btn.dataset.view === 'exercises' && currentView === 'add-exercise') ||
        (btn.dataset.view === 'exercises' && currentView === 'posture-detail') ||
        (btn.dataset.view === 'training-days' && ['create-day', 'edit-day'].includes(currentView)) ||
        (btn.dataset.view === 'start-workout' && ['active-workout', 'workout-summary'].includes(currentView)) ||
        (btn.dataset.view === 'statistics' && currentView === 'workout-detail'));
    });

    if (['active-workout'].includes(currentView)) {
      document.body.classList.add('workout-active');
    } else {
      document.body.classList.remove('workout-active');
    }
  }

  // --- Nav Event Listeners ---
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.view));
  });

  // --- Helper Functions ---
  function genId(prefix) {
    return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function getDateLocale() {
    return Store.getLang() === 'de' ? 'de-DE' : 'en-US';
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString(getDateLocale(), { weekday: 'short', month: 'short', day: 'numeric' });
  }

  function formatDateTime(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString(getDateLocale(), { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  function escHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function getMuscleGroups() {
    const exercises = Store.getExercises();
    return [...new Set(exercises.map(e => e.muscle))].sort();
  }

  // --- Language Toggle Helper ---
  function langToggleHtml() {
    const lang = Store.getLang();
    return `
      <button class="btn btn-secondary btn-sm" id="lang-toggle" style="margin-bottom:16px">
        ${lang === 'en' ? '🇩🇪 Deutsch' : '🇬🇧 English'}
      </button>`;
  }

  function bindLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        Store.setLang(Store.getLang() === 'en' ? 'de' : 'en');
        render();
      });
    }
  }

  // --- View: Home ---
  function renderHome() {
    const logs = Store.getWorkoutLogs().filter(l => l.completed);
    const totalWorkouts = logs.length;
    const streak = Store.getStreak();
    const last = Store.getLastWorkout();
    const incompleteWorkout = [..._data.workoutLogs].reverse().find(l => !l.completed);

    let resumeHtml = '';
    if (incompleteWorkout) {
      resumeHtml = `
        <div class="card resume-card" onclick="App.resumeIncompleteWorkout()" style="border:1px solid var(--accent);margin-bottom:12px">
          <div class="card-row">
            <div>
              <div style="font-size:15px;font-weight:600;color:var(--accent)">${t('resumeWorkout')}</div>
              <div class="text-dim text-sm mt-8">${escHtml(incompleteWorkout.trainingDayName)} &middot; ${formatDate(incompleteWorkout.date)}</div>
            </div>
            <div style="color:var(--accent);font-size:20px">›</div>
          </div>
        </div>`;
    }

    let lastSummaryHtml = '';
    if (last) {
      const totalSets = last.exercises.reduce((s, e) => s + e.sets.length, 0);
      lastSummaryHtml = `
        <div class="card" onclick="App.navigate('workout-detail', {logId:'${last.id}'})">
          <h3>${t('lastWorkout')}</h3>
          <div class="text-dim text-sm">${escHtml(last.trainingDayName)} &middot; ${formatDate(last.date)}</div>
          <div class="text-sm mt-8">${last.exercises.length} ${t('exercisesCount')} &middot; ${totalSets} ${t('setsCount')}</div>
        </div>`;
    }

    app.innerHTML = `
      <div class="flex-between mb-16">
        <h1 style="margin-bottom:0">${t('appTitle')}</h1>
        <button class="btn btn-secondary btn-sm" onclick="App.logout()">${t('logout')}</button>
      </div>
      ${langToggleHtml()}
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-value">${totalWorkouts}</div>
          <div class="stat-label">${t('workouts')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${streak}</div>
          <div class="stat-label">${t('dayStreak')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Store.getTrainingDays().length}</div>
          <div class="stat-label">${t('plans')}</div>
        </div>
      </div>
      ${resumeHtml}
      <button class="btn btn-primary btn-full mb-16" onclick="App.navigate('start-workout')">${t('startWorkout')}</button>
      ${lastSummaryHtml}
      ${!last ? `<div class="empty-state"><p>${t('noWorkoutsYet')}</p></div>` : ''}
    `;

    bindLangToggle();
  }

  // --- View: Exercises ---
  function renderExercises() {
    const tab = viewParams.exerciseTab || 'gym';
    if (tab === 'posture') { renderPostureList(); return; }

    const exercises = Store.getExercises();
    const muscles = getMuscleGroups();
    const filter = viewParams.filter || 'All';
    const search = viewParams.search || '';

    let filtered = exercises;
    if (filter !== 'All') filtered = filtered.filter(e => e.muscle === filter);
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(e =>
        e.name.toLowerCase().includes(q) ||
        e.muscle.toLowerCase().includes(q) ||
        (e.name_de && e.name_de.toLowerCase().includes(q)) ||
        (e.muscle_de && e.muscle_de.toLowerCase().includes(q))
      );
    }

    app.innerHTML = `
      <div class="page-header">
        <h1>${t('exercises')}</h1>
        <button class="btn btn-primary btn-sm" onclick="App.navigate('add-exercise')">${t('add')}</button>
      </div>
      <div class="ex-tab-toggle">
        <button class="ex-tab-btn ex-tab-btn--active" data-tab="gym">${t('gym')}</button>
        <button class="ex-tab-btn" data-tab="posture">${t('posture')}</button>
      </div>
      <div class="search-bar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="search" id="ex-search" placeholder="${t('searchExercises')}" value="${escHtml(search)}">
      </div>
      <div class="filter-pills">
        <button class="pill ${filter === 'All' ? 'active' : ''}" data-filter="All">${t('all')}</button>
        ${muscles.map(m => `<button class="pill ${filter === m ? 'active' : ''}" data-filter="${escHtml(m)}">${escHtml(getMuscleLabel(m))}</button>`).join('')}
      </div>
      <div id="exercise-list">
        ${filtered.map(ex => `
          <div class="card exercise-card" onclick="App.navigate('exercise-detail', {exerciseId:'${ex.id}'})">
            <div class="ex-info">
              <div class="ex-name">${escHtml(exName(ex))}</div>
              <div class="ex-meta">
                <span class="badge badge-muscle">${escHtml(exMuscle(ex))}</span>
                <span class="badge badge-method">${escHtml(ex.method)}</span>
              </div>
            </div>
            <div class="ex-arrow">&#8250;</div>
          </div>
        `).join('')}
        ${filtered.length === 0 ? `<div class="empty-state"><p>${t('noExercisesFound')}</p></div>` : ''}
      </div>
    `;

    document.querySelectorAll('.ex-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        viewParams.exerciseTab = btn.dataset.tab;
        renderExercises();
      });
    });

    document.getElementById('ex-search').addEventListener('input', e => {
      viewParams.search = e.target.value;
      renderExercises();
      const input = document.getElementById('ex-search');
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });

    document.querySelectorAll('.filter-pills .pill').forEach(pill => {
      pill.addEventListener('click', () => {
        viewParams.filter = pill.dataset.filter;
        renderExercises();
      });
    });
  }

  // --- View: Posture List ---
  function renderPostureList() {
    const lang = Store.getLang();
    const items = Store.getPostureExercises();

    app.innerHTML = `
      <div class="page-header">
        <h1>${t('exercises')}</h1>
      </div>
      <div class="ex-tab-toggle">
        <button class="ex-tab-btn" data-tab="gym">${t('gym')}</button>
        <button class="ex-tab-btn ex-tab-btn--active" data-tab="posture">${t('posture')}</button>
      </div>
      <p class="text-dim text-sm" style="margin-bottom:16px">${t('postureTitle')}</p>
      <div id="posture-list">
        ${items.map(p => {
          const name = (lang === 'de' && p.name_de) ? p.name_de : p.name;
          const pain = (lang === 'de' && p.pain_de) ? p.pain_de : p.pain;
          return `
            <div class="card posture-card" onclick="App.navigate('posture-detail', {postureId:'${p.id}'})">
              <div class="posture-card__name">${escHtml(name)}</div>
              <div class="posture-card__pain text-dim text-sm">${escHtml(pain)}</div>
              <div class="ex-arrow">&#8250;</div>
            </div>`;
        }).join('')}
      </div>
    `;

    document.querySelectorAll('.ex-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        viewParams.exerciseTab = btn.dataset.tab;
        renderExercises();
      });
    });
  }

  // --- View: Posture Detail ---
  function renderPostureDetail() {
    const lang = Store.getLang();
    const p = Store.getPostureExercise(viewParams.postureId);
    if (!p) return navigate('exercises');

    const name     = (lang === 'de' && p.name_de)    ? p.name_de    : p.name;
    const problem  = (lang === 'de' && p.problem_de)  ? p.problem_de  : p.problem;
    const pain     = (lang === 'de' && p.pain_de)     ? p.pain_de     : p.pain;

    const causesHtml = p.causes.map((c, i) => {
      const cName     = (lang === 'de' && c.name_de)         ? c.name_de         : c.name;
      const cNote     = (lang === 'de' && c.note_de)         ? c.note_de         : c.note;
      const cExName   = (lang === 'de' && c.exerciseName_de) ? c.exerciseName_de : c.exerciseName;
      const cSteps    = (lang === 'de' && c.steps_de)        ? c.steps_de        : c.steps;
      const cTips     = (lang === 'de' && c.tips_de)         ? c.tips_de         : c.tips;

      return `
        <div class="posture-cause">
          <div class="posture-cause__header">
            <span class="posture-cause__num">${t('cause')} ${i + 1}</span>
            <span class="posture-cause__name">${escHtml(cName)}</span>
          </div>
          ${cNote ? `<p class="posture-cause__note text-dim text-sm">${escHtml(cNote)}</p>` : ''}
          <div class="posture-cause__address">${t('howToAddress')}:</div>
          ${cExName ? `<div class="posture-cause__exname">${escHtml(cExName)}</div>` : ''}
          <ol class="posture-steps">
            ${cSteps.map(s => `<li>${escHtml(s)}</li>`).join('')}
          </ol>
          ${cTips.length > 0 ? `
            <div class="posture-cause__address" style="margin-top:8px">${t('tips')}:</div>
            <ul class="posture-tips">
              ${cTips.map(tip => `<li>${escHtml(tip)}</li>`).join('')}
            </ul>` : ''}
        </div>`;
    }).join('');

    app.innerHTML = `
      <button class="back-link" onclick="App.navigate('exercises', {exerciseTab:'posture'})">&#8249; ${t('posture')}</button>
      <h2 style="margin-bottom:8px">${escHtml(name)}</h2>
      <div class="posture-section">
        <div class="posture-label">${t('problem')}</div>
        <p class="posture-text">${escHtml(problem)}</p>
      </div>
      <div class="posture-section">
        <div class="posture-label">${t('possiblePain')}</div>
        <p class="posture-text">${escHtml(pain)}</p>
      </div>
      <div class="posture-causes-list">
        ${causesHtml}
      </div>
    `;
  }

  // --- View: Exercise Detail ---
  function renderExerciseDetail() {
    const ex = Store.getExercise(viewParams.exerciseId);
    if (!ex) return navigate('exercises');

    const lastData = Store.getLastWorkoutForExercise(ex.id);
    let lastHtml = '';
    if (lastData) {
      lastHtml = `
        <div class="last-time-panel">
          <h4>${t('lastWorkout')}</h4>
          <div class="last-sets">
            ${lastData.sets.map(s => `${t('set')} ${s.setNumber}: ${s.reps} ${t('reps')} @ ${s.weight}${s.weightUnit || 'kg'} (${s.difficulty})`).join('<br>')}
          </div>
        </div>`;
    }

    app.innerHTML = `
      <button class="back-link" onclick="App.navigate('exercises')">&#8249; ${t('exercises')}</button>
      <div class="ex-detail-gif">
        ${ex.gifUrl ? `<img src="${escHtml(ex.gifUrl)}" alt="${escHtml(exName(ex))}">` :
          (getExerciseAnimation(ex.id) ? getExerciseAnimation(ex.id) : `<span>${t('noGifSet')}</span>`)}
      </div>
      <h1>${escHtml(exName(ex))}</h1>
      <div class="mb-16">
        <span class="badge badge-muscle">${escHtml(exMuscle(ex))}</span>
        <span class="badge badge-method">${escHtml(ex.method)}</span>
      </div>
      <div class="info-grid">
        <div class="info-item"><div class="label">${t('sets')}</div><div class="value">${escHtml(ex.recommendedSets)}</div></div>
        <div class="info-item"><div class="label">${t('reps')}</div><div class="value">${escHtml(ex.recommendedReps)}</div></div>
        <div class="info-item"><div class="label">${t('method')}</div><div class="value">${escHtml(ex.method)}</div></div>
      </div>
      <div class="ex-detail-section">
        <h3>${t('howToPerform')}</h3>
        <p>${escHtml(exDesc(ex))}</p>
      </div>
      ${ex.youtubeUrl ? `<a href="${escHtml(ex.youtubeUrl)}" target="_blank" rel="noopener" class="btn btn-secondary btn-full mb-16">${t('watchOnYouTube')}</a>` : ''}
      ${lastHtml}
    `;
  }

  // --- View: Add Exercise ---
  function renderAddExercise() {
    app.innerHTML = `
      <button class="back-link" onclick="App.navigate('exercises')">&#8249; ${t('back')}</button>
      <h1>${t('addExercise')}</h1>
      <div class="input-group"><label>${t('name')}</label><input type="text" id="new-ex-name" placeholder="${t('exerciseName')}"></div>
      <div class="input-group">
        <label>${t('muscleGroup')}</label>
        <select id="new-ex-muscle">
          <option value="">${t('select')}</option>
          ${getMuscleGroups().map(m => `<option value="${escHtml(m)}">${escHtml(m)}</option>`).join('')}
          <option value="__custom">${t('otherTypeBelow')}</option>
        </select>
      </div>
      <div class="input-group" id="custom-muscle-group" style="display:none">
        <label>${t('customMuscleGroup')}</label>
        <input type="text" id="new-ex-muscle-custom" placeholder="e.g. Forearms">
      </div>
      <div class="input-group"><label>${t('recommendedSets')}</label><input type="text" id="new-ex-sets" placeholder="e.g. 2-3"></div>
      <div class="input-group"><label>${t('recommendedReps')}</label><input type="text" id="new-ex-reps" placeholder="e.g. 8-12"></div>
      <div class="input-group">
        <label>${t('method')}</label>
        <select id="new-ex-method">
          <option value="Pyramid">Pyramid</option>
          <option value="Bodyweight">Bodyweight</option>
          <option value="Drop Set">Drop Set</option>
          <option value="Superset">Superset</option>
          <option value="Straight Sets">Straight Sets</option>
        </select>
      </div>
      <div class="input-group"><label>${t('description')}</label><textarea id="new-ex-desc" rows="3" placeholder="${t('howToPerformPlaceholder')}"></textarea></div>
      <div class="input-group"><label>${t('youtubeUrlOpt')}</label><input type="text" id="new-ex-yt" placeholder="https://youtube.com/..."></div>
      <div class="input-group"><label>${t('gifUrlOpt')}</label><input type="text" id="new-ex-gif" placeholder="https://..."></div>
      <button class="btn btn-primary btn-full mt-16" id="save-exercise-btn">${t('saveExercise')}</button>
    `;

    document.getElementById('new-ex-muscle').addEventListener('change', e => {
      document.getElementById('custom-muscle-group').style.display = e.target.value === '__custom' ? '' : 'none';
    });

    document.getElementById('save-exercise-btn').addEventListener('click', async () => {
      const name = document.getElementById('new-ex-name').value.trim();
      let muscle = document.getElementById('new-ex-muscle').value;
      if (muscle === '__custom') muscle = document.getElementById('new-ex-muscle-custom').value.trim();
      if (!name || !muscle) return alert(t('enterNameAndMuscle'));

      await Store.addExercise({
        id: genId('ex'),
        name,
        muscle,
        recommendedSets: document.getElementById('new-ex-sets').value.trim() || '3',
        recommendedReps: document.getElementById('new-ex-reps').value.trim() || '10',
        method: document.getElementById('new-ex-method').value,
        description: document.getElementById('new-ex-desc').value.trim(),
        gifUrl: document.getElementById('new-ex-gif').value.trim(),
        youtubeUrl: document.getElementById('new-ex-yt').value.trim(),
        isCustom: true
      });
      navigate('exercises');
    });
  }

  // --- View: Training Days ---
  function renderTrainingDays() {
    const days = Store.getTrainingDays();
    const exercises = Store.getExercises();

    app.innerHTML = `
      <div class="page-header">
        <h1>${t('trainingDays')}</h1>
        <button class="btn btn-primary btn-sm" onclick="App.navigate('create-day')">${t('create')}</button>
      </div>
      ${days.map(day => {
        const exNames = day.exerciseIds.map(id => {
          const ex = exercises.find(e => e.id === id);
          return ex ? exName(ex) : t('removed');
        });
        return `
          <div class="card" onclick="App.navigate('edit-day', {dayId:'${day.id}'})">
            <div class="card-row">
              <div>
                <div style="font-size:15px;font-weight:600">${escHtml(day.name)}</div>
                <div class="text-dim text-sm mt-8">${exNames.length} ${t('exercisesCount')}</div>
                <div class="text-dim text-sm">${exNames.slice(0, 3).map(n => escHtml(n)).join(', ')}${exNames.length > 3 ? '...' : ''}</div>
              </div>
              <div class="ex-arrow">&#8250;</div>
            </div>
          </div>`;
      }).join('')}
      ${days.length === 0 ? `<div class="empty-state"><p>${t('noTrainingDaysYet')}</p></div>` : ''}
    `;
  }

  // --- View: Create Training Day ---
  function renderCreateDay() {
    viewParams._selectedIds = viewParams._selectedIds || [];

    app.innerHTML = `
      <button class="back-link" onclick="App.navigate('training-days')">&#8249; ${t('back')}</button>
      <h1>${t('createTrainingDay')}</h1>
      <div class="input-group"><label>${t('name')}</label><input type="text" id="day-name" placeholder="e.g. Push Day" value="${escHtml(viewParams._dayName || '')}"></div>
      <h3>${t('exercises')} (${viewParams._selectedIds.length} ${t('selected')})</h3>
      <button class="btn btn-secondary btn-full mb-16" id="pick-exercises-btn">${t('selectExercises')}</button>
      <div id="selected-exercises">${renderSelectedExercises(viewParams._selectedIds)}</div>
      <button class="btn btn-primary btn-full mt-16" id="save-day-btn">${t('saveTrainingDay')}</button>
    `;

    document.getElementById('day-name').addEventListener('input', e => { viewParams._dayName = e.target.value; });

    document.getElementById('pick-exercises-btn').addEventListener('click', () => {
      showExercisePicker(viewParams._selectedIds, ids => {
        viewParams._selectedIds = ids;
        renderCreateDay();
      });
    });

    initDragReorder('selected-exercises', viewParams._selectedIds);

    document.getElementById('save-day-btn').addEventListener('click', async () => {
      const name = document.getElementById('day-name').value.trim();
      if (!name) return alert(t('enterName'));
      if (viewParams._selectedIds.length === 0) return alert(t('selectAtLeastOne'));

      const days = Store.getTrainingDays();
      days.push({ id: genId('td'), name, exerciseIds: [...viewParams._selectedIds] });
      await Store.saveTrainingDays(days);
      viewParams._selectedIds = [];
      viewParams._dayName = '';
      navigate('training-days');
    });
  }

  // --- View: Edit Training Day ---
  function renderEditDay() {
    const days = Store.getTrainingDays();
    const day = days.find(d => d.id === viewParams.dayId);
    if (!day) return navigate('training-days');

    if (!viewParams._editInit) {
      viewParams._selectedIds = [...day.exerciseIds];
      viewParams._dayName = day.name;
      viewParams._editInit = true;
    }

    app.innerHTML = `
      <button class="back-link" onclick="App.navigate('training-days')">&#8249; ${t('back')}</button>
      <h1>${t('edit')}: ${escHtml(viewParams._dayName)}</h1>
      <div class="input-group"><label>${t('name')}</label><input type="text" id="day-name" value="${escHtml(viewParams._dayName)}"></div>
      <h3>${t('exercises')} (${viewParams._selectedIds.length})</h3>
      <button class="btn btn-secondary btn-full mb-16" id="pick-exercises-btn">${t('selectExercises')}</button>
      <div id="selected-exercises">${renderSelectedExercises(viewParams._selectedIds)}</div>
      <button class="btn btn-primary btn-full mt-16" id="save-day-btn">${t('saveChanges')}</button>
      <button class="btn btn-danger btn-full mt-8" id="delete-day-btn">${t('deleteTrainingDay')}</button>
    `;

    document.getElementById('day-name').addEventListener('input', e => { viewParams._dayName = e.target.value; });

    document.getElementById('pick-exercises-btn').addEventListener('click', () => {
      showExercisePicker(viewParams._selectedIds, ids => {
        viewParams._selectedIds = ids;
        renderEditDay();
      });
    });

    initDragReorder('selected-exercises', viewParams._selectedIds);

    document.getElementById('save-day-btn').addEventListener('click', async () => {
      const name = document.getElementById('day-name').value.trim();
      if (!name) return alert(t('enterName'));
      day.name = name;
      day.exerciseIds = [...viewParams._selectedIds];
      await Store.saveTrainingDays(days);
      viewParams._editInit = false;
      navigate('training-days');
    });

    document.getElementById('delete-day-btn').addEventListener('click', async () => {
      if (!confirm(`${t('deleteConfirm')} "${day.name}"?`)) return;
      await Store.saveTrainingDays(days.filter(d => d.id !== day.id));
      viewParams._editInit = false;
      navigate('training-days');
    });
  }

  function renderSelectedExercises(ids) {
    const exercises = Store.getExercises();
    return ids.map((id, i) => {
      const ex = exercises.find(e => e.id === id);
      if (!ex) return '';
      return `
        <div class="day-exercise-item" data-idx="${i}">
          <div class="reorder-btns">
            <button class="reorder-btn" data-move-up="${i}" ${i === 0 ? 'disabled' : ''}>&#9650;</button>
            <button class="reorder-btn" data-move-down="${i}" ${i === ids.length - 1 ? 'disabled' : ''}>&#9660;</button>
          </div>
          <span class="ex-name">${escHtml(exName(ex))}</span>
          <span class="badge badge-muscle" style="font-size:10px">${escHtml(exMuscle(ex))}</span>
          <button class="remove-btn" data-remove="${i}">&times;</button>
        </div>`;
    }).join('');
  }

  function initDragReorder(containerId, ids) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.remove);
        ids.splice(idx, 1);
        container.innerHTML = renderSelectedExercises(ids);
        initDragReorder(containerId, ids);
      });
    });

    // Up/down reorder buttons
    container.querySelectorAll('.reorder-btn[data-move-up]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.moveUp);
        if (idx > 0) {
          const el = ids.splice(idx, 1)[0];
          ids.splice(idx - 1, 0, el);
          container.innerHTML = renderSelectedExercises(ids);
          initDragReorder(containerId, ids);
        }
      });
    });

    container.querySelectorAll('.reorder-btn[data-move-down]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.moveDown);
        if (idx < ids.length - 1) {
          const el = ids.splice(idx, 1)[0];
          ids.splice(idx + 1, 0, el);
          container.innerHTML = renderSelectedExercises(ids);
          initDragReorder(containerId, ids);
        }
      });
    });

    // Touch drag reorder
    let dragIdx = null;
    container.querySelectorAll('.reorder-btns').forEach(handle => {
      handle.addEventListener('touchstart', () => {
        dragIdx = parseInt(handle.parentElement.dataset.idx);
      });
    });

    container.addEventListener('touchmove', e => {
      if (dragIdx === null) return;
      e.preventDefault();
      const touch = e.touches[0];
      const items = container.querySelectorAll('.day-exercise-item');
      for (const item of items) {
        const rect = item.getBoundingClientRect();
        if (touch.clientY > rect.top && touch.clientY < rect.bottom) {
          const targetIdx = parseInt(item.dataset.idx);
          if (targetIdx !== dragIdx) {
            const el = ids.splice(dragIdx, 1)[0];
            ids.splice(targetIdx, 0, el);
            dragIdx = targetIdx;
            container.innerHTML = renderSelectedExercises(ids);
            initDragReorder(containerId, ids);
            break;
          }
        }
      }
    }, { passive: false });

    container.addEventListener('touchend', () => { dragIdx = null; });
  }

  // --- Exercise Picker Modal ---
  function showExercisePicker(selectedIds, onDone) {
    const exercises = Store.getExercises();
    const muscles = getMuscleGroups();
    let currentFilter = 'All';
    const selected = new Set(selectedIds);

    function renderPicker() {
      let filtered = exercises;
      if (currentFilter !== 'All') filtered = filtered.filter(e => e.muscle === currentFilter);

      const overlay = document.getElementById('picker-overlay');
      if (!overlay) return;

      overlay.querySelector('.picker-list').innerHTML = filtered.map(ex => `
        <div class="picker-item ${selected.has(ex.id) ? 'selected' : ''}" data-id="${ex.id}">
          <div class="check"></div>
          <div>
            <div style="font-size:14px;font-weight:500">${escHtml(exName(ex))}</div>
            <div class="text-dim text-sm">${escHtml(exMuscle(ex))}</div>
          </div>
        </div>
      `).join('');

      overlay.querySelectorAll('.picker-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.dataset.id;
          if (selected.has(id)) selected.delete(id); else selected.add(id);
          renderPicker();
        });
      });

      overlay.querySelectorAll('.pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.filter === currentFilter);
        pill.onclick = () => { currentFilter = pill.dataset.filter; renderPicker(); };
      });

      const doneBtn = document.getElementById('picker-done');
      if (doneBtn) doneBtn.textContent = `${t('done')} (${selected.size})`;
    }

    const overlayEl = document.createElement('div');
    overlayEl.id = 'picker-overlay';
    overlayEl.className = 'modal-overlay';
    overlayEl.innerHTML = `
      <div class="modal-sheet">
        <button class="modal-close" id="picker-close">&times;</button>
        <h2>${t('selectExercises')}</h2>
        <div class="filter-pills">
          <button class="pill active" data-filter="All">${t('all')}</button>
          ${muscles.map(m => `<button class="pill" data-filter="${escHtml(m)}">${escHtml(getMuscleLabel(m))}</button>`).join('')}
        </div>
        <div class="picker-list"></div>
        <button class="btn btn-primary btn-full mt-16" id="picker-done">${t('done')} (${selected.size})</button>
      </div>
    `;
    document.body.appendChild(overlayEl);
    renderPicker();

    document.getElementById('picker-close').addEventListener('click', () => {
      overlayEl.remove();
    });

    document.getElementById('picker-done').addEventListener('click', () => {
      const ordered = [];
      selectedIds.forEach(id => { if (selected.has(id)) ordered.push(id); });
      selected.forEach(id => { if (!ordered.includes(id)) ordered.push(id); });
      overlayEl.remove();
      onDone(ordered);
    });
  }

  // --- View: Start Workout (select a training day) ---
  function renderStartWorkout() {
    const days = Store.getTrainingDays();

    app.innerHTML = `
      <h1>${t('startWorkout')}</h1>
      ${days.length === 0 ? `
        <div class="empty-state">
          <p>${t('noTrainingDaysCreated')}</p>
          <button class="btn btn-primary mt-16" onclick="App.navigate('create-day')">${t('createTrainingDay')}</button>
        </div>` : `
        <p class="text-dim text-sm mb-16">${t('selectDayToBegin')}</p>
        ${days.map(day => {
          const exCount = day.exerciseIds.length;
          return `
            <div class="card" onclick="App.startWorkout('${day.id}')">
              <div class="card-row">
                <div>
                  <div style="font-size:16px;font-weight:600">${escHtml(day.name)}</div>
                  <div class="text-dim text-sm mt-8">${exCount} ${t('exercisesCount')}</div>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
            </div>`;
        }).join('')}
      `}
    `;
  }

  // --- Active Workout State ---
  let workoutState = null;

  function startWorkout(dayId) {
    const days = Store.getTrainingDays();
    const day = days.find(d => d.id === dayId);
    if (!day) return;

    workoutState = {
      log: {
        id: genId('wl'),
        trainingDayId: day.id,
        trainingDayName: day.name,
        date: new Date().toISOString(),
        completed: false,
        exercises: day.exerciseIds.map(exId => {
          const ex = Store.getExercise(exId);
          return { exerciseId: exId, exerciseName: ex ? ex.name : 'Unknown', sets: [] };
        })
      },
      currentExerciseIdx: 0,
    };

    Store.saveWorkoutProgress(workoutState.log).catch(() => {});
    navigate('active-workout');
  }

  // --- View: Active Workout ---
  function renderActiveWorkout() {
    if (!workoutState) return navigate('home');

    const ws = workoutState;
    const log = ws.log;
    const totalEx = log.exercises.length;
    const curExLog = log.exercises[ws.currentExerciseIdx];
    const ex = Store.getExercise(curExLog.exerciseId);
    const lastData = Store.getLastWorkoutForExercise(curExLog.exerciseId);
    const lastPos = Store.getLastWorkoutPositionForExercise(curExLog.exerciseId);

    // Auto-add first set so the user can start entering data immediately
    if (curExLog.sets.length === 0) {
      curExLog.sets.push({ setNumber: 1, weight: '', weightUnit: 'kg', reps: '', difficulty: '', comment: '' });
    }

    // Last time panel (all sets from last session)
    const histBtn = `<button class="btn btn-secondary btn-sm" onclick="App.showExerciseHistory('${curExLog.exerciseId}')" style="font-size:11px;padding:4px 10px">${t('last10')}</button>`;
    let lastTimeHtml = '';
    if (lastData && lastData.sets.length > 0) {
      const posHtml = lastPos ? `<span class="text-dim text-sm" style="margin-left:8px">(${t('exercise')} ${lastPos.position}/${lastPos.total})</span>` : '';
      lastTimeHtml = `
        <div class="last-time-panel">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <div style="display:flex;align-items:center"><h4 style="margin:0">${t('lastTime')}</h4>${posHtml}</div>
            ${histBtn}
          </div>
          ${lastData.sets.map(s => `
            <div class="last-set-line">
              <span class="text-dim">${t('set')} ${s.setNumber}:</span>
              ${s.reps} ${t('reps')} @ ${s.weight}${s.weightUnit || 'kg'}
              <span class="diff-tag diff-tag--${(s.difficulty || '').replace(/ /g, '-')}">${s.difficulty}</span>
              ${s.comment ? `<span class="text-dim"> — ${escHtml(s.comment)}</span>` : ''}
            </div>`).join('')}
        </div>`;
    } else {
      lastTimeHtml = `<div style="margin-bottom:12px;text-align:right">${histBtn}</div>`;
    }

    // Set rows: two-line layout (inputs on line 1, difficulty buttons on line 2)
    const setsHtml = curExLog.sets.map((s, idx) => {
      const lastRef = lastData ? lastData.sets.find(ls => ls.setNumber === s.setNumber) : null;
      const wPh = lastRef ? String(lastRef.weight) : '';
      const rPh = lastRef ? String(lastRef.reps) : '';
      const diff = (s.difficulty || '').toLowerCase();
      return `
        <div class="set-row" data-idx="${idx}">
          <div class="set-row__line1">
            <div class="set-row__num">${s.setNumber}</div>
            <input class="set-inp set-inp--weight" type="text" inputmode="decimal" autocomplete="off"
              value="${escHtml(s.weight !== '' && s.weight != null ? String(s.weight) : '')}"
              placeholder="${escHtml(wPh)}" data-field="weight" data-idx="${idx}">
            <input class="set-inp set-inp--unit" type="text" autocomplete="off"
              value="${escHtml(s.weightUnit || 'kg')}" maxlength="8"
              data-field="unit" data-idx="${idx}">
            <span class="set-row__x">×</span>
            <input class="set-inp set-inp--reps" type="text" inputmode="numeric" autocomplete="off"
              value="${escHtml(s.reps !== '' && s.reps != null ? String(s.reps) : '')}"
              placeholder="${escHtml(rPh)}" data-field="reps" data-idx="${idx}">
            <div class="set-row__done${s.reps > 0 ? ' set-row__done--ok' : ''}">${s.reps > 0 ? '✓' : ''}</div>
          </div>
          <div class="set-row__line2">
            <button class="diff-btn${diff === 'easy' ? ' selected' : ''}" data-diff="easy" data-idx="${idx}">${t('easy')}</button>
            <button class="diff-btn${diff === 'hard' ? ' selected' : ''}" data-diff="hard" data-idx="${idx}">${t('hard')}</button>
            <button class="diff-btn${diff === 'too hard' ? ' selected' : ''}" data-diff="too hard" data-idx="${idx}">${t('tooHard')}</button>
          </div>
          <textarea class="set-row__comment" rows="1" placeholder="${t('optionalNotes')}"
            data-field="comment" data-idx="${idx}">${escHtml(s.comment || '')}</textarea>
        </div>`;
    }).join('');

    app.innerHTML = `
      <div class="workout-header">
        <button class="back-btn" onclick="App.confirmEndWorkout()">&#8249; ${t('end')}</button>
        <div style="text-align:center;flex:1">
          <div style="font-weight:600;font-size:13px">${escHtml(log.trainingDayName)}</div>
          <div class="text-dim text-sm">${t('exercise')} ${ws.currentExerciseIdx + 1} ${t('of')} ${totalEx}</div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="App.showWorkoutOverview()">☰</button>
      </div>
      <div class="progress-bar"><div class="fill" style="width:${(ws.currentExerciseIdx / totalEx) * 100}%"></div></div>

      <div class="ex-nav-row">
        <button class="btn btn-secondary btn-sm" id="prev-ex" ${ws.currentExerciseIdx === 0 ? 'disabled' : ''}>‹ ${t('back')}</button>
        <button class="btn btn-secondary btn-sm" id="next-ex" ${ws.currentExerciseIdx >= totalEx - 1 ? 'disabled' : ''}>${t('next')} ›</button>
      </div>

      <div class="current-exercise-info">
        <h2 style="margin-bottom:6px">${escHtml(ex ? exName(ex) : curExLog.exerciseName)}</h2>
        ${ex ? `
          <div class="mb-6">
            <span class="badge badge-muscle">${escHtml(exMuscle(ex))}</span>
            <span class="badge badge-method">${escHtml(ex.method)}</span>
          </div>
          <div class="rec-row">${t('recommended')}: ${ex.recommendedSets} ${t('sets')} × ${ex.recommendedReps} ${t('reps')}</div>
          <button class="btn btn-secondary btn-sm mt-6" onclick="App.showExerciseInfo('${ex.id}')">${t('howToPerform')}</button>
        ` : ''}
      </div>

      ${lastTimeHtml}

      <div class="sets-container">
        <div id="sets-list">${setsHtml}</div>
        <button class="btn btn-secondary btn-sm mt-8" id="add-set-btn">${t('addSet')}</button>
      </div>

      <div class="workout-actions mt-12">
        <button class="btn btn-primary btn-full" id="ex-done-btn">
          ${ws.currentExerciseIdx < totalEx - 1 ? t('nextExercise') + ' ›' : t('finishWorkout')}
        </button>
      </div>
    `;

    // === Bindings ===

    // Set inputs (live update to state)
    document.querySelectorAll('.set-inp[data-field]').forEach(inp => {
      inp.addEventListener('input', e => {
        const idx = parseInt(e.target.dataset.idx);
        const field = e.target.dataset.field;
        const s = curExLog.sets[idx];
        if (!s) return;
        if (field === 'weight') s.weight = e.target.value;
        if (field === 'unit')   s.weightUnit = e.target.value;
        if (field === 'reps')   s.reps = e.target.value;
      });
    });

    // Select all text on focus for the unit field so it clears when you start typing
    document.querySelectorAll('.set-inp--unit').forEach(inp => {
      inp.addEventListener('focus', () => inp.select());
    });

    // Difficulty buttons
    document.querySelectorAll('.diff-btn[data-diff]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx);
        if (!isNaN(idx) && curExLog.sets[idx]) {
          curExLog.sets[idx].difficulty = btn.dataset.diff;
          renderActiveWorkout();
        }
      });
    });

    // Comment textareas (one per set, inline)
    document.querySelectorAll('textarea[data-field="comment"]').forEach(ta => {
      ta.addEventListener('input', e => {
        const idx = parseInt(e.target.dataset.idx);
        const s = curExLog.sets[idx];
        if (s) s.comment = e.target.value;
      });
    });

    // Add set — always appends a new empty row
    document.getElementById('add-set-btn').addEventListener('click', () => { addNewSet(); });

    // Prev / Next exercise arrows
    document.getElementById('prev-ex').addEventListener('click', () => { navigateExercise(-1); });
    document.getElementById('next-ex').addEventListener('click', () => { navigateExercise(1); });

    // Exercise done / finish workout
    document.getElementById('ex-done-btn').addEventListener('click', () => {
      if (ws.currentExerciseIdx < totalEx - 1) {
        navigateExercise(1);
      } else {
        finishWorkout();
      }
    });
  }

  // Sync all set inputs from DOM → state (called before navigating away)
  function syncAllFromDom() {
    const ws = workoutState;
    if (!ws) return;
    const curExLog = ws.log.exercises[ws.currentExerciseIdx];
    document.querySelectorAll('.set-inp[data-field]').forEach(inp => {
      const idx = parseInt(inp.dataset.idx);
      const field = inp.dataset.field;
      const s = curExLog.sets[idx];
      if (!s) return;
      if (field === 'weight') s.weight = inp.value;
      if (field === 'unit')   s.weightUnit = inp.value;
      if (field === 'reps')   s.reps = inp.value;
    });
    document.querySelectorAll('textarea[data-field="comment"]').forEach(ta => {
      const idx = parseInt(ta.dataset.idx);
      const s = curExLog.sets[idx];
      if (s) s.comment = ta.value;
    });
  }

  // Add a new empty set for the current exercise
  function addNewSet() {
    const ws = workoutState;
    if (!ws) return;
    syncAllFromDom();
    const curExLog = ws.log.exercises[ws.currentExerciseIdx];
    curExLog.sets.push({
      setNumber: curExLog.sets.length + 1,
      weight: '',
      weightUnit: 'kg',
      reps: '',
      difficulty: '',
      comment: '',
    });
    renderActiveWorkout();
  }

  // Navigate to a different exercise
  function navigateExercise(delta) {
    const ws = workoutState;
    if (!ws) return;
    syncAllFromDom();
    const newIdx = ws.currentExerciseIdx + delta;
    if (newIdx < 0 || newIdx >= ws.log.exercises.length) return;
    ws.currentExerciseIdx = newIdx;
    Store.saveWorkoutProgress(ws.log).catch(() => {}); // auto-save after each exercise
    renderActiveWorkout();
  }

  async function finishWorkout() {
    const ws = workoutState;
    if (!ws) return;
    syncAllFromDom();
    ws.log.completed = true;
    await Store.saveWorkoutProgress(ws.log);
    const logId = ws.log.id;
    workoutState = null;
    navigate('workout-summary', { logId });
  }

  function showWorkoutOverview() {
    const ws = workoutState;
    if (!ws) return;
    syncAllFromDom();
    const log = ws.log;

    const overlayEl = document.createElement('div');
    overlayEl.className = 'modal-overlay';
    overlayEl.innerHTML = `
      <div class="modal-sheet">
        <button class="modal-close" id="wo-close">&times;</button>
        <h2>${t('exerciseOverview')}</h2>
        <div class="overview-list">
          ${log.exercises.map((exLog, idx) => {
            const exObj = Store.getExercise(exLog.exerciseId);
            const done = exLog.sets.length > 0;
            const isCur = idx === ws.currentExerciseIdx;
            return `
              <div class="overview-item${done ? ' overview-item--done' : ''}${isCur ? ' overview-item--current' : ''}"
                   data-ex-idx="${idx}">
                <div class="overview-check">${done ? '✓' : ''}</div>
                <div style="flex:1">
                  <div style="font-size:14px;font-weight:500">${escHtml(exObj ? exName(exObj) : exLog.exerciseName)}</div>
                  <div class="text-dim text-sm">${exLog.sets.length} ${t('setsCount')}</div>
                </div>
              </div>`;
          }).join('')}
        </div>
        <button class="btn btn-danger btn-full mt-16" id="wo-end">${t('endWorkout')}</button>
      </div>
    `;
    document.body.appendChild(overlayEl);

    document.getElementById('wo-close').addEventListener('click', () => overlayEl.remove());

    overlayEl.querySelectorAll('.overview-item').forEach(item => {
      item.addEventListener('click', () => {
        ws.currentExerciseIdx = parseInt(item.dataset.exIdx);
        Store.saveWorkoutProgress(ws.log).catch(() => {}); // auto-save on exercise jump
        overlayEl.remove();
        renderActiveWorkout();
      });
    });

    document.getElementById('wo-end').addEventListener('click', () => {
      overlayEl.remove();
      confirmEndWorkout();
    });
  }

  function confirmEndWorkout() {
    if (!workoutState) return;
    syncAllFromDom();

    const overlayEl = document.createElement('div');
    overlayEl.className = 'modal-overlay';
    overlayEl.innerHTML = `
      <div class="modal-sheet" style="text-align:center">
        <h2>${t('endWorkout')}</h2>
        <p class="text-dim" style="margin-bottom:20px">${t('endWorkoutConfirm')}</p>
        <button class="btn btn-primary btn-full mb-8" id="end-save">${t('saveAndExit')}</button>
        <button class="btn btn-danger btn-full mb-8" id="end-discard">${t('discardAndExit')}</button>
        <button class="btn btn-secondary btn-full" id="end-cancel">${t('cancelEndWorkout')}</button>
      </div>
    `;
    document.body.appendChild(overlayEl);

    document.getElementById('end-cancel').addEventListener('click', () => overlayEl.remove());

    document.getElementById('end-save').addEventListener('click', async () => {
      overlayEl.remove();
      const ws = workoutState;
      ws.log.completed = true;
      await Store.saveWorkoutProgress(ws.log);
      workoutState = null;
      navigate('home');
    });

    document.getElementById('end-discard').addEventListener('click', async () => {
      overlayEl.remove();
      const ws = workoutState;
      await Store.deleteWorkoutLog(ws.log.id);
      workoutState = null;
      navigate('home');
    });
  }

  // --- View: Workout Summary ---
  function renderWorkoutSummary() {
    const logs = Store.getWorkoutLogs();
    const log = logs.find(l => l.id === viewParams.logId);
    if (!log) return navigate('home');

    const totalSets = log.exercises.reduce((s, e) => s + e.sets.length, 0);
    const totalVol = log.exercises.reduce((v, e) =>
      v + e.sets.reduce((sv, set) => sv + (set.weight || 0) * (set.reps || 0), 0), 0);

    app.innerHTML = `
      <div class="text-center mb-16">
        <h1>${t('workoutComplete')}</h1>
        <p class="text-dim">${escHtml(log.trainingDayName)} &middot; ${formatDate(log.date)}</p>
      </div>
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-value">${log.exercises.length}</div>
          <div class="stat-label">${t('exercisesCount')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalSets}</div>
          <div class="stat-label">${t('setsCount')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(totalVol)}</div>
          <div class="stat-label">${t('kgVolume')}</div>
        </div>
      </div>
      ${log.exercises.filter(e => e.sets.length > 0).map(e => `
        <div class="card summary-exercise">
          <h3>${escHtml(e.exerciseName)}</h3>
          <div class="summary-sets">
            ${e.sets.map(s => `${t('set')} ${s.setNumber}: ${s.reps} ${t('reps')} @ ${s.weight}${s.weightUnit || 'kg'} <span class="text-dim">(${s.difficulty})</span>${s.comment ? ` - ${escHtml(s.comment)}` : ''}`).join('<br>')}
          </div>
        </div>
      `).join('')}
      <button class="btn btn-primary btn-full mt-16" onclick="App.navigate('home')">${t('backToHome')}</button>
    `;
  }

  // --- View: Statistics ---
  function renderStatistics() {
    const logs = Store.getWorkoutLogs().filter(l => l.completed);
    const filter = viewParams.statsFilter || 'history';

    app.innerHTML = `
      <h1>${t('statistics')}</h1>
      <div class="filter-pills mb-16">
        <button class="pill ${filter === 'history' ? 'active' : ''}" data-sf="history">${t('history')}</button>
        <button class="pill ${filter === 'volume' ? 'active' : ''}" data-sf="volume">${t('volume')}</button>
        <button class="pill ${filter === 'exercises' ? 'active' : ''}" data-sf="exercises">${t('exercises')}</button>
      </div>
      <div id="stats-content"></div>
    `;

    document.querySelectorAll('[data-sf]').forEach(pill => {
      pill.addEventListener('click', () => {
        viewParams.statsFilter = pill.dataset.sf;
        renderStatistics();
      });
    });

    const content = document.getElementById('stats-content');

    if (filter === 'history') {
      if (logs.length === 0) {
        content.innerHTML = `<div class="empty-state"><p>${t('noWorkoutsRecorded')}</p></div>`;
        return;
      }
      content.innerHTML = sortLogsByDateDesc(logs).map(log => {
        const totalSets = log.exercises.reduce((s, e) => s + e.sets.length, 0);
        const totalVol = log.exercises.reduce((v, e) =>
          v + e.sets.reduce((sv, set) => sv + (set.weight || 0) * (set.reps || 0), 0), 0);
        return `
          <div class="card history-item" onclick="App.navigate('workout-detail', {logId:'${log.id}'})">
            <div class="title">${escHtml(log.trainingDayName)}</div>
            <div class="date">${formatDateTime(log.date)}</div>
            <div class="meta">${log.exercises.length} ${t('exercisesCount')} &middot; ${totalSets} ${t('setsCount')} &middot; ${Math.round(totalVol)} kg</div>
          </div>`;
      }).join('');
    }

    if (filter === 'volume') {
      if (logs.length === 0) {
        content.innerHTML = `<div class="empty-state"><p>${t('noDataYet')}</p></div>`;
        return;
      }
      const recent = logs.slice(-10);
      const maxVol = Math.max(...recent.map(l =>
        l.exercises.reduce((v, e) => v + e.sets.reduce((sv, s) => sv + (s.weight || 0) * (s.reps || 0), 0), 0)
      ));

      content.innerHTML = `<h3 class="mb-16">${t('volumePerWorkout')}</h3>` +
        recent.map(log => {
          const vol = log.exercises.reduce((v, e) =>
            v + e.sets.reduce((sv, s) => sv + (s.weight || 0) * (s.reps || 0), 0), 0);
          const pct = maxVol > 0 ? (vol / maxVol * 100) : 0;
          return `
            <div class="chart-bar-group">
              <div class="chart-bar-label">${formatDate(log.date)} - ${escHtml(log.trainingDayName)}</div>
              <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${pct}%">${Math.round(vol)} kg</div></div>
            </div>`;
        }).join('');
    }

    if (filter === 'exercises') {
      const exStats = {};
      logs.forEach(log => {
        log.exercises.forEach(e => {
          if (!exStats[e.exerciseId]) exStats[e.exerciseId] = { name: e.exerciseName, maxWeight: 0, totalSets: 0 };
          e.sets.forEach(s => {
            exStats[e.exerciseId].maxWeight = Math.max(exStats[e.exerciseId].maxWeight, s.weight || 0);
            exStats[e.exerciseId].totalSets++;
          });
        });
      });

      const sorted = Object.entries(exStats).sort((a, b) => b[1].totalSets - a[1].totalSets);

      if (sorted.length === 0) {
        content.innerHTML = `<div class="empty-state"><p>${t('noExerciseData')}</p></div>`;
        return;
      }

      content.innerHTML = `<h3 class="mb-16">${t('exerciseStats')}</h3>` +
        sorted.map(([id, stat]) => `
          <div class="card">
            <div class="card-row">
              <div>
                <div style="font-size:14px;font-weight:600">${escHtml(stat.name)}</div>
                <div class="text-dim text-sm mt-8">${t('max')}: ${stat.maxWeight}kg &middot; ${stat.totalSets} ${t('totalSets')}</div>
              </div>
            </div>
          </div>
        `).join('');
    }
  }

  // --- View: Workout Detail ---
  function renderWorkoutDetail() {
    const logs = Store.getWorkoutLogs();
    const log = logs.find(l => l.id === viewParams.logId);
    if (!log) return navigate('statistics');

    const editing = !!viewParams._editing;

    // On first entering edit mode, deep-copy the log
    if (editing && !viewParams._editLog) {
      viewParams._editLog = JSON.parse(JSON.stringify(log));
    }

    const displayLog = editing ? viewParams._editLog : log;
    const totalSets = displayLog.exercises.reduce((s, e) => s + e.sets.length, 0);
    const totalVol = displayLog.exercises.reduce((v, e) =>
      v + e.sets.reduce((sv, set) => sv + (parseFloat(set.weight) || 0) * (parseFloat(set.reps) || 0), 0), 0);

    function editSetRowsHtml(exIdx, sets) {
      return sets.map((s, si) => {
        const diff = (s.difficulty || '').toLowerCase();
        return `
          <div class="set-row" style="margin-bottom:8px">
            <div class="set-row__line1">
              <div class="set-row__num">${s.setNumber}</div>
              <input class="set-inp set-inp--weight" type="text" inputmode="decimal" autocomplete="off"
                value="${escHtml(s.weight !== '' && s.weight != null ? String(s.weight) : '')}"
                data-ex="${exIdx}" data-si="${si}" data-ef="weight">
              <input class="set-inp set-inp--unit" type="text" autocomplete="off" maxlength="8"
                value="${escHtml(s.weightUnit || 'kg')}"
                data-ex="${exIdx}" data-si="${si}" data-ef="unit">
              <span class="set-row__x">×</span>
              <input class="set-inp set-inp--reps" type="text" inputmode="numeric" autocomplete="off"
                value="${escHtml(s.reps !== '' && s.reps != null ? String(s.reps) : '')}"
                data-ex="${exIdx}" data-si="${si}" data-ef="reps">
              <button class="remove-btn" style="margin-left:auto" onclick="App.removeEditSet(${exIdx},${si})">&times;</button>
            </div>
            <div class="set-row__line2">
              <button class="diff-btn${diff === 'easy' ? ' selected' : ''}" onclick="App.setEditDiff(${exIdx},${si},'easy')">${t('easy')}</button>
              <button class="diff-btn${diff === 'hard' ? ' selected' : ''}" onclick="App.setEditDiff(${exIdx},${si},'hard')">${t('hard')}</button>
              <button class="diff-btn${diff === 'too hard' ? ' selected' : ''}" onclick="App.setEditDiff(${exIdx},${si},'too hard')">${t('tooHard')}</button>
            </div>
            <textarea class="set-row__comment" rows="1" placeholder="${t('optionalNotes')}"
              data-ex="${exIdx}" data-si="${si}" data-ef="comment">${escHtml(s.comment || '')}</textarea>
          </div>`;
      }).join('');
    }

    if (editing) {
      app.innerHTML = `
        <div class="flex-between mb-16">
          <button class="btn btn-secondary btn-sm" onclick="App.cancelEditWorkout()">&#8249; ${t('cancelEdit')}</button>
          <span style="font-weight:600">${escHtml(displayLog.trainingDayName)}</span>
          <div style="width:60px"></div>
        </div>
        <p class="text-dim text-sm mb-16">${formatDateTime(displayLog.date)}</p>
        ${displayLog.exercises.map((e, exIdx) => `
          <div class="card summary-exercise" style="margin-bottom:12px">
            <h3 style="margin-bottom:12px">${escHtml(e.exerciseName)}</h3>
            <div id="edit-sets-${exIdx}">${editSetRowsHtml(exIdx, e.sets)}</div>
            <button class="btn btn-secondary btn-sm mt-8" onclick="App.addEditSet(${exIdx})">+ ${t('set')}</button>
          </div>
        `).join('')}
        <button class="btn btn-primary btn-full mt-16" id="save-edit-btn">${t('saveChanges')}</button>
      `;

      // Bind unit field select-all on focus
      document.querySelectorAll('.set-inp--unit').forEach(inp => {
        inp.addEventListener('focus', () => inp.select());
      });

      document.getElementById('save-edit-btn').addEventListener('click', async () => {
        syncEditFromDom();
        await Store.updateWorkoutLog(viewParams._editLog);
        viewParams._editing = false;
        viewParams._editLog = null;
        renderWorkoutDetail();
      });

    } else {
      app.innerHTML = `
        <button class="back-link" onclick="App.navigate('statistics')">&#8249; ${t('statistics')}</button>
        <h1>${escHtml(displayLog.trainingDayName)}</h1>
        <p class="text-dim mb-16">${formatDateTime(displayLog.date)}</p>
        <div class="stats-row mb-16">
          <div class="stat-card">
            <div class="stat-value">${displayLog.exercises.length}</div>
            <div class="stat-label">${t('exercisesCount')}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${totalSets}</div>
            <div class="stat-label">${t('setsCount')}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${Math.round(totalVol)}</div>
            <div class="stat-label">${t('kgVolume')}</div>
          </div>
        </div>
        ${displayLog.exercises.filter(e => e.sets.length > 0).map(e => `
          <div class="card summary-exercise">
            <h3>${escHtml(e.exerciseName)}</h3>
            <div class="summary-sets">
              ${e.sets.map(s => `${t('set')} ${s.setNumber}: ${s.reps} ${t('reps')} @ ${s.weight}${s.weightUnit || 'kg'} <span class="text-dim">(${s.difficulty})</span>${s.comment ? ` - ${escHtml(s.comment)}` : ''}`).join('<br>')}
            </div>
          </div>
        `).join('')}
        <button class="btn btn-secondary btn-full mt-16" id="continue-workout-btn">${t('continueWorkout')}</button>
        <button class="btn btn-secondary btn-full mt-8" id="edit-workout-btn">${t('editWorkout')}</button>
        <button class="btn btn-danger btn-full mt-8" id="delete-workout-btn">${t('deleteWorkout')}</button>
      `;

      document.getElementById('continue-workout-btn').addEventListener('click', () => {
        continueWorkout(displayLog.id);
      });

      document.getElementById('edit-workout-btn').addEventListener('click', () => {
        viewParams._editing = true;
        renderWorkoutDetail();
      });

      document.getElementById('delete-workout-btn').addEventListener('click', async () => {
        if (!confirm(`${t('deleteConfirm')} "${displayLog.trainingDayName}"?`)) return;
        await Store.deleteWorkoutLog(displayLog.id);
        navigate('statistics');
      });
    }
  }

  // Sync edit-mode inputs from DOM → viewParams._editLog
  function syncEditFromDom() {
    if (!viewParams._editLog) return;
    document.querySelectorAll('[data-ef]').forEach(inp => {
      const exIdx = parseInt(inp.dataset.ex);
      const si = parseInt(inp.dataset.si);
      const field = inp.dataset.ef;
      const s = viewParams._editLog.exercises[exIdx]?.sets[si];
      if (!s) return;
      if (field === 'weight') s.weight = inp.value;
      if (field === 'unit')   s.weightUnit = inp.value;
      if (field === 'reps')   s.reps = inp.value;
      if (field === 'comment') s.comment = inp.value;
    });
  }

  function setEditDiff(exIdx, si, diff) {
    if (!viewParams._editLog) return;
    syncEditFromDom();
    viewParams._editLog.exercises[exIdx].sets[si].difficulty = diff;
    renderWorkoutDetail();
  }

  function addEditSet(exIdx) {
    if (!viewParams._editLog) return;
    syncEditFromDom();
    const exLog = viewParams._editLog.exercises[exIdx];
    exLog.sets.push({ setNumber: exLog.sets.length + 1, weight: '', weightUnit: 'kg', reps: '', difficulty: '', comment: '' });
    renderWorkoutDetail();
  }

  function removeEditSet(exIdx, si) {
    if (!viewParams._editLog) return;
    syncEditFromDom();
    const exLog = viewParams._editLog.exercises[exIdx];
    exLog.sets.splice(si, 1);
    exLog.sets.forEach((s, i) => { s.setNumber = i + 1; });
    renderWorkoutDetail();
  }

  function cancelEditWorkout() {
    viewParams._editing = false;
    viewParams._editLog = null;
    renderWorkoutDetail();
  }

  function continueWorkout(logId) {
    const log = Store.getWorkoutLogs().find(l => l.id === logId);
    if (!log) return;

    // Find the first exercise without sets to resume from
    let resumeIdx = 0;
    for (let i = log.exercises.length - 1; i >= 0; i--) {
      if (log.exercises[i].sets.length > 0) {
        resumeIdx = Math.min(i + 1, log.exercises.length - 1);
        break;
      }
    }

    const continuedLog = JSON.parse(JSON.stringify(log));
    continuedLog.completed = false;

    // Update cache so it shows as in-progress
    const existingIdx = _data.workoutLogs.findIndex(l => l.id === log.id);
    if (existingIdx >= 0) _data.workoutLogs[existingIdx] = continuedLog;

    workoutState = { log: continuedLog, currentExerciseIdx: resumeIdx };
    Store.saveWorkoutProgress(continuedLog).catch(() => {});
    navigate('active-workout');
  }

  function resumeIncompleteWorkout() {
    if (!checkAndResumeCrashedWorkout()) navigate('home');
  }

  // --- Exercise Info Modal ---
  function showExerciseInfo(exId) {
    const ex = Store.getExercise(exId);
    if (!ex) return;

    const overlayEl = document.createElement('div');
    overlayEl.className = 'modal-overlay';
    overlayEl.innerHTML = `
      <div class="modal-sheet">
        <button class="modal-close" id="exercise-info-close">&times;</button>
        <div class="ex-detail-gif">
          ${ex.gifUrl ? `<img src="${escHtml(ex.gifUrl)}" alt="${escHtml(exName(ex))}">` :
            (getExerciseAnimation(ex.id) ? getExerciseAnimation(ex.id) : '')}
        </div>
        <h2>${escHtml(exName(ex))}</h2>
        <div class="mb-16">
          <span class="badge badge-muscle">${escHtml(exMuscle(ex))}</span>
          <span class="badge badge-method">${escHtml(ex.method)}</span>
        </div>
        <div class="ex-detail-section">
          <h3>${t('howToPerform')}</h3>
          <p>${escHtml(exDesc(ex))}</p>
        </div>
        ${ex.youtubeUrl ? `<a href="${escHtml(ex.youtubeUrl)}" target="_blank" rel="noopener" class="btn btn-secondary btn-full mb-16">${t('watchOnYouTube')}</a>` : ''}
      </div>
    `;
    document.body.appendChild(overlayEl);
    document.getElementById('exercise-info-close').addEventListener('click', () => overlayEl.remove());
  }

  // --- Exercise History Modal ---
  function showExerciseHistory(exerciseId) {
    const ex = Store.getExercise(exerciseId);
    const logs = sortLogsByDateDesc(Store.getWorkoutLogs().filter(l => l.completed));
    const sessions = [];
    for (const log of logs) {
      if (sessions.length >= 10) break;
      const exLog = log.exercises.find(e => e.exerciseId === exerciseId);
      if (exLog && exLog.sets.some(s => parseFloat(s.reps) > 0 || parseFloat(s.weight) > 0)) {
        sessions.push({ date: log.date, sets: exLog.sets });
      }
    }

    const overlayEl = document.createElement('div');
    overlayEl.className = 'modal-overlay';
    overlayEl.innerHTML = `
      <div class="modal-sheet">
        <button class="modal-close" id="hist-close">&times;</button>
        <h2>${escHtml(ex ? exName(ex) : '')} — ${t('history')}</h2>
        <p class="text-dim text-sm mb-12">${t('last10')}</p>
        ${sessions.length === 0
          ? `<p class="text-dim">${t('noHistoryYet')}</p>`
          : sessions.map(s => `
            <div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border)">
              <div class="text-dim text-sm mb-4" style="font-weight:600">${formatDate(s.date)}</div>
              ${s.sets.map(set => `
                <div class="last-set-line">
                  <span class="text-dim">${t('set')} ${set.setNumber}:</span>
                  ${escHtml(String(set.reps))} ${t('reps')} @ ${escHtml(String(set.weight))}${escHtml(set.weightUnit || 'kg')}
                  ${set.difficulty ? `<span class="diff-tag diff-tag--${escHtml(set.difficulty.replace(/ /g, '-'))}">${escHtml(set.difficulty)}</span>` : ''}
                  ${set.comment ? `<span class="text-dim text-sm"> — ${escHtml(set.comment)}</span>` : ''}
                </div>
              `).join('')}
            </div>
          `).join('')}
      </div>
    `;
    document.body.appendChild(overlayEl);
    document.getElementById('hist-close').addEventListener('click', () => overlayEl.remove());
  }

  // --- Crash Recovery ---
  // If there's an unfinished workout in Supabase, restore it and navigate to active-workout
  function checkAndResumeCrashedWorkout() {
    const incompleteLog = [..._data.workoutLogs].reverse().find(l => !l.completed);
    if (!incompleteLog) return false;

    // Resume at the last exercise that had sets entered, or the first one
    let resumeIdx = 0;
    for (let i = incompleteLog.exercises.length - 1; i >= 0; i--) {
      if (incompleteLog.exercises[i].sets.length > 0) {
        resumeIdx = i;
        break;
      }
    }

    workoutState = { log: incompleteLog, currentExerciseIdx: resumeIdx };
    navigate('active-workout');
    return true;
  }

  // --- Public API ---
  window.App = {
    navigate,
    startWorkout,
    confirmEndWorkout,
    showExerciseInfo,
    showWorkoutOverview,
    showExerciseHistory,
    setEditDiff,
    addEditSet,
    removeEditSet,
    cancelEditWorkout,
    continueWorkout,
    resumeIncompleteWorkout,
    logout,
  };

  // --- Service Worker Registration ---
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'activated') {
            window.location.reload();
          }
        });
      });
    }).catch(() => {});
  }

  // --- Init ---
  async function init() {
    renderLoading();
    try {
      const { data: { session } } = await sb.auth.getSession();
      if (session) {
        currentUser = session.user;
        await loadUserData();
        if (!checkAndResumeCrashedWorkout()) {
          render();
        }
      } else {
        renderAuth();
      }
    } catch (err) {
      document.getElementById('app').innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;padding:24px;text-align:center;color:#fff;">
          <div style="font-size:48px;margin-bottom:16px;">⚠️</div>
          <h2 style="margin-bottom:8px;">Connection Error</h2>
          <p style="color:#aaa;margin-bottom:24px;">Could not connect to the server. Please check your internet connection and try again.</p>
          <button onclick="location.reload()" style="background:#4caf50;color:#fff;border:none;padding:12px 24px;border-radius:8px;font-size:16px;cursor:pointer;">Retry</button>
        </div>`;
    }
    sb.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        currentUser = null;
        _data.customExercises = [];
        _data.trainingDays = [];
        _data.workoutLogs = [];
        renderAuth();
      }
    });
  }

  init();

})();
