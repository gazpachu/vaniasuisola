export type Locale = "en" | "es" | "it";

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
  { code: "it", label: "Italiano", short: "IT" },
];

type Dict = {
  nav: { about: string; work: string; contact: string };
  tagline: string;

  // Home
  home: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    h1c: string;
    intro: string;
    introName: string;
    cta1: string;
    cta2: string;
    cornerNote: string;
    statementLabel: string;
    statementA: string;
    statementB: string;
    statementBody: string;
    selectedWorks: string;
    recentPieces: string;
    recentEm: string;
    allWork: string;
    viewAll: string;
    earthenware: string;
    earthenware2: string;
    recogSelected: string;
    recogTrained: string;
    recogOrigin: string;
    bienal: string;
    manises: string;
    easdaLoc: string;
    florence: string;
    workingSpain: string;
    metaTitle: string;
    metaDesc: string;
    ogDesc: string;
  };

  // About
  about: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    leadA: string;
    leadFlorence: string;
    leadAnd: string;
    leadAlicante: string;
    leadEnd: string;
    p1: string;
    easda: string;
    p2: string;
    p3a: string;
    bienalAbout: string;
    p3b: string;
    studioCaption: string;
    trajectoryEyebrow: string;
    milestonesA: string;
    milestonesB: string;
    timeline: { year: string; title: string; place: string; note: string }[];
    materialsEyebrow: string;
    materialsA: string;
    materialsB: string;
    materialsBody: string;
    processEyebrow: string;
    processA: string;
    processB: string;
    processBody: string;
    seeWork: string;
    getInTouch: string;
    metaTitle: string;
    metaDesc: string;
    ogDesc: string;
  };

  // Work
  work: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    intro: string;
    items: { note: string }[];
    ctaEyebrow: string;
    ctaA: string;
    ctaB: string;
    enquire: string;
    metaTitle: string;
    metaDesc: string;
    ogDesc: string;
    materials: { earthenware: string; earthenware2: string };
  };

  // Contact
  contact: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    studio: string;
    studioPlace: string;
    byAppointment: string;
    email: string;
    elsewhere: string;
    enquiriesAbout: string;
    enquiries: string[];
    writeMessage: string;
    name: string;
    emailLabel: string;
    subject: string;
    message: string;
    placeholder: string;
    send: string;
    thankYou: string;
    received: string;
    metaTitle: string;
    metaDesc: string;
    ogDesc: string;
  };

  // Footer
  footer: {
    tagline: string;
    studioVisits: string;
    cities: string;
    instagram: string;
    getInTouch: string;
    rights: string;
    worksIn: string;
  };

  // 404
  notFound: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    home: string;
  };
};

export const translations: Record<Locale, Dict> = {
  en: {
    nav: { about: "About", work: "Work", contact: "Contact" },
    tagline: "Ceramic Sculpture",
    home: {
      eyebrow: "Florence — Alicante · Est. EASDA",
      h1a: "Forms that",
      h1b: "breathe",
      h1c: "in clay.",
      intro:
        "— hand-built earthenware that traces the quiet architecture of growth, gesture and void.",
      introName: "The sculptural work of",
      cta1: "View the work",
      cta2: "About the artist",
      cornerNote: "Selected · Bienal Manises 2026",
      statementLabel: "Statement",
      statementA: "I work the clay until it forgets it was ever flat —",
      statementB: " until it learns to hold its own breath.",
      statementBody:
        "Each piece begins as a single sheet and is folded, pierced and joined by hand. The void is as deliberate as the wall: light passes through, shadows gather inside, and the form acquires the rhythm of something living.",
      selectedWorks: "Selected works",
      recentPieces: "Recent",
      recentEm: "pieces",
      allWork: "All work →",
      viewAll: "View all work →",
      earthenware: "Earthenware · 2024",
      earthenware2: "Earthenware · 2024",
      recogSelected: "Selected",
      recogTrained: "Trained",
      recogOrigin: "Origin",
      bienal: "Bienal Internacional de Cerámica",
      manises: "Manises 2026",
      easdaLoc: "Alicante",
      florence: "Florence, Italy",
      workingSpain: "working in Spain",
      metaTitle: "Vania Suisola — Ceramic Sculpture",
      metaDesc:
        "Hand-built ceramic sculpture by Vania Suisola. Organic forms in earthenware, made between Florence and Alicante.",
      ogDesc:
        "Selected for the Bienal Internacional de Cerámica de Manises. Portfolio of organic, hand-built ceramic forms.",
    },
    about: {
      eyebrow: "About the artist",
      h1a: "A quiet practice between",
      h1b: " two shores.",
      leadA: "Vania Suisola is a ceramic sculptor born in",
      leadFlorence: " Florence, Italy",
      leadAnd: ", and based in",
      leadAlicante: " Alicante, Spain",
      leadEnd: ", where she has lived and worked for many years.",
      p1: "Her practice grew from an early love of drawing and material — the same instinct that, years later, led her to formal training in artistic ceramics at",
      easda: "EASDA",
      p2: "From a single sheet of clay, she folds, joins and pierces structures that feel grown rather than made: shells, ribcages, cells, all the soft architecture of living things. Each work is built entirely by hand, fired slowly, and finished in matte earthenware whites that absorb the light.",
      p3a: "Her most recent piece was selected for the",
      bienalAbout: " Bienal Internacional de Cerámica de Manises",
      p3b: ", Valencia — one of the most respected ceramic platforms in Spain.",
      studioCaption: "In studio, Alicante",
      trajectoryEyebrow: "Trajectory",
      milestonesA: "Selected",
      milestonesB: "milestones",
      timeline: [
        {
          year: "2024",
          title: "Bienal Internacional de Cerámica de Manises",
          place: "Valencia, Spain",
          note: "Recent sculptural work selected for the international biennial.",
        },
        {
          year: "2023",
          title: "Graduation — Artistic Ceramics",
          place: "EASDA, Alicante",
          note: "Higher studies in artistic ceramics, with a focus on hand-built sculptural form.",
        },
        {
          year: "2020",
          title: "Studio in Alicante",
          place: "Spain",
          note: "Independent studio practice in earthenware.",
        },
        {
          year: "—",
          title: "Born in Florence",
          place: "Italy",
          note: "Early formation between Tuscan craft tradition and Mediterranean light.",
        },
      ],
      materialsEyebrow: "Materials",
      materialsA: "Earthenware,",
      materialsB: "and patience.",
      materialsBody:
        "Vania works with high-firing clay bodies that allow walls to be pulled thin without losing structure. The matte white finish is never glaze for its own sake — it serves the form, the shadow and the void.",
      processEyebrow: "Process",
      processA: "Hand-built,",
      processB: "slowly.",
      processBody:
        "No moulds, no wheel. Each piece begins with a flat sheet that is coaxed into volume over days, dried under cloth, then fired twice. The openings are never decorative — they are how the sculpture breathes.",
      seeWork: "See the work →",
      getInTouch: "Get in touch",
      metaTitle: "About — Vania Suisola",
      metaDesc:
        "Vania Suisola is a ceramic artist born in Florence and based in Alicante. Trained at EASDA, her sculptural work has been selected for the Bienal Internacional de Manises.",
      ogDesc:
        "From Florence to Alicante: a sculptor working organic, hand-built ceramic forms.",
    },
    work: {
      eyebrow: "Selected work · 2023 — 2024",
      h1a: "The collection of",
      h1b: " hollow forms.",
      intro:
        "A growing series of hand-built earthenware sculptures. Each work is one of a kind, built without moulds and finished in matte unglazed white.",
      items: [
        { note: "Selected — Bienal Internacional de Cerámica, Manises 2024." },
        { note: "Single-sheet construction, fired twice." },
        { note: "Voids treated as architecture, not absence." },
        { note: "On the breath of the form — a study in containment." },
        { note: "Edge, light, threshold." },
      ],
      ctaEyebrow: "Acquisitions & commissions",
      ctaA: "Available works and commissioned pieces",
      ctaB: " by appointment.",
      enquire: "Enquire →",
      metaTitle: "Work — Vania Suisola",
      metaDesc:
        "Selected ceramic sculptures by Vania Suisola — hand-built porcelain and stoneware works, including the piece selected for the Bienal Internacional de Manises.",
      ogDesc:
        "Selected ceramic sculptures, 2023–2024. Porcelain and stoneware, hand-built.",
      materials: { earthenware: "Earthenware", earthenware2: "Earthenware" },
    },
    contact: {
      eyebrow: "Get in touch",
      h1a: "Studio visits, exhibitions and",
      h1b: " commissioned work.",
      studio: "Studio",
      studioPlace: "Alicante, Spain",
      byAppointment: "By appointment only.",
      email: "Email",
      elsewhere: "Elsewhere",
      enquiriesAbout: "Enquiries about",
      enquiries: [
        "— Acquisitions of available works",
        "— Commissioned sculptures",
        "— Exhibitions and gallery representation",
        "— Press, interviews and studio visits",
      ],
      writeMessage: "Write a message",
      name: "Name",
      emailLabel: "Email",
      subject: "Subject",
      message: "Message",
      placeholder: "Tell Vania a little about your enquiry…",
      send: "Send message →",
      thankYou: "Thank you.",
      received: "Your message has been received. Vania will reply personally.",
      metaTitle: "Contact — Vania Suisola",
      metaDesc:
        "Get in touch with ceramic artist Vania Suisola for studio visits, exhibitions, acquisitions and commissioned work. Based in Alicante, Spain.",
      ogDesc:
        "Studio visits, acquisitions and commissions — by appointment in Alicante.",
    },
    footer: {
      tagline: "Ceramic Sculpture · Alicante",
      studioVisits: "Studio visits and commissioned work by appointment.",
      cities: "Florence — Alicante",
      instagram: "Instagram ↗",
      getInTouch: "Get in touch ↗",
      rights: "© {year} Vania Suisola",
      worksIn: "All works in earthenware",
    },
    notFound: {
      eyebrow: "Lost in the studio",
      title: "404",
      subtitle: "This page doesn't exist",
      body: "The piece you're looking for may have moved — or never been fired.",
      home: "Return home",
    },
  },

  es: {
    nav: { about: "Sobre", work: "Obra", contact: "Contacto" },
    tagline: "Escultura Cerámica",
    home: {
      eyebrow: "Florencia — Alicante · Formada en EASDA",
      h1a: "Formas que",
      h1b: "respiran",
      h1c: "en arcilla.",
      intro:
        "— loza modelada a mano que traza la arquitectura silenciosa del crecimiento, el gesto y el vacío.",
      introName: "La obra escultórica de",
      cta1: "Ver la obra",
      cta2: "Sobre la artista",
      cornerNote: "Seleccionada · Bienal Manises 2026",
      statementLabel: "Manifiesto",
      statementA: "Trabajo la arcilla hasta que olvida que un día fue plana —",
      statementB: " hasta que aprende a contener su propio aliento.",
      statementBody:
        "Cada pieza comienza como una sola lámina, plegada, perforada y unida a mano. El vacío es tan deliberado como el muro: la luz lo atraviesa, las sombras se recogen dentro, y la forma adquiere el ritmo de algo vivo.",
      selectedWorks: "Obra seleccionada",
      recentPieces: "Piezas",
      recentEm: "recientes",
      allWork: "Toda la obra →",
      viewAll: "Ver toda la obra →",
      earthenware: "Loza · 2024",
      earthenware2: "Loza · 2024",
      recogSelected: "Seleccionada",
      recogTrained: "Formación",
      recogOrigin: "Origen",
      bienal: "Bienal Internacional de Cerámica",
      manises: "Manises 2026",
      easdaLoc: "Alicante",
      florence: "Florencia, Italia",
      workingSpain: "trabajando en España",
      metaTitle: "Vania Suisola — Escultura Cerámica",
      metaDesc:
        "Escultura cerámica modelada a mano por Vania Suisola. Formas orgánicas en loza, entre Florencia y Alicante.",
      ogDesc:
        "Seleccionada para la Bienal Internacional de Cerámica de Manises. Portfolio de formas cerámicas orgánicas hechas a mano.",
    },
    about: {
      eyebrow: "Sobre la artista",
      h1a: "Una práctica silenciosa entre",
      h1b: " dos orillas.",
      leadA: "Vania Suisola es escultora cerámica nacida en",
      leadFlorence: " Florencia, Italia",
      leadAnd: ", y afincada en",
      leadAlicante: " Alicante, España",
      leadEnd: ", donde vive y trabaja desde hace muchos años.",
      p1: "Su práctica nació de un temprano amor por el dibujo y la materia — el mismo instinto que, años más tarde, la llevó a la formación oficial en cerámica artística en",
      easda: "EASDA",
      p2: "A partir de una única lámina de arcilla, pliega, une y perfora estructuras que parecen crecidas más que hechas: caparazones, costillares, células, toda la arquitectura blanda de lo vivo. Cada obra está construida íntegramente a mano, cocida lentamente y acabada en blancos mate de loza que absorben la luz.",
      p3a: "Su pieza más reciente fue seleccionada para la",
      bienalAbout: " Bienal Internacional de Cerámica de Manises",
      p3b: ", Valencia — una de las plataformas cerámicas más respetadas de España.",
      studioCaption: "En el estudio, Alicante",
      trajectoryEyebrow: "Trayectoria",
      milestonesA: "Hitos",
      milestonesB: "seleccionados",
      timeline: [
        {
          year: "2024",
          title: "Bienal Internacional de Cerámica de Manises",
          place: "Valencia, España",
          note: "Obra escultórica reciente seleccionada para la bienal internacional.",
        },
        {
          year: "2023",
          title: "Titulación — Cerámica Artística",
          place: "EASDA, Alicante",
          note: "Estudios superiores en cerámica artística, con foco en la forma escultórica modelada a mano.",
        },
        {
          year: "2020",
          title: "Estudio en Alicante",
          place: "España",
          note: "Práctica independiente en loza.",
        },
        {
          year: "—",
          title: "Nacida en Florencia",
          place: "Italia",
          note: "Primera formación entre la tradición artesana toscana y la luz mediterránea.",
        },
      ],
      materialsEyebrow: "Materiales",
      materialsA: "Loza,",
      materialsB: "y paciencia.",
      materialsBody:
        "Vania trabaja con pastas de alta temperatura que permiten estirar los muros hasta su límite sin perder estructura. El acabado mate blanco no es esmalte por sí mismo — sirve a la forma, a la sombra y al vacío.",
      processEyebrow: "Proceso",
      processA: "Modelado a mano,",
      processB: "con calma.",
      processBody:
        "Sin moldes, sin torno. Cada pieza empieza con una lámina plana que se lleva al volumen durante días, se seca bajo paño y se cuece dos veces. Las aberturas no son decorativas — son por donde respira la escultura.",
      seeWork: "Ver la obra →",
      getInTouch: "Contactar",
      metaTitle: "Sobre — Vania Suisola",
      metaDesc:
        "Vania Suisola es una artista cerámica nacida en Florencia y afincada en Alicante. Formada en EASDA, su obra escultórica ha sido seleccionada para la Bienal Internacional de Manises.",
      ogDesc:
        "De Florencia a Alicante: una escultora que trabaja formas cerámicas orgánicas hechas a mano.",
    },
    work: {
      eyebrow: "Obra seleccionada · 2023 — 2024",
      h1a: "La colección de",
      h1b: " formas huecas.",
      intro:
        "Una serie creciente de esculturas en loza modeladas a mano. Cada obra es única, construida sin moldes y acabada en blanco mate sin esmaltar.",
      items: [
        {
          note: "Seleccionada — Bienal Internacional de Cerámica, Manises 2024.",
        },
        { note: "Construcción a partir de una sola lámina, doble cocción." },
        { note: "Los vacíos tratados como arquitectura, no como ausencia." },
        {
          note: "Sobre el aliento de la forma — un estudio sobre la contención.",
        },
        { note: "Borde, luz, umbral." },
      ],
      ctaEyebrow: "Adquisiciones y encargos",
      ctaA: "Obras disponibles y piezas por encargo",
      ctaB: " con cita previa.",
      enquire: "Consultar →",
      metaTitle: "Obra — Vania Suisola",
      metaDesc:
        "Esculturas cerámicas seleccionadas de Vania Suisola — loza modelada a mano, incluida la pieza seleccionada para la Bienal Internacional de Manises.",
      ogDesc:
        "Esculturas cerámicas seleccionadas, 2023–2024. Loza, hechas a mano.",
      materials: { earthenware: "Loza", earthenware2: "Loza" },
    },
    contact: {
      eyebrow: "Contacto",
      h1a: "Visitas al estudio, exposiciones y",
      h1b: " obra por encargo.",
      studio: "Estudio",
      studioPlace: "Alicante, España",
      byAppointment: "Solo con cita previa.",
      email: "Email",
      elsewhere: "En otros lugares",
      enquiriesAbout: "Consultas sobre",
      enquiries: [
        "— Adquisición de obras disponibles",
        "— Esculturas por encargo",
        "— Exposiciones y representación en galería",
        "— Prensa, entrevistas y visitas al estudio",
      ],
      writeMessage: "Escribir un mensaje",
      name: "Nombre",
      emailLabel: "Email",
      subject: "Asunto",
      message: "Mensaje",
      placeholder: "Cuéntale a Vania un poco sobre tu consulta…",
      send: "Enviar mensaje →",
      thankYou: "Gracias.",
      received: "Tu mensaje ha sido recibido. Vania responderá personalmente.",
      metaTitle: "Contacto — Vania Suisola",
      metaDesc:
        "Contacta con la artista cerámica Vania Suisola para visitas al estudio, exposiciones, adquisiciones y encargos. Con sede en Alicante, España.",
      ogDesc:
        "Visitas al estudio, adquisiciones y encargos — con cita previa en Alicante.",
    },
    footer: {
      tagline: "Escultura Cerámica · Alicante",
      studioVisits: "Visitas al estudio y obra por encargo con cita previa.",
      cities: "Florencia — Alicante",
      instagram: "Instagram ↗",
      getInTouch: "Contactar ↗",
      rights: "© {year} Vania Suisola",
      worksIn: "Todas las obras en loza",
    },
    notFound: {
      eyebrow: "Perdido en el estudio",
      title: "404",
      subtitle: "Esta página no existe",
      body: "La pieza que buscas puede haberse movido — o no haberse cocido nunca.",
      home: "Volver al inicio",
    },
  },

  it: {
    nav: { about: "Chi sono", work: "Opere", contact: "Contatti" },
    tagline: "Scultura Ceramica",
    home: {
      eyebrow: "Firenze — Alicante · Formazione EASDA",
      h1a: "Forme che",
      h1b: "respirano",
      h1c: "nell'argilla.",
      intro:
        "— terracotta modellata a mano che traccia l'architettura silenziosa della crescita, del gesto e del vuoto.",
      introName: "L'opera scultorea di",
      cta1: "Vedi le opere",
      cta2: "Sull'artista",
      cornerNote: "Selezionata · Biennale Manises 2026",
      statementLabel: "Statement",
      statementA: "Lavoro l'argilla finché dimentica di essere stata piatta —",
      statementB: " finché impara a trattenere il proprio respiro.",
      statementBody:
        "Ogni pezzo nasce da un unico foglio piegato, forato e unito a mano. Il vuoto è deliberato quanto la parete: la luce lo attraversa, le ombre si raccolgono all'interno, e la forma acquisisce il ritmo di qualcosa di vivo.",
      selectedWorks: "Opere selezionate",
      recentPieces: "Pezzi",
      recentEm: "recenti",
      allWork: "Tutte le opere →",
      viewAll: "Vedi tutte le opere →",
      earthenware: "Terracotta · 2024",
      earthenware2: "Terracotta · 2024",
      recogSelected: "Selezionata",
      recogTrained: "Formazione",
      recogOrigin: "Origine",
      bienal: "Bienal Internacional de Cerámica",
      manises: "Manises 2026",
      easdaLoc: "Alicante",
      florence: "Firenze, Italia",
      workingSpain: "lavora in Spagna",
      metaTitle: "Vania Suisola — Scultura Ceramica",
      metaDesc:
        "Sculture ceramiche modellate a mano da Vania Suisola. Forme organiche in terracotta, tra Firenze e Alicante.",
      ogDesc:
        "Selezionata per la Bienal Internacional de Cerámica de Manises. Portfolio di forme ceramiche organiche fatte a mano.",
    },
    about: {
      eyebrow: "Sull'artista",
      h1a: "Una pratica silenziosa tra",
      h1b: " due sponde.",
      leadA: "Vania Suisola è una scultrice ceramista nata a",
      leadFlorence: " Firenze, Italia",
      leadAnd: ", e residente ad",
      leadAlicante: " Alicante, Spagna",
      leadEnd: ", dove vive e lavora da molti anni.",
      p1: "La sua pratica nasce da un precoce amore per il disegno e la materia — lo stesso istinto che, anni dopo, l'ha portata alla formazione ufficiale in ceramica artistica all'",
      easda: "EASDA",
      p2: "A partire da un unico foglio di argilla, piega, unisce e fora strutture che sembrano cresciute più che costruite: gusci, gabbie toraciche, cellule, tutta l'architettura morbida del vivente. Ogni opera è interamente modellata a mano, cotta lentamente e rifinita in bianchi opachi di terracotta che assorbono la luce.",
      p3a: "Il suo pezzo più recente è stato selezionato per la",
      bienalAbout: " Bienal Internacional de Cerámica de Manises",
      p3b: ", Valencia — una delle piattaforme ceramiche più rispettate in Spagna.",
      studioCaption: "In studio, Alicante",
      trajectoryEyebrow: "Percorso",
      milestonesA: "Tappe",
      milestonesB: "selezionate",
      timeline: [
        {
          year: "2024",
          title: "Bienal Internacional de Cerámica de Manises",
          place: "Valencia, Spagna",
          note: "Opera scultorea recente selezionata per la biennale internazionale.",
        },
        {
          year: "2023",
          title: "Diploma — Ceramica Artistica",
          place: "EASDA, Alicante",
          note: "Studi superiori in ceramica artistica, con focus sulla forma scultorea modellata a mano.",
        },
        {
          year: "2020",
          title: "Studio ad Alicante",
          place: "Spagna",
          note: "Pratica indipendente in terracotta.",
        },
        {
          year: "—",
          title: "Nata a Firenze",
          place: "Italia",
          note: "Prima formazione tra la tradizione artigianale toscana e la luce mediterranea.",
        },
      ],
      materialsEyebrow: "Materiali",
      materialsA: "Terracotta,",
      materialsB: "e pazienza.",
      materialsBody:
        "Vania lavora con paste ad alta cottura che permettono pareti tirate sottili senza perdere struttura. La finitura bianca opaca non è smalto fine a sé stesso — serve la forma, l'ombra e il vuoto.",
      processEyebrow: "Processo",
      processA: "Modellato a mano,",
      processB: "lentamente.",
      processBody:
        "Niente stampi, niente tornio. Ogni pezzo nasce da un foglio piatto portato al volume nell'arco di giorni, asciugato sotto telo e cotto due volte. Le aperture non sono mai decorative — sono il modo in cui la scultura respira.",
      seeWork: "Vedi le opere →",
      getInTouch: "Contatta",
      metaTitle: "Chi sono — Vania Suisola",
      metaDesc:
        "Vania Suisola è un'artista ceramista nata a Firenze e residente ad Alicante. Formata all'EASDA, la sua opera scultorea è stata selezionata per la Bienal Internacional de Manises.",
      ogDesc:
        "Da Firenze ad Alicante: una scultrice che lavora forme ceramiche organiche modellate a mano.",
    },
    work: {
      eyebrow: "Opere selezionate · 2023 — 2024",
      h1a: "La collezione delle",
      h1b: " forme cave.",
      intro:
        "Una serie crescente di sculture in terracotta modellate a mano. Ogni opera è unica, costruita senza stampi e rifinita in bianco opaco non smaltato.",
      items: [
        {
          note: "Selezionata — Bienal Internacional de Cerámica, Manises 2024.",
        },
        { note: "Costruzione da un unico foglio, doppia cottura." },
        { note: "I vuoti trattati come architettura, non come assenza." },
        { note: "Sul respiro della forma — uno studio sul contenimento." },
        { note: "Bordo, luce, soglia." },
      ],
      ctaEyebrow: "Acquisizioni e commissioni",
      ctaA: "Opere disponibili e pezzi su commissione",
      ctaB: " su appuntamento.",
      enquire: "Richiedi →",
      metaTitle: "Opere — Vania Suisola",
      metaDesc:
        "Sculture ceramiche selezionate di Vania Suisola — terracotta modellata a mano, inclusa l'opera selezionata per la Bienal Internacional de Manises.",
      ogDesc:
        "Sculture ceramiche selezionate, 2023–2024. Terracotta, fatte a mano.",
      materials: { earthenware: "Terracotta", earthenware2: "Terracotta" },
    },
    contact: {
      eyebrow: "Contatti",
      h1a: "Visite allo studio, mostre e",
      h1b: " opere su commissione.",
      studio: "Studio",
      studioPlace: "Alicante, Spagna",
      byAppointment: "Solo su appuntamento.",
      email: "Email",
      elsewhere: "Altrove",
      enquiriesAbout: "Richieste su",
      enquiries: [
        "— Acquisizione di opere disponibili",
        "— Sculture su commissione",
        "— Mostre e rappresentanza in galleria",
        "— Stampa, interviste e visite allo studio",
      ],
      writeMessage: "Scrivi un messaggio",
      name: "Nome",
      emailLabel: "Email",
      subject: "Oggetto",
      message: "Messaggio",
      placeholder: "Racconta a Vania qualcosa sulla tua richiesta…",
      send: "Invia messaggio →",
      thankYou: "Grazie.",
      received:
        "Il tuo messaggio è stato ricevuto. Vania risponderà personalmente.",
      metaTitle: "Contatti — Vania Suisola",
      metaDesc:
        "Contatta l'artista ceramista Vania Suisola per visite allo studio, mostre, acquisizioni e opere su commissione. Sede ad Alicante, Spagna.",
      ogDesc:
        "Visite allo studio, acquisizioni e commissioni — su appuntamento ad Alicante.",
    },
    footer: {
      tagline: "Scultura Ceramica · Alicante",
      studioVisits:
        "Visite allo studio e opere su commissione su appuntamento.",
      cities: "Firenze — Alicante",
      instagram: "Instagram ↗",
      getInTouch: "Contatta ↗",
      rights: "© {year} Vania Suisola",
      worksIn: "Tutte le opere in terracotta",
    },
    notFound: {
      eyebrow: "Perso nello studio",
      title: "404",
      subtitle: "Questa pagina non esiste",
      body: "Il pezzo che cerchi potrebbe essersi spostato — o non essere mai stato cotto.",
      home: "Torna alla home",
    },
  },
};

export function t(locale: Locale): Dict {
  return translations[locale];
}
