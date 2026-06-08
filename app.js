        // --- 1. BASE DE DATOS PREDETERMINADA (Mapeado exacto del Google Sheet, Medicion/Governance pesos a 1.0) ---
        const defaultCategories = {
            "Estrategia": 1.5,
            "Fit de canal": 1.25,
            "Base técnica": 1.25,
            "Modelo de operación": 1.0,
            "Medición": 1.0,
            "Governance": 1.0
        };

        const defaultQuestions = [
            // ESTRATEGIA (W: 1.5)
            { id: "q1", category: "Estrategia", text: "¿Quién dentro de la organización es el responsable de que este proyecto salga adelante?", tip: "💡 Evalúa si existe un executive sponsor con ownership real sobre la iniciativa.", value: null },
            { id: "q2", category: "Estrategia", text: "¿Tienen identificados los 2 o 3 casos de uso más importantes que quieren resolver con una solución conversacional y por qué esos?", tip: "💡 Evalúa si hay una apuesta estratégica clara o si la iniciativa todavía está en exploración.", value: null },
            { id: "q3", category: "Estrategia", text: "¿Cómo sabrían que el proyecto fue un éxito? ¿Tienen métricas de éxito definidas?", tip: "💡 Evalúa si existen KPIs concretos ligados a los casos de uso.", value: null },
            { id: "q4", category: "Estrategia", text: "¿Han estimado el retorno esperado de esta inversión?", tip: "💡 Evalúa si existe un modelo de ROI, aunque sea inicial.", value: null },
            { id: "q5", category: "Estrategia", text: "¿Priorizan los casos de uso con base en una matriz de impacto (alto impacto y baja complejidad)?", tip: "💡 Evalúa si existe una metodología clara para seleccionar qué automatizar primero.", value: null },
            { id: "q6", category: "Estrategia", text: "¿Tienen claridad sobre el rol que puede jugar una solución conversacional dentro del ecosistema de su negocio?", tip: "💡 Evalúa si la solución se integra como un pilar estratégico o como un canal aislado.", value: null },
            { id: "q7", category: "Estrategia", text: "¿Existe alineación interna entre TI, Ventas y Operaciones sobre el alcance de este chatbot?", tip: "💡 Evalúa si los líderes de departamento comparten objetivos comunes para evitar fricciones.", value: null },
            
            // FIT DE CANAL (W: 1.25)
            { id: "q8", category: "Fit de canal", text: "¿Hay aceptación de uso de WhatsApp como herramienta de comunicación desde la perspectiva de sus clientes finales?", tip: "💡 Evalúa si el canal preferido de los usuarios coincide con la solución propuesta.", value: null },
            { id: "q9", category: "Fit de canal", text: "¿Saben qué interacciones deben ser automatizadas, cuáles asistidas por agentes y cuáles manuales?", tip: "💡 Evalúa si tienen claro el límite de la automatización y los puntos de transferencia humana.", value: null },
            { id: "q10", category: "Fit de canal", text: "¿El diseño del flujo conversacional está pensado en la experiencia de usuario y resolución rápida?", tip: "💡 Evalúa si el bot está diseñado para simplificar la vida del usuario o solo para ahorrar costes.", value: null },
            
            // BASE TÉCNICA (W: 1.25)
            { id: "q11", category: "Base técnica", text: "¿Cuentan con algún sistema estructurado de manejo de datos de clientes (CRM, ERP, etc.)?", tip: "💡 Evalúa si existe un repositorio de información listo para ser consultado.", value: null },
            { id: "q12", category: "Base técnica", text: "¿Tienen un equipo o persona encargada de IT que sea owner de todo lo relacionado a sistemas, APIs y arquitectura?", tip: "💡 Evalúa si existe ownership técnico interno para sostener el proyecto.", value: null },
            { id: "q13", category: "Base técnica", text: "¿Pueden conectar sus sistemas actuales con herramientas externas mediante APIs?", tip: "💡 Evalúa si la infraestructura permite el intercambio de información necesario para que la solución funcione.", value: null },
            
            // MODELO DE OPERACIÓN (W: 1.0)
            { id: "q14", category: "Modelo de operación", text: "¿Tienen definido cómo van a garantizar la calidad de las respuestas y los tiempos de atención para los usuarios finales?", tip: "💡 Evalúa si existe un modelo de SLAs y QA para la operación.", value: null },
            { id: "q15", category: "Modelo de operación", text: "¿Tienen un proceso o comité que revise periódicamente el desempeño de sus sistemas y herramientas digitales?", tip: "💡 Evalúa si hay una rutina de revisión de desempeño con responsables asignados.", value: null },
            
            // MEDICIÓN (W: 1.0)
            { id: "q16", category: "Medición", text: "¿Tienen un árbol de indicadores o KPI Tree que conecte los resultados del proyecto con los objetivos del negocio?", tip: "💡 Evalúa si existe una estructura de leading y lagging indicators para monitorear el desempeño.", value: null },
            { id: "q17", category: "Medición", text: "¿Tienen una fecha límite para tener la solución en vivo?", tip: "💡 Evalúa si hay urgencia real y un horizonte de tiempo definido para el lanzamiento.", value: null },
            
            // GOVERNANCE (W: 1.0)
            { id: "q18", category: "Governance", text: "¿Tienen políticas definidas sobre cómo puede y no puede usarse la IA en interacciones con clientes?", tip: "💡 Evalúa si existen lineamientos claros para el uso de IA customer-facing.", value: null },
            { id: "q19", category: "Governance", text: "¿Quién dentro de la organización sería responsable de monitorear y corregir la solución once esté en producción?", tip: "💡 Evalúa si hay ownership y accountability definidos para la operación post-lanzamiento.", value: null }
        ];

        const defaultBanco = {
            "General": {
                low: "Estado: Construir bases\n\nLa organización todavía no está lista para lanzar una solución conversacional. La oportunidad existe, pero antes de avanzar hay trabajo previo que hacer.\n\n¿Qué significa esto?\nNo significa que no sea posible. Significa que hoy existe un riesgo real de lanzar algo sin los cimientos necesarios para que funcione, y eso tiene un costo alto.\n\nRecomendación:\nAntes de pensar en implementación, vale la pena detenerse a construir las bases: estrategia clara, operación definida, tecnología lista y forma de medir el éxito.\n\nQué habilita:\nTomar una decisión informada sobre si el proyecto debe avanzar, en qué orden y con qué expectativas reales.\n\nRiesgo de no hacerlo:\nInvertir tiempo y dinero en una solución que no tiene las condiciones para generar resultados sostenibles.",
                med: "Estado: Base sólida, pero con brechas\n\nLa organización tiene condiciones favorables para avanzar, pero hay brechas que podrían afectar la velocidad de implementación, la experiencia del usuario final o la capacidad de escalar.\n\n¿Qué significa esto?\nQue sí existe una oportunidad real, pero conviene cerrar ciertos puntos antes de avanzar. La recomendación no es frenar el proyecto, sino enfocarse en lo que más puede impactar el éxito.\n\nRecomendación:\nSe sugiere priorizar el lanzamiento de un piloto o beta controlado enfocado en resolver las interacciones de mayor impacto y menor fricción, mientras en paralelo se diseña el plan para resolver las brechas identificadas.\n\nQué habilita:\nDemostrar valor rápido al negocio, capturar feedback directo de usuarios reales y mitigar riesgos técnicos con menor fricción de entrada.\n\nRiesgo de no hacerlo:\nIntentar implementar un alcance demasiado amplio sin resolver las brechas críticas de operación o tecnología puede generar frustración en el usuario final.",
                high: "Estado: Listo para despegar\n\nLa organización se encuentra en un estado óptimo de preparación. Cuenta con la estrategia comercial alineada, infraestructura técnica robusta y un modelo de operaciones preparado para lanzar y escalar con éxito una solución de IA conversacional.\n\n¿Qué significa esto?\nQue están dadas todas las condiciones para proceder con una implementación avanzada. Hay bajo riesgo de descarrilamiento técnico o desalineación organizativa. El prospecto es un candidato de alta prioridad (\"Enterprise Ready\").\n\nRecomendación:\nIniciar la fase de desarrollo e implementación a escala completa del caso de uso estratégico prioritario, planificando integraciones profundas con los sistemas centrales y agendando talleres para definir la hoja de ruta de escalamiento omnicanal.\n\nQué habilita:\nGarantiza una captura de valor máxima y acelerada, automatiza operaciones críticas de soporte y ventas de forma segura y consolida el liderazgo digital del cliente en su industria.\n\nRiesgo de no hacerlo:\nPostergar la iniciativa puede provocar la pérdida de tracción interna, enfriamiento del patrocinio de la alta dirección y otorgar una ventaja competitiva clave a otros competidores que avancen antes."
            },
            "Estrategia": {
                low: "Resumen:\nLa falta de alineación estratégica o de ownership claro limita severamente la tracción interna del proyecto de inteligencia artificial conversacional.\n\nRecomendación:\nFacilitar una mesa ejecutiva para formalizar al líder oficial del proyecto, documentar las metas operativas y priorizar un solo caso de uso crítico.",
                med: "Resumen:\nExiste interés y patrocinio en la organización, pero todavía hace falta traducir las metas de negocio en un modelo de ROI de alta certeza.\n\nRecomendación:\nModelar una calculadora de impacto financiero enfocada en la reducción del costo por contacto y la eficiencia de agentes.",
                high: "Resumen:\nEstrategia y liderazgo robustos. La iniciativa cuenta con un champion asignado y casos de uso perfectamente alineados a metas de la alta dirección.\n\nRecomendación:\nApalancar este patrocinio ejecutivo para alinear rápidamente los recursos técnicos de TI e iniciar el codiseño del plan de lanzamiento."
            },
            "Fit de canal": {
                low: "Resumen:\nNo se cuenta con una segmentación clara de interacciones ni se ha validado si los usuarios prefieren interactuar a través de canales de mensajería.\n\nRecomendación:\nAnalizar el historial de tickets de atención del cliente para identificar los temas recurrentes y validar la viabilidad técnica del bot.",
                med: "Resumen:\nEl canal (ej. WhatsApp) es altamente aceptado, pero todavía falta formalizar el flujo de la conversación y las reglas de transferencia humana.\n\nRecomendación:\nDiagramar los árboles de decisión conversacionales y definir en qué punto exacto se transferirá la atención de manera transparente a un agente.",
                high: "Resumen:\nCanal validado y procesos conversacionales perfectamente estructurados. El cliente entiende los límites de la IA y el rol del equipo humano.\n\nRecomendación:\nImplementar integraciones ricas (como botones, listas interactivas y carruseles) para potenciar la tasa de resolución automática."
            },
            "Base técnica": {
                low: "Resumen:\nLa ausencia de un owner de sistemas e infraestructura técnica imposibilita la viabilidad de integraciones para el chatbot.\n\nRecomendación:\nEstablecer un rol técnico líder y auditar el catálogo de software interno para definir qué plataformas centrales cuentan con APIs.",
                med: "Resumen:\nCuentan con un CRM o base de datos centralizada, pero la conectividad para que el chatbot interactúe en tiempo real aún no está habilitada.\n\nRecomendación:\nConstruir una arquitectura intermedia o mapear los endpoints mínimos para consultas dinámicas básicas (ej. estado de pedidos).",
                high: "Resumen:\nInfraestructura digital moderna con APIs documentadas y personal técnico calificado listo para iniciar conexiones de datos.\n\nRecomendación:\nPlanificar integraciones bidireccionales profundas con el CRM o ERP de la organización para que la IA complete flujos transaccionales."
            },
            "Modelo de operación": {
                low: "Resumen:\nNo existe ningún plan para garantizar la calidad del bot ni SLAs de atención para los casos que se transfieran a humanos.\n\nRecomendación:\nDefinir tiempos límite de respuesta (SLA) para los agentes humanos cuando reciban chats transferidos por el chatbot.",
                med: "Resumen:\nSe cuenta con personal operativo para atender el chat, pero no hay un proceso estructurado para auditar la calidad de las respuestas de la IA.\n\nRecomendación:\nEstablecer un rol de revisor de conversaciones semanal que verifique que la IA está respondiendo correctamente de acuerdo con la documentación.",
                high: "Resumen:\nModelo operativo sólido, con SLAs rigurosos de atención, QA y rutinas de mejora continua integradas en el flujo de trabajo.\n\nRecomendación:\nAutomatizar la recolección de encuestas de satisfacción (CSAT) al final de cada conversación para retroalimentar la base de conocimientos."
            },
            "Medición": {
                low: "Resumen:\nSin métricas de éxito (KPIs) definidas y con fechas de lanzamiento ambiguas o poco realistas.\n\nRecomendación:\nFijar una fecha de lanzamiento piloto (MVP) realista a 30 días y seleccionar 2 KPIs básicos (tasa de desvío y satisfacción del cliente).",
                med: "Resumen:\nExisten algunos indicadores operativos aislados, pero no están conectados directamente con las metas financieras o de negocio.\n\nRecomendación:\nConstruir un tablero sencillo que muestre cómo la automatización reduce el costo por contacto y ayuda a liberar horas/hombre del equipo.",
                high: "Resumen:\nSe cuenta con un KPI Tree estructurado y un horizonte de tiempo estricto y priorizado para el despliegue del bot.\n\nRecomendación:\nIntegrar las métricas de rendimiento conversacionales directamente en los tableros de control ejecutivos del negocio."
            },
            "Governance": {
                low: "Resumen:\nLa falta de políticas de seguridad ni lineamientos éticos sobre cómo debe interactuar la IA con clientes, elevando el riesgo de incidentes.\n\nRecomendación:\nCrear un documento de 'Límites de la IA' que de las pautas necesarias para mitigar riesgos.",
                med: "Resumen:\nHay nociones de seguridad, pero falta formalizar quién se hará responsable y rendirá cuentas (accountability) si el bot falla.\n\nRecomendación:\nNombrar formalmente a un supervisor operativo como responsable final de apagar, corregir o auditar la solución ante cualquier incidente.",
                high: "Resumen:\nMarco de gobernanza excelente, con políticas claras de uso de IA customer-facing, monitoreo en tiempo real y procesos de escalamiento definidos.\n\nRecomendación:\nRealizar auditorías de seguridad trimestrales para garantizar que no haya fugas de información ni alucinaciones en el modelo."
            }
        };

        // --- 2. VARIABLES DE ESTADO ---
        let questions = JSON.parse(JSON.stringify(defaultQuestions));
        let categories = { ...defaultCategories };
        let banco = JSON.parse(JSON.stringify(defaultBanco));
        
        let activePillar = "Estrategia";
        let activeResultTab = "diagnostico";

        // --- 3. PARSEO DINÁMICO DE CSVs ---
        function parseCSV(text) {
            let firstLine = text.split('\n')[0];
            let separator = ',';
            let commaCount = (firstLine.match(/,/g) || []).length;
            let semiCount = (firstLine.match(/;/g) || []).length;
            if (semiCount > commaCount) {
                separator = ';';
            }
            
            let lines = [];
            let row = [""];
            let inQuotes = false;
            for (let i = 0; i < text.length; i++) {
                let c = text[i];
                let next = text[i+1];
                if (c === '"') {
                    if (inQuotes && next === '"') {
                        row[row.length - 1] += '"';
                        i++;
                    } else {
                        inQuotes = !inQuotes;
                    }
                } else if (c === separator && !inQuotes) {
                    row.push('');
                } else if ((c === '\r' || c === '\n') && !inQuotes) {
                    if (c === '\r' && next === '\n') { i++; }
                    lines.push(row);
                    row = [''];
                } else {
                    row[row.length - 1] += c;
                }
            }
            if (row.length > 1 || row[0] !== '') {
                lines.push(row);
            }
            return lines;
        }

        function loadV2CSV(csvText) {
            let rows = parseCSV(csvText);
            let parsedQuestions = [];
            let parsedCategories = {};
            
            rows.forEach((row, i) => {
                if (i === 0 || row.length < 2) return;
                
                let cat = row[0] ? row[0].trim() : "";
                let crit = row[1] ? row[1].trim() : "";
                if (cat && crit && cat !== "Categoria" && cat !== "Levantamiento") {
                    let parts = crit.split('💡');
                    let text = parts[0].trim();
                    let tip = parts[1] ? '💡 ' + parts[1].trim() : '';
                    
                    // Normalizar nombres de categorías de manera ortográfica durante importación
                    if (normalizeKey(cat) === "basetecnica") cat = "Base técnica";
                    if (normalizeKey(cat) === "medicion") cat = "Medición";
                    if (normalizeKey(cat) === "modelodeoperacion") cat = "Modelo de operación";

                    parsedQuestions.push({
                        id: "q" + (parsedQuestions.length + 1),
                        category: cat,
                        text: text,
                        tip: tip,
                        value: null
                    });
                }
                
                if (row.length >= 7) {
                    let summaryCat = row[4] ? row[4].trim() : "";
                    let weightStr = row[6] ? row[6].trim() : "";
                    if (summaryCat && weightStr && summaryCat !== "Categoria" && summaryCat !== "Calificacion") {
                        let weightVal = parseFloat(weightStr.replace(',', '.'));
                        if (!isNaN(weightVal)) {
                            // Normalizar clave de categoría
                            if (normalizeKey(summaryCat) === "basetecnica") summaryCat = "Base técnica";
                            if (normalizeKey(summaryCat) === "medicion") summaryCat = "Medición";
                            if (normalizeKey(summaryCat) === "modelodeoperacion") summaryCat = "Modelo de operación";
                            parsedCategories[summaryCat] = weightVal;
                        }
                    }
                }
            });
            
            return { questions: parsedQuestions, categories: parsedCategories };
        }

        function loadBancoCSV(csvText) {
            let rows = parseCSV(csvText);
            let parsedBanco = {};
            
            rows.forEach((row, i) => {
                if (i === 0 || row.length < 4) return;
                let key = row[0] ? row[0].trim() : "";
                if (key && key !== "Categoria") {
                    // Normalizar clave del banco de respuestas
                    if (normalizeKey(key) === "basetecnica") key = "Base técnica";
                    if (normalizeKey(key) === "medicion") key = "Medición";
                    if (normalizeKey(key) === "modelodeoperacion") key = "Modelo de operación";

                    parsedBanco[key] = {
                        low: row[1] ? row[1].trim() : "",
                        med: row[2] ? row[2].trim() : "",
                        high: row[3] ? row[3].trim() : ""
                    };
                }
            });
            
            return parsedBanco;
        }

        // --- 4. CARGA DE DATOS AUTOMÁTICA O MANUAL ---
        async function tryAutoFetch() {
            try {
                const v2Response = await fetch('JOA V1 - Readiness Assesment  - Rediness Assesment V2.csv');
                const bancoResponse = await fetch('JOA V1 - Readiness Assesment  - Banco de respuestas V1.csv');
                
                if (v2Response.ok && bancoResponse.ok) {
                    const v2Text = await v2Response.text();
                    const bancoText = await bancoResponse.text();
                    
                    applyData(v2Text, bancoText);
                    document.getElementById('dataSourceIndicator').innerHTML = `
                        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            CSV Sincronizados (Server)
                        </span>`;
                    showToast("Archivos de Google Sheets sincronizados de forma automática.");
                } else {
                    loadDefaultData();
                }
            } catch (e) {
                loadDefaultData();
            }
        }

        function loadDefaultData() {
            questions = JSON.parse(JSON.stringify(defaultQuestions));
            categories = { ...defaultCategories };
            banco = JSON.parse(JSON.stringify(defaultBanco));
            renderPillars();
            renderQuestions();
            updateResults();
        }

        function restoreDefaultData() {
            loadDefaultData();
            document.getElementById('dataSourceIndicator').innerHTML = `
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                    Datos Predeterminados
                </span>`;
            toggleCSVModal();
            showToast("Bases y preguntas predeterminadas restauradas.");
        }

        function applyData(v2CsvText, bancoCsvText) {
            try {
                let v2 = loadV2CSV(v2CsvText);
                let b = loadBancoCSV(bancoCsvText);
                
                if (v2.questions.length > 0) {
                    questions = v2.questions;
                }
                if (Object.keys(v2.categories).length > 0) {
                    categories = v2.categories;
                } else {
                    categories = { ...defaultCategories };
                }
                if (Object.keys(b).length > 0) {
                    banco = b;
                }
                
                let firstCat = Object.keys(categories)[0] || "Estrategia";
                if (!categories[activePillar]) {
                    activePillar = firstCat;
                }

                renderPillars();
                renderQuestions();
                updateResults();
            } catch (err) {
                showToast("Error procesando los CSVs. Verifica el formato.");
                console.error(err);
            }
        }

        function applyUploadedCSVs() {
            let questionsInput = document.getElementById('questionsCSVInput');
            let bancoInput = document.getElementById('bancoCSVInput');
            
            let qFile = questionsInput.files[0];
            let bFile = bancoInput.files[0];
            
            if (!qFile && !bFile) {
                showToast("Por favor selecciona al menos un archivo CSV.");
                return;
            }
            
            let qPromise = qFile ? readFileText(qFile) : Promise.resolve(null);
            let bPromise = bFile ? readFileText(bFile) : Promise.resolve(null);
            
            Promise.all([qPromise, bPromise]).then(([qText, bText]) => {
                let finalQText = qText || localStorage.getItem('lastQCSV') || '';
                let finalBText = bText || localStorage.getItem('lastBCSV') || '';
                
                if (qText) localStorage.setItem('lastQCSV', qText);
                if (bText) localStorage.setItem('lastBCSV', bText);
                
                applyData(finalQText, finalBText);
                
                document.getElementById('dataSourceIndicator').innerHTML = `
                    <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-violet-100 text-violet-800 border border-violet-200">
                        CSV Cargado por BDR
                    </span>`;
                
                toggleCSVModal();
                showToast("¡Configuración de CSVs aplicada con éxito!");
            }).catch(err => {
                showToast("Error al leer los archivos.");
            });
        }

        function readFileText(file) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.onerror = (e) => reject(e);
                reader.readAsText(file, 'utf-8');
            });
        }

        // --- 5. RENDERIZADO DE INTERFAZ (DOM) ---
        function renderPillars() {
            let container = document.getElementById('pillarTabsContainer');
            container.innerHTML = "";
            
            Object.keys(categories).forEach((cat, index) => {
                let isActive = cat === activePillar;
                let btn = document.createElement('button');
                btn.onclick = () => selectPillar(cat);
                btn.id = `btn-pillar-${normalizeKey(cat)}`;
                btn.className = `pillar-tab px-4 py-2.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 ${
                    isActive 
                    ? "bg-blip-blue text-white shadow-md shadow-blip-blue/20" 
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`;
                btn.innerHTML = `📂 ${cat}`;
                container.appendChild(btn);
            });
        }

        function selectPillar(catName) {
            activePillar = catName;
            document.querySelectorAll('.pillar-tab').forEach(btn => {
                btn.className = "pillar-tab px-4 py-2.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-white text-slate-600 border border-slate-200 hover:bg-slate-100";
            });
            let activeBtn = document.getElementById(`btn-pillar-${normalizeKey(catName)}`);
            if (activeBtn) {
                activeBtn.className = "pillar-tab px-4 py-2.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 bg-blip-blue text-white shadow-md shadow-blip-blue/20";
            }
            renderQuestions();
        }

        function renderQuestions() {
            let container = document.getElementById('questionsContainer');
            container.innerHTML = "";
            
            let pillarQuestions = questions.filter(q => normalizeKey(q.category) === normalizeKey(activePillar));
            
            if (pillarQuestions.length === 0) {
                container.innerHTML = `
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-400 text-xs">
                        No hay preguntas mapeadas para esta sección. Verifica la importación de tu CSV.
                    </div>`;
                return;
            }

            pillarQuestions.forEach((q, idx) => {
                let globalIdx = questions.findIndex(item => item.id === q.id) + 1;
                
                let card = document.createElement('div');
                card.className = "bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4 transition-all duration-200 hover:border-slate-300";
                
                let answersHTML = "";
                const options = [
                    { val: 0, title: "0 - No existe", desc: "No existe responsable o plan claro" },
                    { val: 1, title: "1 - Existe pero con poca confianza", desc: "Hay una idea pero no está bien plasmada" },
                    { val: 2, title: "2 - Alta confianza", desc: "Existe de forma documentada, oficial y con responsables." }
                ];

                options.forEach(opt => {
                    let isChecked = q.value === opt.val;
                    let borderClass = isChecked 
                        ? (opt.val === 2 ? "border-blip-teal bg-blip-teal/10 ring-1 ring-blip-teal shadow-sm" : (opt.val === 1 ? "border-amber-500 bg-amber-50/10 ring-1 ring-amber-500 shadow-sm" : "border-rose-500 bg-rose-50/10 ring-1 ring-rose-500 shadow-sm"))
                        : "border-slate-200 hover:bg-slate-50";

                    answersHTML += `
                        <label class="relative flex p-3 rounded-xl border ${borderClass} cursor-pointer transition">
                            <input type="radio" name="radio-${q.id}" value="${opt.val}" ${isChecked ? 'checked' : ''} 
                                   onclick="selectAnswer('${q.id}', ${opt.val})" 
                                   class="mt-1 h-3.5 w-3.5 text-brand-600 border-slate-300 focus:ring-brand-600">
                            <span class="ml-3">
                                <span class="block text-xs font-bold text-slate-800">${opt.title}</span>
                                <span class="block text-[10px] text-slate-500 mt-0.5 leading-relaxed">${opt.desc}</span>
                            </span>
                        </label>`;
                });

                card.innerHTML = `
                    <div class="flex items-start justify-between">
                        <span class="text-[9px] font-black text-blip-blue uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded">PREGUNTA ${globalIdx} de ${questions.length}</span>
                        <div class="flex items-center gap-1">
                            ${q.value !== null ? '<span class="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5">✓ Contestada</span>' : '<span class="text-[10px] text-slate-400 font-semibold">• Pendiente</span>'}
                        </div>
                    </div>
                    <h3 class="text-sm font-extrabold text-blip-navy">${q.text}</h3>
                    
                    ${q.tip ? `
                    <div class="bg-indigo-50/40 rounded-xl p-3 border border-indigo-100/50 text-[11px] text-indigo-950 flex gap-2">
                        <span>💡</span>
                        <span>${q.tip.replace('💡', '')}</span>
                    </div>` : ''}

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                        ${answersHTML}
                    </div>`;
                
                container.appendChild(card);
            });
        }

        // --- 6. CÁLCULO DE MÉTRICAS Y SCORE PONDERADO ---
        function selectAnswer(qId, val) {
            let q = questions.find(item => item.id === qId);
            if (q) {
                q.value = val;
            }
            updateProgressBar();
            updateResults();
            renderQuestions();
        }

        function updateProgressBar() {
            let answeredCount = questions.filter(q => q.value !== null).length;
            let percent = Math.round((answeredCount / questions.length) * 100);
            document.getElementById('progressBar').style.width = `${percent}%`;
            document.getElementById('progressPercent').innerText = `${percent}%`;
        }

        function normalizeKey(str) {
            if (!str) return "";
            return str.toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/[^a-z0-9]/g, "")
                      .trim();
        }

        function computeScores() {
            let categoryMetrics = {};
            
            Object.keys(categories).forEach(cat => {
                categoryMetrics[normalizeKey(cat)] = {
                    name: cat,
                    sum: 0,
                    max: 0,
                    count: 0,
                    weight: categories[cat]
                };
            });

            questions.forEach(q => {
                let normCat = normalizeKey(q.category);
                if (!categoryMetrics[normCat]) {
                    categoryMetrics[normCat] = {
                        name: q.category,
                        sum: 0,
                        max: 0,
                        count: 0,
                        weight: 1.0
                    };
                }
                
                categoryMetrics[normCat].count++;
                categoryMetrics[normCat].max += 2;
                
                if (q.value !== null) {
                    categoryMetrics[normCat].sum += q.value;
                }
            });

            let totalWeightedScore = 0;
            let totalMaxWeightedScore = 0;

            Object.keys(categoryMetrics).forEach(k => {
                let m = categoryMetrics[k];
                m.percentage = m.max > 0 ? Math.round((m.sum / m.max) * 100) : 0;
                
                totalWeightedScore += m.sum * m.weight;
                totalMaxWeightedScore += m.max * m.weight;
            });

            let overallPercentage = totalMaxWeightedScore > 0 ? Math.round((totalWeightedScore / totalMaxWeightedScore) * 100) : 0;

            return {
                categoryMetrics,
                overallPercentage
            };
        }

        function getBancoFeedback(key, pct) {
            let tier = "low";
            if (pct >= 80) tier = "high";
            else if (pct >= 50) tier = "med";
            
            let matchingKey = Object.keys(banco).find(bKey => normalizeKey(bKey) === normalizeKey(key));
            if (matchingKey && banco[matchingKey]) {
                return banco[matchingKey][tier] || "Sin feedback registrado para este rango.";
            }
            return `No hay feedback disponible para ${key} (${pct}%).`;
        }

        function updateResults() {
            let data = computeScores();
            let overallPct = data.overallPercentage;

            // 1. Actualizar Anillo de Progreso y Display
            document.getElementById('scoreDisplay').innerText = `${overallPct}%`;
            document.getElementById('print-overall-score').innerText = `${overallPct}%`;
            
            let circle = document.getElementById('scoreCircle');
            let offset = 301.6 - (overallPct / 100) * 301.6;
            circle.style.strokeDashoffset = offset;

            // 2. Actualizar Estado de Madurez
            let readinessBadge = document.getElementById('readinessBadge');
            let printReadinessBadge = document.getElementById('print-readiness-badge');
            let statusText = "Espera respuestas";
            let answeredTotal = questions.filter(q => q.value !== null).length;

            if (answeredTotal === 0) {
                readinessBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-slate-500 animate-pulse"></span> <span>Responde preguntas para evaluar</span>`;
                printReadinessBadge.innerHTML = "Responda preguntas para comenzar la evaluación de madurez";
                readinessBadge.className = "mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-400";
                printReadinessBadge.className = "mt-4 px-4 py-1.5 rounded-full text-xs font-bold bg-slate-200 text-slate-700";
            } else if (overallPct >= 80) {
                statusText = "Madurez Alta, listo para avanzar";
                readinessBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-blip-teal animate-pulse"></span> <span>${statusText} (Enterprise Ready)</span>`;
                printReadinessBadge.innerHTML = `${statusText.toUpperCase()} (ENTERPRISE READY)`;
                readinessBadge.className = "mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30";
                printReadinessBadge.className = "mt-4 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200";
            } else if (overallPct >= 50) {
                statusText = "Madurez moderada, Bases sólidas con brechas";
                readinessBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span> <span>${statusText} (Lanzar MVP)</span>`;
                printReadinessBadge.innerHTML = `${statusText.toUpperCase()} (LANZAR MVP)`;
                readinessBadge.className = "mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-950 text-amber-300 border border-amber-500/30";
                printReadinessBadge.className = "mt-4 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200";
            } else {
                statusText = "Inmaduro, construir bases primero";
                readinessBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span> <span>${statusText} (No apto para lanzar)</span>`;
                printReadinessBadge.innerHTML = `${statusText.toUpperCase()} (NO APTO PARA LANZAR)`;
                readinessBadge.className = "mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-950 text-rose-300 border border-rose-500/30";
                printReadinessBadge.className = "mt-4 px-4 py-1.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200";
            }

            // 3. Renderizar Barras de Categorías (Pantalla e Impresión)
            let barsContainer = document.getElementById('pillarBarsContainer');
            let printBarsContainer = document.getElementById('print-pillar-bars');
            
            barsContainer.innerHTML = "";
            printBarsContainer.innerHTML = "";

            Object.keys(data.categoryMetrics).forEach(k => {
                let m = data.categoryMetrics[k];
                let colorClass = m.percentage >= 80 ? "bg-emerald-500" : (m.percentage >= 50 ? "bg-amber-500" : "bg-rose-500");
                let barColorPrint = m.percentage >= 80 ? "bg-emerald-500" : (m.percentage >= 50 ? "bg-amber-500" : "bg-rose-500");

                // Render barra en pantalla
                let bar = document.createElement('div');
                bar.className = "space-y-1";
                bar.innerHTML = `
                    <div class="flex justify-between text-[11px] font-bold text-slate-600">
                        <span class="truncate pr-2">${m.name} (Peso: ${m.weight})</span>
                        <span class="text-slate-900 font-black">${m.percentage}%</span>
                    </div>
                    <div class="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/40">
                        <div class="${colorClass} h-full transition-all duration-300" style="width: ${m.percentage}%"></div>
                    </div>`;
                barsContainer.appendChild(bar);

                // Render barra en versión de impresión/PDF
                let pBar = document.createElement('div');
                pBar.className = "space-y-1.5 print-card p-3 rounded-xl bg-slate-50 border border-slate-200";
                pBar.innerHTML = `
                    <div class="flex justify-between text-xs font-bold text-slate-800">
                        <span>Pilar: ${m.name} (Peso del pilar: ${m.weight})</span>
                        <span class="font-black">${m.percentage}% de preparación</span>
                    </div>
                    <div class="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div class="${barColorPrint} h-full" style="width: ${m.percentage}%"></div>
                    </div>
                    <p class="text-[10px] text-slate-500 italic font-medium mt-1">${getResumenCorto(m.name, m.percentage)}</p>`;
                printBarsContainer.appendChild(pBar);
            });

            // 4. Actualizar Textos de Feedback en Tabs de Resultados
            let generalFeedback = getBancoFeedback("General", overallPct);
            document.getElementById('diagnosticoTexto').innerText = generalFeedback;
            document.getElementById('print-diagnostico-texto').innerText = generalFeedback;

            // Tab 2: Desglose detallado por pilar
            let pilaresFeedbackContainer = document.getElementById('pilaresFeedbackContainer');
            pilaresFeedbackContainer.innerHTML = "";

            Object.keys(data.categoryMetrics).forEach(k => {
                let m = data.categoryMetrics[k];
                let pFeedback = getBancoFeedback(m.name, m.percentage);
                let bgBorderClass = m.percentage >= 80 ? "bg-emerald-50/40 border-emerald-100" : (m.percentage >= 50 ? "bg-amber-50/40 border-amber-100" : "bg-rose-50/40 border-rose-100");
                let badgeColor = m.percentage >= 80 ? "bg-emerald-100 text-emerald-800" : (m.percentage >= 50 ? "bg-amber-100 text-amber-800" : "bg-rose-100 text-rose-800");

                let item = document.createElement('div');
                item.className = `p-3.5 border rounded-xl space-y-1.5 ${bgBorderClass}`;
                item.innerHTML = `
                    <div class="flex justify-between items-center">
                        <h5 class="text-xs font-bold text-slate-900">${m.name}</h5>
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-bold ${badgeColor}">${m.percentage}% Score</span>
                    </div>
                    <div class="text-[10px] text-slate-600 whitespace-pre-wrap leading-relaxed font-medium">${pFeedback}</div>`;
                pilaresFeedbackContainer.appendChild(item);
            });

            // 5. Calcular Dinámicamente Fortalezas y Brechas para el Tab de Balanza (Pantalla e Impresión)
            let fortalezasList = document.getElementById('fortalezasList');
            let brechasList = document.getElementById('brechasList');
            let brechasModList = document.getElementById('brechasModList');
            
            let printFortalezasList = document.getElementById('print-fortalezasList');
            let printBrechasList = document.getElementById('print-brechasList');
            let printBrechasModList = document.getElementById('print-brechasModList');
            
            fortalezasList.innerHTML = "";
            brechasList.innerHTML = "";
            brechasModList.innerHTML = "";
            
            printFortalezasList.innerHTML = "";
            printBrechasList.innerHTML = "";
            printBrechasModList.innerHTML = "";

            let hasFortalezas = false;
            let hasBrechasCriticas = false;
            let hasBrechasMod = false;

            Object.keys(data.categoryMetrics).forEach(k => {
                let m = data.categoryMetrics[k];
                let li = document.createElement('li');
                li.className = "py-0.5";
                li.innerHTML = `<strong>${m.name}:</strong> ${m.percentage}% madurez. <span class="text-[11px] block text-slate-500 mt-0.5">${getResumenCorto(m.name, m.percentage)}</span>`;
                
                let pLi = document.createElement('li');
                pLi.className = "py-1 font-medium text-xs";
                pLi.innerHTML = `<strong>${m.name} (${m.percentage}%):</strong> ${getResumenCorto(m.name, m.percentage)}`;

                if (m.percentage >= 80) {
                    fortalezasList.appendChild(li);
                    printFortalezasList.appendChild(pLi);
                    hasFortalezas = true;
                } else if (m.percentage <= 49) {
                    brechasList.appendChild(li);
                    printBrechasList.appendChild(pLi);
                    hasBrechasCriticas = true;
                } else {
                    brechasModList.appendChild(li);
                    printBrechasModList.appendChild(pLi);
                    hasBrechasMod = true;
                }
            });

            if (!hasFortalezas) {
                let emptyMsg = "<p class='text-slate-400 italic'>No hay ningún pilar calificado como fortaleza (≥ 80%) todavía.</p>";
                fortalezasList.innerHTML = emptyMsg;
                printFortalezasList.innerHTML = "<li>Aún no se registran fortalezas destacadas (≥ 80%).</li>";
            }
            if (!hasBrechasCriticas) {
                let emptyMsg = "<p class='text-slate-400 italic'>¡Excelente! No se registran brechas críticas (≤ 49%) en este momento.</p>";
                brechasList.innerHTML = emptyMsg;
                printBrechasList.innerHTML = "<li>No se han detectado brechas de criticidad alta (≤ 49%).</li>";
            }
            if (!hasBrechasMod) {
                let emptyMsg = "<p class='text-slate-400 italic'>Sin brechas moderadas (50% - 79%) en este momento.</p>";
                brechasModList.innerHTML = emptyMsg;
                printBrechasModList.innerHTML = "<li>No se han detectado brechas moderadas (50% - 79%).</li>";
            }

            // 6. Generar Reporte Completo de Exportación CRM
            let bdr = document.getElementById('bdrName').value || 'Sin asignar';
            let company = document.getElementById('companyName').value || 'Prospecto sin nombre';
            let contact = document.getElementById('contactName').value || 'Sin definir';
            let website = document.getElementById('companyWebsite').value || 'Sin definir';
            let notes = document.getElementById('bdrNotes').value || 'Sin observaciones adicionales.';

            let crmText = `=== DIAGNÓSTICO DE MADUREZ Conversational AI ===\n`;
            crmText += `Fecha: ${new Date().toLocaleDateString('es-ES')} | BDR: ${bdr}\n`;
            crmText += `Prospecto: ${company} | Contacto: ${contact} (${website})\n`;
            crmText += `------------------------------------------------\n`;
            crmText += `INDICADOR GENERAL: ${overallPct}% - ${statusText.toUpperCase()}\n`;
            crmText += `Contestadas: ${answeredTotal} de ${questions.length} preguntas.\n\n`;
            crmText += `[PORCENTAJES DE PILARES PONDERADOS]\n`;
            Object.keys(data.categoryMetrics).forEach(k => {
                let m = data.categoryMetrics[k];
                crmText += `- ${m.name}: ${m.percentage}%\n`;
            });
            crmText += `\n[FORTALEZAS DETECTADAS]\n`;
            Object.keys(data.categoryMetrics).forEach(k => {
                let m = data.categoryMetrics[k];
                if (m.percentage >= 80) crmText += `- ${m.name}: ${m.percentage}% - ${getResumenCorto(m.name, m.percentage)}\n`;
            });
            crmText += `\n[BRECHAS CRÍTICAS DETECTADAS]\n`;
            Object.keys(data.categoryMetrics).forEach(k => {
                let m = data.categoryMetrics[k];
                if (m.percentage <= 49) crmText += `- ${m.name}: ${m.percentage}% - ${getResumenCorto(m.name, m.percentage)}\n`;
            });
            crmText += `\n[RESPUESTA GENERAL BANCO]\n`;
            crmText += `${generalFeedback}\n\n`;
            crmText += `[NOTAS Y DOLORES DEL CLIENTE (BDR)]\n`;
            crmText += `${notes}\n`;
            crmText += `================================================`;

            document.getElementById('crmText').innerText = crmText;

            // Actualizar metadatos en la vista de impresión
            document.getElementById('print-company-name').innerText = company;
            document.getElementById('print-contact-name').innerText = contact + (website !== 'Sin definir' ? ` (${website})` : '');
            document.getElementById('print-bdr-name').innerText = bdr;
            
            let formattedDate = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById('print-date').innerText = formattedDate;
            document.getElementById('print-footer-date').innerText = formattedDate;
            document.getElementById('print-notes-texto').innerText = notes;
        }

        function getResumenCorto(pillarName, pct) {
            let tier = pct >= 80 ? "high" : (pct >= 50 ? "med" : "low");
            let feedback = banco[pillarName] ? banco[pillarName][tier] : "";
            if (feedback.includes("Resumen:")) {
                return feedback.split("Resumen:")[1].split("Recomendación:")[0].replace(/\n/g, " ").trim();
            }
            return "Calificación registrada con " + pct + "% de cumplimiento.";
        }

        // --- 7. UTILERÍAS DE NAVEGACIÓN Y EXTRAS ---
        function switchResultTab(tabId) {
            document.querySelectorAll('.result-tab').forEach(btn => {
                btn.className = "result-tab border-b-2 border-transparent py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition";
            });
            
            let btnId = `tab-res-${tabId === 'diagnostico' ? 'diagnostico' : (tabId === 'pilares-breakdown' ? 'pilares' : (tabId === 'fortalezas-gaps' ? 'fortalezas' : 'crm'))}`;
            let targetBtn = document.getElementById(btnId);
            if (targetBtn) {
                targetBtn.className = "result-tab border-b-2 border-blip-blue py-2.5 text-xs font-black text-blip-blue transition";
            }
            
            document.querySelectorAll('.res-tab-view').forEach(view => {
                view.classList.add('hidden');
            });
            document.getElementById(`res-content-${tabId}`).classList.remove('hidden');
        }

        function toggleCSVModal() {
            let m = document.getElementById('csvModal');
            m.classList.toggle('hidden');
        }

        function triggerPDFDownload() {
            updateResults();
            window.print();
        }

        function showToast(msg) {
            let toast = document.getElementById('toast');
            let toastMsg = document.getElementById('toastMessage');
            toastMsg.innerText = msg;
            toast.className = "fixed bottom-6 right-6 transform translate-y-0 opacity-100 transition-all duration-300 z-50";
            setTimeout(() => {
                toast.className = "fixed bottom-6 right-6 transform translate-y-20 opacity-0 pointer-events-none transition-all duration-300 z-50";
            }, 3500);
        }

        function copyCRMText() {
            const preElement = document.getElementById('crmText');
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = preElement.innerText;
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            tempTextarea.setSelectionRange(0, 99999);
            
            try {
                document.execCommand('copy');
                showToast("¡Notas copiadas de forma segura! Listas para tu CRM.");
            } catch (err) {
                showToast("Fallo de copiado automático. Selecciona manualmente.");
            }
            document.body.removeChild(tempTextarea);
        }

        function resetAssessment() {
            document.getElementById('bdrName').value = '';
            document.getElementById('companyName').value = '';
            document.getElementById('contactName').value = '';
            document.getElementById('companyWebsite').value = '';
            document.getElementById('bdrNotes').value = '';

            questions.forEach(q => q.value = null);

            let firstCat = Object.keys(categories)[0] || "Estrategia";
            selectPillar(firstCat);
            
            updateProgressBar();
            updateResults();
            showToast("Test reiniciado de forma correcta.");
        }

        window.onload = function() {
            tryAutoFetch();
        };
    
