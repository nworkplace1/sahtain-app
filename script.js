/* Global Styles */
:root {
    --primary: #2980B9; /* Trustworthy Blue */
    --secondary: #E67E22; /* Energetic Orange */
    --dark: #2C3E50;
    --light: #ECF0F1;
    --white: #ffffff;
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    color: var(--dark);
    line-height: 1.6;
    background-color: #f4f7f6;
}

.container {
    width: 90%;
    max-width: 1100px;
    margin: auto;
}

/* Navigation */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    background: var(--white);
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 26px;
    font-weight: 700;
    color: var(--primary);
}

.nav-links a {
    margin-left: 25px;
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: 0.3s;
}

.nav-links a:hover {
    color: var(--secondary);
}

.btn-nav {
    background: var(--secondary);
    color: white !important;
    padding: 8px 20px;
    border-radius: 5px;
}

.btn-nav:hover {
    background: #d35400;
}

/* Hero Section */
header {
    background: url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
    background-position: center;
    height: 85vh;
    position: relative;
}

.hero-overlay {
    background: rgba(44, 62, 80, 0.7); /* Dark overlay for readability */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
    line-height: 1.2;
}

.highlight {
    color: var(--secondary);
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.btn-primary {
    padding: 15px 35px;
    background: var(--secondary);
    color: white;
    border: none;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 10px;
    transition: transform 0.2s;
}

.btn-secondary {
    padding: 15px 35px;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
}

.btn-primary:hover { transform: scale(1.05); }
.btn-secondary:hover { background: rgba(255,255,255,0.2); }

/* Section Styles */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--primary);
}

.section-subtitle {
    text-align: center;
    margin-bottom: 50px;
    color: #666;
}

/* Feature Cards */
.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.feature-card {
    background: var(--white);
    padding: 40px 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-10px);
}

.feature-card i {
    font-size: 3rem;
    color: var(--secondary);
    margin-bottom: 20px;
}

/* Stats Section (Impact) */
#impact {
    background: var(--dark);
    color: white;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    text-align: center;
}

.circle {
    width: 120px;
    height: 120px;
    border: 4px solid var(--secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 auto 20px;
}

/* Form Section */
.form-wrapper {
    background: var(--white);
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    max-width: 600px;
    margin: auto;
}

.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.input-group {
    margin-bottom: 20px;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--dark);
}

select, input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
}

.safety-check {
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
    background: #fff3cd;
    padding: 10px;
    border-radius: 5px;
    border-left: 4px solid #ffc107;
}

.safety-check input {
    width: 20px;
    margin-top: 5px;
    margin-right: 10px;
}

.safety-check label {
    font-size: 0.9rem;
    color: #856404;
}

.btn-submit {
    width: 100%;
    padding: 15px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-submit:hover {
    background: #1f618d;
}

/* Confirmation Message */
.result-hidden {
    display: none;
    margin-top: 30px;
    text-align: center;
    background: #d4edda;
    border: 1px solid #c3e6cb;
    padding: 20px;
    border-radius: 10px;
    color: #155724;
    animation: fadeIn 0.5s ease;
}

.success-icon {
    font-size: 3rem;
    margin-bottom: 10px;
}

.eco-badge {
    background: white;
    display: inline-block;
    padding: 5px 15px;
    border-radius: 20px;
    margin-top: 10px;
    font-weight: 600;
    color: #2E8B57;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

footer {
    background: #222;
    color: #aaa;
    text-align: center;
    padding: 20px;
    font-size: 0.9rem;
}
