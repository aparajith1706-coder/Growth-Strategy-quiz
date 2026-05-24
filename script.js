// ============================
// QUIZ DATA
// ============================
const quizData = [
    {
        category: "JEANS MANUFACTURER",
        question: "The client wants to grow revenue by 25%. Before diving into solutions, what should be the candidate's first action?",
        options: [
            { text: "Immediately suggest expanding to new geographies", score: 10, feedback: "Jumping to expansion without confirming the scope is premature. Always validate objectives first." },
            { text: "Confirm the objective and check if there are any other goals besides revenue growth", score: 30, feedback: "Excellent! Aligning on goals ensures you don't miss hidden constraints or secondary objectives." },
            { text: "Propose launching a new product line", score: 10, feedback: "Suggesting solutions before clarifying the objective is a common pitfall in strategic consulting." },
            { text: "Start analysing the competition landscape", score: 20, feedback: "While competitive analysis is vital, it shouldn't precede the confirmation of the primary objective." }
        ]
    },
    {
        category: "JEANS MANUFACTURER",
        question: "Which three factors did the candidate ask about to understand the client better?",
        options: [
            { text: "Marketing budget, supply chain, and team size", score: 10, feedback: "These are operational details. In growth strategy, you first investigate products and market position." },
            { text: "Product categories, price segment, and competitive position of the industry", score: 30, feedback: "Correct! Understanding these structural elements is essential for diagnosing growth potential." },
            { text: "Customer demographics, distribution channels, and pricing strategy", score: 20, feedback: "Important factors, but understanding the industrial structure (B) was the candidate's priority." },
            { text: "Revenue breakdown, profit margins, and cost structure", score: 10, feedback: "These focus on profitability rather than the structural growth drivers asked for in the case." }
        ]
    },
    {
        category: "JEANS MANUFACTURER",
        question: "How can revenue per customer be increased for a jeans brand?",
        options: [
            { text: "Only by raising prices across all product lines", score: 10, feedback: "Pricing is only one lever. A better strategy involves volume and loyalty as well." },
            { text: "By increasing average order value (price hike or bulk discounts) and increasing order frequency (loyalty programs, cross-selling)", score: 30, feedback: "Correct! Revenue per customer = AOV × Order Frequency. Both levers can be pulled simultaneously." },
            { text: "By cutting costs and passing savings to customers", score: 10, feedback: "This might attract more customers, but it doesn't necessarily increase 'revenue per customer'." },
            { text: "By acquiring competitor brands", score: 20, feedback: "Acquisition increases total revenue, but the question specifically asks for revenue per existing customer." }
        ]
    },
    {
        category: "JEANS MANUFACTURER",
        question: "The interviewer asks about increasing the number of customers. Which option did the candidate NOT suggest?",
        options: [
            { text: "Strengthening market share in the existing segment", score: 20, feedback: "This was actually suggested by the candidate as a primary growth path." },
            { text: "Expanding to new geographies or customer segments", score: 20, feedback: "This was also suggested by the candidate as a key growth lever." },
            { text: "Exploring entirely new product lines", score: 20, feedback: "The candidate did suggest expanding the brand's reach via new products." },
            { text: "Acquiring a direct competitor in the same segment", score: 30, feedback: "Correct! Acquisition was notably absent from the candidate's suggested framework." }
        ]
    },
    {
        category: "JEANS MANUFACTURER",
        question: "Given the client is brick-and-mortar focused and targets mid-income urban adults, what did the candidate recommend to capture new customers?",
        options: [
            { text: "Open stores in premium malls in metro cities", score: 10, feedback: "The client targets mid-income adults; premium malls might misalign with the brand's 'quality at affordable prices' DNA." },
            { text: "Diversify to e-commerce, target adjacent groups like young adults, or tap semi-urban markets", score: 30, feedback: "Correct! These options leverage the brand's existing strengths while tapping into fresh demand pools." },
            { text: "Reposition the brand to premium pricing", score: 10, feedback: "Price repositioning is risky and doesn't directly solve for 'capturing new customers' in the targeted segment." },
            { text: "Offer heavy discounts to attract budget shoppers", score: 20, feedback: "This works for volume but can erode brand equity. E-commerce expansion (B) is a more sustainable strategy." }
        ]
    },
    {
        category: "JEANS MANUFACTURER",
        question: "How would the candidate decide which new-customer option to pursue?",
        options: [
            { text: "Based on which option has the lowest cost", score: 10, feedback: "Cost is a factor, but ROI and strategic fit are far more important in consulting." },
            { text: "By evaluating product-market fit and synergy with existing operations", score: 30, feedback: "Correct! Fit and synergy ensure that the new growth is both achievable and sustainable." },
            { text: "By choosing the option with the fastest time to revenue", score: 20, feedback: "Speed is good, but without strategic synergy, it may result in short-term gains with long-term complications." },
            { text: "By following what the top competitor is doing", score: 10, feedback: "Following competitors is a reactive strategy; proactive consulting seeks unique competitive advantages." }
        ]
    },
    {
        category: "JEANS MANUFACTURER",
        question: "Why did the candidate recommend pursuing adjacent demographics in the US rather than entering China?",
        options: [
            { text: "International markets require too much capital and the client cannot afford it", score: 20, feedback: "Capital is a constraint, but the strategic decision is usually based on risk and capability alignment." },
            { text: "It is a known market, leverages existing capabilities, and product-market fit is more assured; new geographies carry a high learning curve and risk", score: 30, feedback: "Correct! Exploiting local adjacencies is generally lower risk than exploring major new geographies." },
            { text: "China has too many regulations that are difficult to navigate", score: 10, feedback: "While true, this is a specific hurdle. The candidate's main logic was based on capability and risk/reward balance." },
            { text: "The US market is larger than China in terms of jeans consumption", score: 10, feedback: "Market size alone doesn't justify the strategy; the ability to win (capabilities) is the key driver." }
        ]
    },
    {
        category: "B2B SAAS — LOGISTICS",
        question: "The B2B SaaS client wants to grow ARR from ~$20M at 15% YoY to 40% growth in 2 years. What did the candidate calculate as the revenue gap to be filled through expansion?",
        options: [
            { text: "$2M", score: 10, feedback: "Incorrect calculation. At 15% baseline: $23M. At 40% target: $28M. Gap = $28M − $23M = $5M." },
            { text: "$3M", score: 20, feedback: "Close but incorrect. At 15% baseline: $23M. At 40% target: $28M. Gap = $28M − $23M = $5M." },
            { text: "$5M", score: 30, feedback: "Correct! The gap between baseline growth ($23M) and target ($28M) is precisely $5M." },
            { text: "$8M", score: 10, feedback: "Incorrect calculation. At 15% baseline: $23M. At 40% target: $28M. Gap = $28M − $23M = $5M." }
        ]
    },
    {
        category: "B2B SAAS — LOGISTICS",
        question: "What four broad growth levers did the candidate identify before focusing on international expansion?",
        options: [
            { text: "Product launch, pricing changes, M&A, and partnerships", score: 20, feedback: "These are specific tactics. The candidate used a broader geographic/segment framework." },
            { text: "Grow deeper in existing market, expand to new geographies, launch new products, target new customer segments", score: 30, feedback: "Correct! This is a classic Ansoff Matrix-style growth framework — the gold standard." },
            { text: "Digital marketing, enterprise sales, reseller channels, and direct outreach", score: 10, feedback: "These are sales channels, not high-level strategic growth levers." },
            { text: "Upsell, cross-sell, reduce churn, and improve NPS", score: 20, feedback: "Valuable for organic growth, but the framework (B) covers broader market expansion." }
        ]
    },
    {
        category: "B2B SAAS — LOGISTICS",
        question: "Which factors did the candidate propose to shortlist potential expansion regions?",
        options: [
            { text: "GDP per capita, ease of doing business rank, tax rates, and English proficiency", score: 10, feedback: "Too generic. For logistics software, industry-specific factors like 'Logistics Market Size' are critical." },
            { text: "Logistics market size, digital adoption, competition intensity, regulatory ease, and language/cultural fit", score: 30, feedback: "Correct! These combine market attractiveness with the ability to compete effectively." },
            { text: "Presence of Indian diaspora, existing trade relationships, and FDI rules", score: 10, feedback: "While helpful, these are secondary to the market's core logistics and digital maturity." },
            { text: "Sales cycle length, average deal size, and number of large enterprises", score: 20, feedback: "Very important operational metrics, but initial shortlisting focuses more on market structural traits." }
        ]
    },
    {
        category: "B2B SAAS — LOGISTICS",
        question: "How was the Middle East characterised in the case discussion?",
        options: [
            { text: "Mature market with high competition and strict compliance requirements", score: 10, feedback: "This describes Europe or North America more than the growing Middle Eastern tech hub." },
            { text: "Largest market but very competitive and expensive for customer acquisition", score: 20, feedback: "This typically describes the US market in the context of SaaS expansion." },
            { text: "Fast growing with infrastructure investment, government push for digitalisation, and English widely used in business", score: 30, feedback: "Correct! These factors make the Middle East a prime 'low-hanging fruit' for expansion." },
            { text: "Low digital adoption but very easy regulatory environment", score: 10, feedback: "The Middle East is actually investing heavily in high-tech infrastructure and digital transformation." }
        ]
    },
    {
        category: "B2B SAAS — LOGISTICS",
        question: "What product adaptation did the candidate suggest for entering the Middle East?",
        options: [
            { text: "Build a completely separate product for the region", score: 10, feedback: "Too expensive and complex. SaaS typically adapts the existing core platform." },
            { text: "Check compliance with data residency rules, add Arabic language support for some interfaces, and integrate with region-specific ERP or TMS systems", score: 30, feedback: "Correct! These are the standard localizations required for enterprise SaaS success." },
            { text: "Reduce pricing by 50% to match local expectations", score: 10, feedback: "Deep pricing cuts are rarely a recommended primary strategy for premium enterprise software." },
            { text: "Hire a local team to rebuild the platform from scratch", score: 10, feedback: "Rebuilding from scratch defeats the purpose of being a scalable SaaS company." }
        ]
    },
    {
        category: "B2B SAAS — LOGISTICS",
        question: "What go-to-market approach did the candidate recommend for the Middle East?",
        options: [
            { text: "Pure digital marketing campaigns targeting enterprise decision-makers", score: 10, feedback: "Enterprise logistics software often requires high-touch, relationship-based selling." },
            { text: "Set up a small local sales team supported by the Indian tech team, partner with local system integrators, price slightly below top-tier initially, and focus on in-person relationship building at trade shows", score: 30, feedback: "Correct! This hybrid model balances cost with the need for local presence and credibility." },
            { text: "Rely entirely on the existing UAE distributor without any additional sales investment", score: 20, feedback: "Distributors are great for lead gen, but closing large enterprises usually requires direct involvement." },
            { text: "Use a freemium model to acquire SMBs first, then move upmarket", score: 10, feedback: "SMB freemium models rarely work for high-complexity enterprise logistics software." }
        ]
    },
    {
        category: "B2B SAAS — LOGISTICS",
        question: "Beyond geographic expansion, what additional growth levers did the candidate suggest?",
        options: [
            { text: "Reduce pricing across all tiers to grow volume", score: 10, feedback: "Volume plays at the expense of margin are risky in high-growth B2B SaaS." },
            { text: "Explore adjacent product features like analytics dashboards or AI-driven route optimisation, and upsell existing Indian clients", score: 30, feedback: "Correct! This increases Average Contract Value (ACV) and deepens existing client relationships." },
            { text: "Pivot to serving SMBs with a lower-cost product", score: 20, feedback: "Downmarket expansion is an option, but product adjacencies for existing large clients are more lucrative." },
            { text: "Launch a consumer-facing logistics app", score: 10, feedback: "A B2C pivot is a massive distraction and misalignment for an enterprise B2B SaaS company." }
        ]
    },
    {
        category: "B2B SAAS — LOGISTICS",
        question: "What overall recommendation did the candidate give at the end of the B2B SaaS case?",
        options: [
            { text: "Enter all three markets simultaneously to maximise growth potential", score: 10, feedback: "Spreading resources too thin is a recipe for failure; consulting favors phased prioritisation." },
            { text: "Start with Middle East (UAE & Saudi Arabia) leveraging existing distributor ties, adapt product, target ~12 enterprise clients in 18 months, upsell in India, then enter Europe once ME is stable", score: 30, feedback: "Correct! This is a structured, sequenced, and realistic roadmap for success." },
            { text: "Focus entirely on deepening the Indian market before considering any expansion", score: 10, feedback: "The case explicitly stated the goal of accelerating growth via international expansion." },
            { text: "Enter North America first due to its market size, despite the high cost", score: 20, feedback: "North America is huge, but the 'low-hanging fruit' logic favored the Middle East first." }
        ]
    }
];

// ============================
// TIER LIST CONFIGURATION
// ============================
const tierList = [
    { name: "McKinsey & Company",    color: "#4e7cff", range: "421–450 pts" },
    { name: "BCG",                   color: "#38bdf8", range: "391–420 pts" },
    { name: "Bain & Company",        color: "#f97316", range: "361–390 pts" },
    { name: "A.T. Kearney",         color: "#f59e0b", range: "331–360 pts" },
    { name: "Accenture Strategy",    color: "#a855f7", range: "301–330 pts" },
    { name: "Deloitte Strategy",     color: "#22c55e", range: "271–300 pts" },
    { name: "Roland Berger",         color: "#06b6d4", range: "241–270 pts" },
    { name: "Oliver Wyman",          color: "#ec4899", range: "211–240 pts" },
    { name: "LEK Consulting",        color: "#8b5cf6", range: "181–210 pts" },
    { name: "Simon-Kucher",          color: "#64748b", range: "150–180 pts" }
];

// ============================
// STATE
// ============================
let currentQuestion = 0;
let totalScore = 0;

// ============================
// DOM REFS
// ============================
const homeScreen    = document.getElementById('home-screen');
const quizScreen    = document.getElementById('quiz-screen');
const resultScreen  = document.getElementById('result-screen');
const startBtn      = document.getElementById('start-btn');
const nextBtn       = document.getElementById('next-btn');
const questionText  = document.getElementById('question-text');
const optionsList   = document.getElementById('options-list');
const progressFill  = document.getElementById('progress-fill');
const progressLabel = document.getElementById('progress-label');
const categoryBadge = document.getElementById('category-badge');

// ============================
// START
// ============================
startBtn.addEventListener('click', () => {
    homeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

// ============================
// LOAD QUESTION
// ============================
function loadQuestion() {
    const data = quizData[currentQuestion];

    // Update meta
    progressLabel.textContent = `${currentQuestion + 1} / ${quizData.length}`;
    progressFill.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
    categoryBadge.textContent = data.category;
    questionText.textContent = data.question;

    // Hide next
    nextBtn.classList.add('hidden');

    // Build options
    optionsList.innerHTML = '';
    data.options.forEach((opt, i) => {
        // Option button
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span class="option-text">${opt.text}</span>
            <span class="points-badge pts-${opt.score}">+${opt.score} Marks</span>
        `;

        // Inline feedback (collapsed)
        const fb = document.createElement('div');
        fb.className = 'inline-feedback';
        const scoreLabel = opt.score === 30 ? '+30 pts — Excellent answer!' :
                           opt.score === 20 ? '+20 pts — Reasonable answer' :
                                              '+10 pts — Off the mark';
        fb.innerHTML = `
            <div class="feedback-title ft-${opt.score}">${scoreLabel}</div>
            <div class="feedback-body">${opt.feedback}</div>
        `;

        btn.addEventListener('click', () => selectOption(i, opt));
        optionsList.appendChild(btn);
        optionsList.appendChild(fb);
    });
}

// ============================
// SELECT OPTION
// ============================
function selectOption(selectedIndex, selectedOpt) {
    totalScore += selectedOpt.score;

    const allBtns = optionsList.querySelectorAll('.option-btn');
    const allFeedbacks = optionsList.querySelectorAll('.inline-feedback');

    allBtns.forEach((btn, i) => {
        btn.classList.add('answered');
        const badge = btn.querySelector('.points-badge');
        badge.classList.add('show');

        if (i === selectedIndex) {
            btn.classList.add(`selected-${selectedOpt.score}`);
            // Open feedback
            const fb = allFeedbacks[i];
            fb.classList.add('open', `fb-${selectedOpt.score}`);
        } else {
            btn.classList.add('dimmed');
        }
    });

    // Show next button
    nextBtn.classList.remove('hidden');
}

// ============================
// NEXT QUESTION
// ============================
nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        // Smooth transition
        const card = document.querySelector('.quiz-card');
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => {
            loadQuestion();
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 250);
    } else {
        showResults();
    }
});

// ============================
// SHOW RESULTS
// ============================
function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const maxScore = quizData.length * 30; // 450
    const expertise = ((totalScore / maxScore) * 10).toFixed(1);

    document.getElementById('final-score').textContent = totalScore;
    document.getElementById('expertise-score').textContent = `${expertise}/10`;

    // Determine persona
    let personaIndex = 0;
    if (totalScore >= 421)      personaIndex = 0;
    else if (totalScore >= 391) personaIndex = 1;
    else if (totalScore >= 361) personaIndex = 2;
    else if (totalScore >= 331) personaIndex = 3;
    else if (totalScore >= 301) personaIndex = 4;
    else if (totalScore >= 271) personaIndex = 5;
    else if (totalScore >= 241) personaIndex = 6;
    else if (totalScore >= 211) personaIndex = 7;
    else if (totalScore >= 181) personaIndex = 8;
    else                        personaIndex = 9;

    const persona = tierList[personaIndex];
    document.getElementById('persona-name').textContent = persona.name;
    document.getElementById('persona-name').style.color = persona.color;

    // Persona descriptions
    const descriptions = [
        "You possess the ultimate analytical and structural mindset. You approach problems with rigorous MECE logic and are suited for the most complex global strategy engagements.",
        "Your strategic intuition is razor-sharp. You balance creativity with analytical rigor, making you ideal for cutting-edge strategy and innovation projects.",
        "Results-driven and client-focused, you combine deep industry insight with practical implementation knowledge. A natural private equity strategist.",
        "You bring a keen operational perspective to strategic challenges, blending market analysis with execution excellence. Perfect for operations-heavy transformations.",
        "Technology-forward and data-driven, you connect digital capabilities with business strategy. Ideal for digital transformation and enterprise-scale advisory.",
        "Your ability to navigate complex ecosystems and regulatory environments makes you a trusted advisor for large-scale, multi-stakeholder engagements.",
        "A creative strategist with a European flair for restructuring and turnaround engagements. You see opportunities where others see challenges.",
        "Risk-savvy and analytically robust, you bring a financial services lens to strategic challenges. Ideal for industries requiring deep quantitative modelling.",
        "Pragmatic and structured, you excel at breaking down ambiguous problems into actionable workstreams. A reliable generalist with sector depth.",
        "Pricing-savvy and commercially minded, you understand the intersection of value-based strategy and market positioning. A niche specialist with growing breadth."
    ];
    document.getElementById('persona-desc').textContent = descriptions[personaIndex];

    // Build tier list
    const tierContainer = document.getElementById('tier-list');
    tierContainer.innerHTML = '';
    tierList.forEach((tier, i) => {
        const row = document.createElement('div');
        row.className = `tier-row${i === personaIndex ? ' active-tier' : ''}`;
        row.innerHTML = `
            <span class="tier-rank">${i + 1}</span>
            <div class="tier-icon" style="background: ${tier.color};"></div>
            <span class="tier-name">${tier.name}</span>
            <span class="tier-range">${tier.range}</span>
        `;
        tierContainer.appendChild(row);
    });
}
