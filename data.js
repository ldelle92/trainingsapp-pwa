const DEFAULT_EXERCISES = [
  {
    id: "ex_001",
    name: "Barbell Bench Press",
    name_de: "Langhantel-Bankdrücken",
    muscle: "Chest",
    muscle_de: "Brust",
    recommendedSets: "2-3",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Lie flat on a bench. Grip the barbell slightly wider than shoulder width. Lower the bar to your mid-chest with control, then press up explosively until arms are fully extended. Keep your feet flat on the floor and maintain a slight arch in your lower back.",
    description_de: "Lege dich flach auf eine Bank. Greife die Langhantel etwas weiter als schulterbreit. Senke die Stange kontrolliert zur Brustmitte ab und drücke sie dann explosiv nach oben, bis die Arme vollständig gestreckt sind. Halte die Füße flach auf dem Boden und behalte eine leichte Wölbung im unteren Rücken bei.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
    isCustom: false
  },
  {
    id: "ex_002",
    name: "Incline Dumbbell Flyes",
    name_de: "Kurzhantel-Fliegende (Schrägbank)",
    muscle: "Chest",
    muscle_de: "Brust",
    recommendedSets: "2-3",
    recommendedReps: "8-12",
    method: "Pyramid",
    description: "Set the bench to a 30-45 degree incline. Hold a dumbbell in each hand above your chest with a slight bend in the elbows. Lower your arms out to the sides in a wide arc until you feel a stretch in your chest, then bring them back together above your chest.",
    description_de: "Stelle die Bank auf eine Neigung von 30–45 Grad ein. Halte in jeder Hand eine Kurzhantel über der Brust mit leicht gebeugten Ellbogen. Senke die Arme in einem weiten Bogen seitlich ab, bis du eine Dehnung in der Brust spürst, und führe sie dann wieder über der Brust zusammen.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=eozdVDA78K0",
    isCustom: false
  },
  {
    id: "ex_003",
    name: "Close-Grip Barbell Bench Press",
    name_de: "Enges Bankdrücken",
    muscle: "Chest",
    muscle_de: "Brust",
    recommendedSets: "2-3",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Lie flat on a bench and grip the barbell with hands about shoulder-width apart or slightly narrower. Lower the bar to your lower chest, keeping elbows close to your body. Press the bar up to full extension. This variation emphasizes the inner chest and triceps.",
    description_de: "Lege dich flach auf eine Bank und greife die Langhantel etwa schulterbreit oder etwas enger. Senke die Stange zur unteren Brust ab und halte dabei die Ellbogen nah am Körper. Drücke die Stange bis zur vollen Streckung nach oben. Diese Variante betont die innere Brust und den Trizeps.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=nEF0bv2FW94",
    isCustom: false
  },
  {
    id: "ex_004",
    name: "Dips on Parallel Bars",
    name_de: "Dips am Barren",
    muscle: "Triceps",
    muscle_de: "Trizeps",
    recommendedSets: "2-3",
    recommendedReps: "10-15",
    method: "Bodyweight",
    description: "Grip the parallel bars and lift yourself up with arms fully extended. Lean slightly forward. Lower your body by bending your elbows until your upper arms are roughly parallel to the floor. Push back up to the starting position. Keep your core tight throughout.",
    description_de: "Greife die Parallelholme und drücke dich mit vollständig gestreckten Armen nach oben. Lehne dich leicht nach vorne. Senke deinen Körper ab, indem du die Ellbogen beugst, bis deine Oberarme ungefähr parallel zum Boden sind. Drücke dich zurück in die Ausgangsposition. Halte die Körpermitte während der gesamten Bewegung angespannt.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=2z8JmcrW-As",
    isCustom: false
  },
  {
    id: "ex_005",
    name: "Incline EZ-Bar Skull Crushers",
    name_de: "SZ-Stange Stirndrücken (Schrägbank)",
    muscle: "Triceps",
    muscle_de: "Trizeps",
    recommendedSets: "2",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Lie on an incline bench holding an EZ-bar with a narrow grip above your forehead. Keeping your upper arms stationary, bend at the elbows to lower the bar toward your forehead. Extend your arms back up to the starting position. Focus on isolating the triceps.",
    description_de: "Lege dich auf eine Schrägbank und halte eine SZ-Stange mit engem Griff über der Stirn. Halte die Oberarme ruhig und beuge die Ellbogen, um die Stange Richtung Stirn abzusenken. Strecke die Arme wieder in die Ausgangsposition. Konzentriere dich darauf, den Trizeps isoliert zu belasten.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=d_KZxkY_0cM",
    isCustom: false
  },
  {
    id: "ex_006",
    name: "Cable Pushdowns",
    name_de: "Trizepsdrücken am Kabel",
    muscle: "Triceps",
    muscle_de: "Trizeps",
    recommendedSets: "2",
    recommendedReps: "10-15",
    method: "Pyramid",
    description: "Stand facing a cable machine with a straight or V-bar attachment. Grip the bar with palms facing down, elbows pinned to your sides. Push the bar down until your arms are fully extended, then slowly return to the starting position. Keep your torso upright.",
    description_de: "Stelle dich vor einen Kabelzug mit einem geraden Griff oder V-Griff. Greife den Griff mit den Handflächen nach unten und halte die Ellbogen eng am Körper. Drücke den Griff nach unten, bis die Arme vollständig gestreckt sind, und kehre dann langsam in die Ausgangsposition zurück. Halte den Oberkörper aufrecht.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=2-LAMcpzODU",
    isCustom: false
  },
  {
    id: "ex_007",
    name: "Seated Dumbbell French Press",
    name_de: "Kurzhantel French Press (sitzend)",
    muscle: "Triceps",
    muscle_de: "Trizeps",
    recommendedSets: "2",
    recommendedReps: "10-12",
    method: "Pyramid",
    description: "Sit upright on a bench holding a dumbbell with both hands behind your head, arms extended. Lower the dumbbell behind your head by bending at the elbows. Keep your upper arms close to your ears. Extend your arms back up to the starting position.",
    description_de: "Setze dich aufrecht auf eine Bank und halte eine Kurzhantel mit beiden Händen hinter dem Kopf, die Arme gestreckt. Senke die Kurzhantel hinter dem Kopf ab, indem du die Ellbogen beugst. Halte die Oberarme nah an den Ohren. Strecke die Arme wieder in die Ausgangsposition.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=gsNoPYwWXeM",
    isCustom: false
  },
  {
    id: "ex_008",
    name: "Standing Calf Raises",
    name_de: "Wadenheben stehend",
    muscle: "Calves",
    muscle_de: "Waden",
    recommendedSets: "2",
    recommendedReps: "15-25",
    method: "Pyramid",
    description: "Stand on the edge of a step or calf raise machine with the balls of your feet on the platform. Lower your heels as far as possible for a full stretch, then push up onto your toes as high as you can. Hold the top briefly before lowering.",
    description_de: "Stelle dich auf die Kante einer Stufe oder einer Wadenheben-Maschine, wobei nur die Fußballen auf der Plattform stehen. Senke die Fersen so weit wie möglich ab, um eine volle Dehnung zu erreichen, und drücke dich dann so hoch wie möglich auf die Zehenspitzen. Halte die obere Position kurz, bevor du absenkst.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=-M4-G8p8fmc",
    isCustom: false
  },
  {
    id: "ex_009",
    name: "45-Degree Leg Press Calf Raises",
    name_de: "Wadenheben an der Beinpresse",
    muscle: "Calves",
    muscle_de: "Waden",
    recommendedSets: "2",
    recommendedReps: "15-20",
    method: "Pyramid",
    description: "Sit in a 45-degree leg press machine. Place only the balls of your feet on the bottom edge of the platform. Release the safety and extend your ankles, pushing the platform away with your toes. Lower slowly for a deep stretch, then push up again.",
    description_de: "Setze dich in eine 45-Grad-Beinpresse. Platziere nur die Fußballen an der unteren Kante der Plattform. Löse die Sicherung und strecke die Fußgelenke, indem du die Plattform mit den Zehenspitzen wegdrückst. Senke langsam ab, um eine tiefe Dehnung zu erreichen, und drücke dann wieder nach oben.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=yGSS7erGkQM",
    isCustom: false
  },
  {
    id: "ex_010",
    name: "Wide-Stance Barbell Squats",
    name_de: "Kniebeugen mit weitem Stand",
    muscle: "Legs",
    muscle_de: "Beine",
    recommendedSets: "2-3",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Place the barbell across your upper back. Stand with feet wider than shoulder-width, toes pointed slightly outward. Bend at the hips and knees to lower yourself until your thighs are at least parallel to the floor. Drive through your heels to stand back up.",
    description_de: "Lege die Langhantel auf deinen oberen Rücken. Stelle dich mit den Füßen weiter als schulterbreit auf, die Zehenspitzen leicht nach außen gedreht. Beuge Hüfte und Knie, um dich abzusenken, bis deine Oberschenkel mindestens parallel zum Boden sind. Drücke dich über die Fersen wieder nach oben.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=Uv_DKDl7EjA",
    isCustom: false
  },
  {
    id: "ex_011",
    name: "45-Degree Leg Press",
    name_de: "Beinpresse 45 Grad",
    muscle: "Legs",
    muscle_de: "Beine",
    recommendedSets: "2",
    recommendedReps: "10-15",
    method: "Pyramid",
    description: "Sit in the leg press machine with your back flat against the pad. Place your feet shoulder-width apart on the platform. Release the safeties and lower the platform by bending your knees toward your chest. Push the platform back up without locking your knees.",
    description_de: "Setze dich in die Beinpresse mit dem Rücken flach am Polster. Platziere die Füße schulterbreit auf der Plattform. Löse die Sicherung und senke die Plattform ab, indem du die Knie Richtung Brust beugst. Drücke die Plattform wieder nach oben, ohne die Knie durchzustrecken.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=IZxyjW7MPJQ",
    isCustom: false
  },
  {
    id: "ex_012",
    name: "Lying Leg Curls",
    name_de: "Beinbeuger liegend",
    muscle: "Legs",
    muscle_de: "Beine",
    recommendedSets: "2",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Lie face down on a leg curl machine with the pad resting just above your ankles. Curl your legs up by bending at the knees, bringing the pad toward your glutes. Squeeze at the top, then slowly lower back to the starting position.",
    description_de: "Lege dich bäuchlings auf eine Beinbeuger-Maschine, wobei das Polster knapp über den Knöcheln aufliegt. Beuge die Beine, indem du die Knie anwinkelst und das Polster Richtung Gesäß ziehst. Spanne oben kurz an und senke dann langsam in die Ausgangsposition zurück.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=1Tq3QdYUuHs",
    isCustom: false
  },
  {
    id: "ex_013",
    name: "Stiff-Leg Deadlift",
    name_de: "Gestrecktes Kreuzheben",
    muscle: "Legs",
    muscle_de: "Beine",
    recommendedSets: "2",
    recommendedReps: "10-15",
    method: "Pyramid",
    description: "Stand holding a barbell with an overhand grip, feet hip-width apart. With a slight bend in the knees (keep them mostly straight), hinge at the hips to lower the barbell along your legs. Feel the stretch in your hamstrings, then drive your hips forward to return to standing.",
    description_de: "Stehe mit einer Langhantel im Obergriff, die Füße hüftbreit auseinander. Mit einer leichten Beugung in den Knien (halte sie weitgehend gestreckt) beuge dich in der Hüfte nach vorne und führe die Langhantel an den Beinen entlang nach unten. Spüre die Dehnung in der hinteren Oberschenkelmuskulatur und schiebe dann die Hüfte nach vorne, um wieder aufzustehen.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=1uDiW5--rAE",
    isCustom: false
  },
  {
    id: "ex_014",
    name: "Incline Dumbbell Curls",
    name_de: "Kurzhantel-Curls (Schrägbank)",
    muscle: "Biceps",
    muscle_de: "Bizeps",
    recommendedSets: "2",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Sit back on an incline bench (45 degrees) with a dumbbell in each hand, arms hanging straight down. Curl the dumbbells up toward your shoulders while keeping your upper arms stationary. Squeeze at the top, then slowly lower back down.",
    description_de: "Lehne dich auf einer Schrägbank (45 Grad) zurück, mit einer Kurzhantel in jeder Hand und herabhängenden Armen. Curle die Kurzhanteln zu den Schultern hoch, während du die Oberarme ruhig hältst. Spanne oben kurz an und senke dann langsam wieder ab.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=soxrZlIl35U",
    isCustom: false
  },
  {
    id: "ex_015",
    name: "Barbell Preacher Curls",
    name_de: "SZ-Curls an der Scottbank",
    muscle: "Biceps",
    muscle_de: "Bizeps",
    recommendedSets: "2",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Sit at a preacher curl bench with your upper arms resting on the pad. Grip a barbell with an underhand grip. Curl the bar up toward your shoulders, squeezing your biceps at the top. Lower the bar slowly with control back to the starting position.",
    description_de: "Setze dich an eine Scottbank, wobei die Oberarme auf dem Polster aufliegen. Greife eine Langhantel im Untergriff. Curle die Stange zu den Schultern hoch und spanne den Bizeps oben an. Senke die Stange langsam und kontrolliert in die Ausgangsposition zurück.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=fIWP-FRFNU0",
    isCustom: false
  },
  {
    id: "ex_016",
    name: "Standing Dumbbell Curls",
    name_de: "Kurzhantel-Curls stehend",
    muscle: "Biceps",
    muscle_de: "Bizeps",
    recommendedSets: "2",
    recommendedReps: "10-15",
    method: "Pyramid",
    description: "Stand with a dumbbell in each hand, arms at your sides, palms facing forward. Curl the dumbbells up toward your shoulders, keeping your elbows close to your body. Squeeze at the top, then lower slowly. Avoid swinging your body for momentum.",
    description_de: "Stehe mit einer Kurzhantel in jeder Hand, Arme seitlich am Körper, Handflächen nach vorne. Curle die Kurzhanteln zu den Schultern hoch und halte dabei die Ellbogen nah am Körper. Spanne oben kurz an und senke dann langsam ab. Vermeide es, mit dem Körper Schwung zu holen.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
    isCustom: false
  },
  {
    id: "ex_017",
    name: "Lying Leg Raises",
    name_de: "Beinheben liegend",
    muscle: "Abs",
    muscle_de: "Bauch",
    recommendedSets: "1-2",
    recommendedReps: "20-30",
    method: "Bodyweight",
    description: "Lie flat on the floor or a bench with your legs straight. Place your hands under your lower back or grip the bench for support. Raise your legs together until they are perpendicular to the floor, then lower them slowly without touching the ground.",
    description_de: "Lege dich flach auf den Boden oder eine Bank mit gestreckten Beinen. Platziere die Hände unter dem unteren Rücken oder halte dich an der Bank fest. Hebe beide Beine zusammen an, bis sie senkrecht zum Boden stehen, und senke sie dann langsam ab, ohne den Boden zu berühren.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=JB2oyawG9KI",
    isCustom: false
  },
  {
    id: "ex_018",
    name: "Floor Crunches",
    name_de: "Crunches am Boden",
    muscle: "Abs",
    muscle_de: "Bauch",
    recommendedSets: "1-2",
    recommendedReps: "30-40",
    method: "Bodyweight",
    description: "Lie on your back with knees bent and feet flat on the floor. Place your hands behind your head or across your chest. Curl your upper body toward your knees by contracting your abs. Lift only your shoulders off the floor. Lower back down with control.",
    description_de: "Lege dich auf den Rücken, die Knie gebeugt und die Füße flach auf dem Boden. Lege die Hände hinter den Kopf oder verschränke sie vor der Brust. Rolle den Oberkörper Richtung Knie, indem du die Bauchmuskeln anspannst. Hebe nur die Schultern vom Boden ab. Senke kontrolliert wieder ab.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
    isCustom: false
  },
  {
    id: "ex_019",
    name: "Seated Behind-Neck Press",
    name_de: "Nackendrücken sitzend",
    muscle: "Shoulders",
    muscle_de: "Schultern",
    recommendedSets: "2-3",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Sit on a bench with back support. Hold a barbell behind your head at about ear level with a wide grip. Press the bar straight up overhead until your arms are fully extended, then lower it back behind your head. Use a controlled tempo and moderate weight.",
    description_de: "Setze dich auf eine Bank mit Rückenlehne. Halte eine Langhantel hinter dem Kopf auf Ohrhöhe mit weitem Griff. Drücke die Stange gerade nach oben über den Kopf, bis die Arme vollständig gestreckt sind, und senke sie dann wieder hinter den Kopf ab. Verwende ein kontrolliertes Tempo und moderates Gewicht.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=WJKGMsl0jHc",
    isCustom: false
  },
  {
    id: "ex_020",
    name: "Standing Lateral Raises",
    name_de: "Seitheben stehend",
    muscle: "Shoulders",
    muscle_de: "Schultern",
    recommendedSets: "2",
    recommendedReps: "8-12",
    method: "Pyramid",
    description: "Stand with a dumbbell in each hand at your sides. With a slight bend in the elbows, raise your arms out to the sides until they are parallel to the floor. Hold briefly at the top, then lower slowly. Keep your core tight and avoid using momentum.",
    description_de: "Stehe mit einer Kurzhantel in jeder Hand seitlich am Körper. Mit leicht gebeugten Ellbogen hebe die Arme seitlich an, bis sie parallel zum Boden sind. Halte kurz oben, dann senke langsam ab. Halte die Körpermitte angespannt und vermeide Schwungholen.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
    isCustom: false
  },
  {
    id: "ex_021",
    name: "Seated Dumbbell Front Press",
    name_de: "Kurzhantel-Schulterdrücken sitzend",
    muscle: "Shoulders",
    muscle_de: "Schultern",
    recommendedSets: "2-3",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Sit on a bench with back support holding a dumbbell in each hand at shoulder height, palms facing forward. Press the dumbbells up overhead until your arms are fully extended. Lower them back to shoulder height with control.",
    description_de: "Setze dich auf eine Bank mit Rückenlehne und halte in jeder Hand eine Kurzhantel auf Schulterhöhe, die Handflächen nach vorne. Drücke die Kurzhanteln über den Kopf, bis die Arme vollständig gestreckt sind. Senke sie kontrolliert auf Schulterhöhe zurück.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog",
    isCustom: false
  },
  {
    id: "ex_022",
    name: "Wide-Grip Pull-Ups",
    name_de: "Klimmzüge mit weitem Griff",
    muscle: "Back",
    muscle_de: "Rücken",
    recommendedSets: "2-3",
    recommendedReps: "max",
    method: "Bodyweight",
    description: "Hang from a pull-up bar with a wide overhand grip, hands well outside shoulder width. Pull your body up until your chin is above the bar, focusing on squeezing your lats. Lower yourself slowly back to a full hang. Aim for as many reps as possible.",
    description_de: "Hänge an einer Klimmzugstange mit weitem Obergriff, die Hände deutlich weiter als schulterbreit. Ziehe deinen Körper nach oben, bis dein Kinn über der Stange ist, und konzentriere dich darauf, den Latissimus anzuspannen. Lasse dich langsam zurück in den vollen Hang. Versuche so viele Wiederholungen wie möglich.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=eGo4IYlbE5g",
    isCustom: false
  },
  {
    id: "ex_023",
    name: "Bent-Over Barbell Rows",
    name_de: "Langhantel-Rudern vorgebeugt",
    muscle: "Back",
    muscle_de: "Rücken",
    recommendedSets: "2-3",
    recommendedReps: "6-10",
    method: "Pyramid",
    description: "Stand with feet hip-width apart, holding a barbell with an overhand grip. Hinge at the hips until your torso is about 45 degrees from the floor. Pull the bar toward your lower chest, squeezing your shoulder blades together. Lower the bar with control.",
    description_de: "Stehe mit hüftbreit auseinander stehenden Füßen und halte eine Langhantel im Obergriff. Beuge dich in der Hüfte nach vorne, bis dein Oberkörper etwa 45 Grad zum Boden geneigt ist. Ziehe die Stange zur unteren Brust und drücke die Schulterblätter zusammen. Senke die Stange kontrolliert ab.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=FWJR5Ve8bnQ",
    isCustom: false
  },
  {
    id: "ex_024",
    name: "Single-Arm Dumbbell Rows",
    name_de: "Einarmiges Kurzhantel-Rudern",
    muscle: "Back",
    muscle_de: "Rücken",
    recommendedSets: "2-3",
    recommendedReps: "10-12",
    method: "Pyramid",
    description: "Place one knee and hand on a bench for support. With the other hand, hold a dumbbell hanging straight down. Pull the dumbbell up toward your hip, keeping your elbow close to your body. Squeeze your back at the top, then lower slowly.",
    description_de: "Stütze ein Knie und eine Hand auf einer Bank ab. Halte mit der anderen Hand eine Kurzhantel, die gerade nach unten hängt. Ziehe die Kurzhantel Richtung Hüfte nach oben und halte den Ellbogen nah am Körper. Spanne den Rücken oben an und senke dann langsam ab.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=pYcpY20QaE8",
    isCustom: false
  },
  {
    id: "ex_025",
    name: "Behind-Neck Lat Pulldowns",
    name_de: "Latzug zum Nacken",
    muscle: "Back",
    muscle_de: "Rücken",
    recommendedSets: "2",
    recommendedReps: "10-15",
    method: "Pyramid",
    description: "Sit at a lat pulldown machine with a wide grip on the bar. Pull the bar down behind your head to about ear level, focusing on squeezing your lats. Slowly release the bar back up with control. Use moderate weight and maintain proper form.",
    description_de: "Setze dich an eine Latzugmaschine und greife die Stange mit weitem Griff. Ziehe die Stange hinter dem Kopf bis etwa auf Ohrhöhe herunter und konzentriere dich darauf, den Latissimus anzuspannen. Lasse die Stange langsam und kontrolliert wieder nach oben. Verwende moderates Gewicht und achte auf saubere Ausführung.",
    gifUrl: "",
    youtubeUrl: "https://www.youtube.com/watch?v=KJ7ZiM1fLkg",
    isCustom: false
  }
];

const POSTURE_EXERCISES = [
  {
    id: "post_001",
    name: "Forward Head Posture / Tech Neck",
    name_de: "Vorgestreckte Kopfhaltung / Handy-Nacken",
    problem: "The head is tilted backward or, more commonly, the chin protrudes slightly forward.",
    problem_de: "Der Kopf wird in den Nacken gelegt oder (vor allem das Kinn) ist leicht nach vorn gestreckt.",
    pain: "Neck pain.",
    pain_de: "im Nacken",
    causes: [
      {
        name: "Tight Neck Muscles",
        name_de: "Steife Muskeln im Nacken",
        note: null,
        note_de: null,
        exerciseName: null,
        exerciseName_de: null,
        steps: [
          "Stretch your neck daily by slowly and gently tilting your head forward, to each side, and backward. Do not pull with your hand — instead, actively reach the opposite arm downward. Hold each stretch for 20 seconds. Repeat several times throughout the day, including during work.",
          "To stretch the back of your neck: lie on your back and gently pull your chin toward your chest without lifting your head off the floor."
        ],
        steps_de: [
          "Dehne deinen Kopf täglich, indem du ihn langsam und vorsichtig nach vorn, zu den Seiten und nach hinten neigst. Drück nicht mit der Hand nach, sondern strecke den gegenüberliegenden Arm nach unten. Halte jeweils 20 Sekunden. Wiederhole dies bei Bedarf mehrfach am Tag, auch während der Arbeit.",
          "Um deinen hinteren Nacken zu dehnen, kannst du dich auch in Rückenlage legen und dein Kinn zur Brust ziehen, ohne den Kopf vom Boden abzuheben."
        ],
        tips: [],
        tips_de: []
      },
      {
        name: "Weak Deep Neck Flexor Muscles",
        name_de: "Schwache vordere Halsmuskeln",
        note: null,
        note_de: null,
        exerciseName: "Neck Crunches",
        exerciseName_de: "Nacken-Crunch",
        steps: [
          "Lie on your back on the floor.",
          "Lift your head just a few centimeters off the ground, then extend your head upward and hold for approximately 5 seconds.",
          "Perform 1–3 sets of 12 repetitions daily."
        ],
        steps_de: [
          "Leg dich in Rückenlage auf den Boden.",
          "Hebe zuerst deinen Kopf so an, dass er nur wenige Zentimeter vom Boden entfernt ist. Strecke dann deinen Kopf in die Höhe und halte diese Position für etwa 5 Sekunden.",
          "Mach davon täglich 1 bis 3 Sätze mit jeweils 12 Wiederholungen."
        ],
        tips: [],
        tips_de: []
      }
    ]
  },
  {
    id: "post_002",
    name: "Elevated / Tight Shoulders",
    name_de: "Verspannte, hochgezogene Schultern",
    problem: "Your neck appears to disappear between your raised shoulders.",
    problem_de: "Dein Hals verschwindet zwischen hochgezogenen Schultern.",
    pain: "Neck and shoulder tension.",
    pain_de: "Verspannungen im Nacken und den Schultern sind typisch.",
    causes: [
      {
        name: "Tight Upper Trapezius Muscle",
        name_de: "Verkürzter Trapezmuskel",
        note: "The trapezius runs from the back of the neck down to the upper back.",
        note_de: "Der Muskel beginnt auf der Rückseite des Halses und verläuft bis zum oberen Teil deines Rückens.",
        exerciseName: "Trapezius Stretch",
        exerciseName_de: "Trapezmuskel-Dehnung",
        steps: [
          "Place your left arm behind your back while touching the left side of your face with your right hand.",
          "Gently pull your head toward the right side until you feel a strong stretch.",
          "Hold for 30 seconds and repeat 3 times. Switch sides."
        ],
        steps_de: [
          "Leg den linken Arm hinter deinen Rücken, während du mit dem rechten Arm deine linke Gesichtshälfte berührst und den Kopf vorsichtig nach rechts ziehst.",
          "Mach das so lange, bis du die Dehnung sogar in den Füßen spüren kannst.",
          "Halte diese Position für 30 Sekunden und wiederhole sie anschließend 3-mal. Seite wechseln."
        ],
        tips: [],
        tips_de: []
      },
      {
        name: "Weak Serratus Anterior",
        name_de: "Schwacher Serratus Anterior (vorderer Sägezahnmuskel)",
        note: "The serratus anterior is located beneath the chest muscles and extends from the upper ribs to the shoulder blades.",
        note_de: "Das ist der Muskel direkt unter deinen Brustmuskeln, der sich von deinen oberen Rippen bis hin zu deinen Schulterblättern zieht.",
        exerciseName: "Chair Shoulder Raises",
        exerciseName_de: "Stuhl-Schulterheben",
        steps: [
          "Sit upright on a chair with your hands beside your hips.",
          "Press your palms into the chair seat and straighten your arms. Push down until your hips lift slightly and your torso rises.",
          "Important: Keep your arms straight throughout the entire movement.",
          "Hold for 5 seconds.",
          "Perform 2–3 sets of 12 repetitions daily."
        ],
        steps_de: [
          "Setze dich aufrecht mit den Händen neben deinen Hüften auf einen Stuhl.",
          "Drücke die Handflächen auf den Sitz und strecke die Arme durch. Drücke den Stuhl runter, bis sich deine Hüften vom Stuhl bewegen und sich dein Rumpf erhebt.",
          "Wichtig: Die Arme nicht bewegen und gestreckt lassen.",
          "Halte diese Übung für 5 Sekunden.",
          "Mach davon täglich 2 bis 3 Sätze mit jeweils 12 Wiederholungen."
        ],
        tips: [],
        tips_de: []
      }
    ]
  },
  {
    id: "post_003",
    name: "Rounded Shoulders",
    name_de: "Nach vorn gebeugte Schultern",
    problem: "Your shoulders roll forward, the chest collapses inward, and the upper back becomes rounded.",
    problem_de: "Deine Schultern fallen nach vorn, die Brust in sich zusammen und der obere Rücken wird rund.",
    pain: "Neck, shoulder, or back pain.",
    pain_de: "im Nacken, in den Schultern oder im Rücken",
    causes: [
      {
        name: "Tight and Shortened Chest Muscles",
        name_de: "Verhärtete und verkürzte Brustmuskeln",
        note: null,
        note_de: null,
        exerciseName: "Doorway Stretch",
        exerciseName_de: "Türrahmen-Dehnung",
        steps: [
          "Place your arm against a door frame in a \"high-five\" position, forming a 90-degree angle at the elbow.",
          "Step through the doorway until you feel a stretch in your chest and shoulders.",
          "Hold for 30 seconds.",
          "Ideally, repeat 4 times per day."
        ],
        steps_de: [
          "Drücke deinen Arm gegen die Türumrahmung in der High-Five-Position (diese sieht aus wie ein L) und bringe deinen Ellbogen in einen 90-Grad-Winkel.",
          "Geh durch den Türeingang, bis du die Dehnung in deiner Brust und den Schultern spüren kannst.",
          "Halte hier für 30 Sekunden.",
          "Wiederhole das Ganze am besten 4-mal täglich."
        ],
        tips: [],
        tips_de: []
      },
      {
        name: "Weak Middle and Lower Trapezius Muscles",
        name_de: "Schwäche im mittleren und unteren Trapezmuskel",
        note: null,
        note_de: null,
        exerciseName: "Superman Variation",
        exerciseName_de: "Superman-Variation",
        steps: [
          "Lie face down on the floor and position your arms in a 90-degree \"high-five\" position.",
          "Without changing the elbow angle, lift both arms toward the ceiling while pulling your shoulders back and squeezing your shoulder blades together.",
          "Hold for 5 seconds.",
          "Perform 2–3 sets of 12 repetitions daily."
        ],
        steps_de: [
          "Leg dich mit dem Gesicht nach unten (Bauchlage) auf den Boden und bringe deine Arme in einen 90-Grad-Winkel in der High-Five-Position.",
          "Ohne deinen Ellenbogenwinkel zu verändern, strecke beide Arme in die Luft, während du deine Schultern zurückziehst und deine Schulterblätter zusammenpresst.",
          "Halte diese Superman-Variante für 5 Sekunden.",
          "Mach davon täglich 2 bis 3 Sätze mit jeweils 12 Wiederholungen."
        ],
        tips: [],
        tips_de: []
      }
    ]
  },
  {
    id: "post_004",
    name: "Rounded Upper Back / Hunchback Posture",
    name_de: "Rundrücken / Buckel",
    problem: "The upper back is excessively rounded and forms a visible hump.",
    problem_de: "Dein oberer Rücken ist krumm und bildet einen Buckel.",
    pain: "Neck, shoulder, and back pain.",
    pain_de: "im Nacken, in den Schultern und im Rücken",
    causes: [
      {
        name: "Limited Thoracic Spine Mobility",
        name_de: "Eingeschränkte Beweglichkeit des oberen Rückens",
        note: null,
        note_de: null,
        exerciseName: "Foam Roller Thoracic Extension",
        exerciseName_de: "Faszienrollen-Extension",
        steps: [
          "Lie on your back on a foam roller positioned around the middle of your upper back.",
          "Place your hands behind your head and perform 5 thoracic extensions over the foam roller.",
          "Move the roller to a different position along your upper back and repeat."
        ],
        steps_de: [
          "Leg dich mit dem Gesicht nach oben auf eine Faszienrolle, die ungefähr in der Mitte des Rückens platziert ist, und bring deine Wirbelsäule in eine aufrechte Position.",
          "Nimm dann deine Hände hinter deinen Kopf und bewege deinen oberen Rücken 5-mal über die Faszienrolle.",
          "Wechsle die Position der Rolle und wiederhole die Übung."
        ],
        tips: [],
        tips_de: []
      },
      {
        name: "Weak Back Muscles",
        name_de: "Schwache Rückenmuskulatur",
        note: null,
        note_de: null,
        exerciseName: "Small Cobra (advanced: Full Cobra)",
        exerciseName_de: "Kleine Kobra (fortgeschrittene Version: Große Kobra)",
        steps: [
          "Lie face down on the floor with your forearms resting on the mat in front of you.",
          "As you inhale, lift your head and chest off the floor while squeezing your shoulder blades together. Keep your chin slightly tucked downward.",
          "Your forearms remain on the floor throughout.",
          "Hold for 5 seconds before slowly lowering yourself back down.",
          "Perform 2–3 sets of 12 repetitions."
        ],
        steps_de: [
          "Leg dich mit dem Gesicht nach unten in Bauchlage. Platziere deine Unterarme vor dir auf der Matte.",
          "Hebe mit der Einatmung Kopf und Brust vom Boden ab, während du deine Schulterblätter zusammenpresst – das Kinn zeigt dabei nach unten.",
          "Die Unterarme bleiben am Boden.",
          "Halte diese Übung für 5 Sekunden, bevor du den Oberkörper langsam wieder zum Boden senkst.",
          "Mach davon 2 bis 3 Sätze mit jeweils 12 Wiederholungen."
        ],
        tips: [
          "Pull the shoulders away from the ears.",
          "Avoid overextending the lower back.",
          "Keep your gaze directed slightly downward.",
          "Keep the chin gently tucked toward the chest.",
          "Lift only as high as you can while maintaining a long neck."
        ],
        tips_de: [
          "Schultern weg von den Ohren ziehen.",
          "Den unteren Rücken nicht überstrecken.",
          "Der Blick bleibt nach vorn unten gerichtet.",
          "Das Kinn leicht zur Brust gezogen.",
          "Den Kopf nur so weit heben, dass der Nacken lang bleibt – nicht überstrecken."
        ]
      }
    ]
  },
  {
    id: "post_005",
    name: "Anterior Pelvic Tilt / Hyperlordosis",
    name_de: "Hohlkreuz (Hyperlordose)",
    problem: "An excessive inward curve of the lower back. This posture often pushes the abdomen outward, even in people who do not carry excessive abdominal fat.",
    problem_de: "Das Hohlkreuz stellt sich als eine übertriebene Krümmung der Lendenwirbelsäule nach vorne dar. Diese Neigung verschiebt deine Haltung so, dass sich dein Magen nach außen drückt, sogar wenn du nicht Unmengen Bauchfett hast.",
    pain: "Lower back pain caused by the exaggerated lumbar arch.",
    pain_de: "am hinteren Rücken (wegen des ausgeprägten Bogens in der Lendenwirbelsäule)",
    causes: [
      {
        name: "Tight Hip Flexors",
        name_de: "Abgeschwächte Hüftbeugemuskeln",
        note: "Hip flexors are responsible for bringing the thigh toward the abdomen.",
        note_de: "Sie ermöglichen normalerweise, den Oberschenkel bis zum Bauch zu bewegen.",
        exerciseName: "Kneeling Hip Flexor Stretch",
        exerciseName_de: "Hüftbeuger-Dehnung im Kniestand",
        steps: [
          "Kneel on one knee. Contract the glute muscles on the kneeling side until you feel a stretch in the front of the hip.",
          "Raise the arm on the kneeling side overhead and lean slightly toward the opposite side to intensify the stretch.",
          "Hold for 30 seconds and repeat 3 times. Switch sides."
        ],
        steps_de: [
          "Dehne deine Hüfte, während du dich auf einem Knie abstützt. Ziehe dann die Gesäßmuskeln auf der knienden Seite zusammen, bis du die Dehnung in der Hüfte spürst.",
          "Führe dann den gestreckten Arm der knienden Seite nach oben und in die entgegengesetzte Richtung, um den Stretch zu intensivieren.",
          "Halte diese Position für 30 Sekunden und wiederhole sie anschließend 3-mal. Seite wechseln."
        ],
        tips: [],
        tips_de: []
      },
      {
        name: "Weak Glute Muscles",
        name_de: "Schwache Gesäßmuskeln",
        note: null,
        note_de: null,
        exerciseName: "Glute Bridges",
        exerciseName_de: "Beckenheben (Glute Bridge)",
        steps: [
          "Lie on your back with your feet flat on the floor.",
          "Squeeze your glutes and lift your hips until your shoulders, hips, and knees form a straight line.",
          "Hold for 5 seconds.",
          "Perform 15 repetitions.",
          "If this becomes too easy, place additional weight across your hips."
        ],
        steps_de: [
          "Leg dich auf den Rücken und stelle die Füße auf.",
          "Spanne deine Gesäßmuskeln an und drücke deine Hüften vom Boden weg, bis Körper, Knie und Schultern auf einer Höhe sind.",
          "Halte die Position für 5 Sekunden.",
          "Wiederhole die Übung 15-mal.",
          "Wem das zu einfach ist, der packt sich ein Gewicht auf das Becken."
        ],
        tips: [],
        tips_de: []
      }
    ]
  }
];
