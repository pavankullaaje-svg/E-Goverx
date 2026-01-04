// Mock Database

let cases = JSON.parse(localStorage.getItem('egovern_cases')) || [

  { id: 'CX-901', title: 'Traffic Violation', status: 'Closed' },

  { id: 'CX-902', title: 'Cyber Fraud Alert', status: 'Pending' }

];

// Auth Logic

function login(role) {

  document.getElementById('login-view').style.display = 'none';

  document.getElementById('dashboard-view').style.display = 'flex';

  document.getElementById('logout-btn').style.display = 'block';

  document.getElementById('role-badge').innerText = `Logged in as: ${role}`;

  renderCases();

}

function logout() {

  location.reload();

}

// Navigation Logic

function showTab(tabName) {

  document.querySelectorAll('.tab').forEach(t => t.style.display = 'none');

  document.getElementById(`tab-${tabName}`).style.display = 'block';

}

// Case Management

document.getElementById('case-form').addEventListener('submit', (e) => {

  e.preventDefault();

  const newCase = {

    id: 'CX-' + Math.floor(Math.random() * 900 + 100),

    title: document.getElementById('case-title').value,

    status: 'In Investigation'

  };

  

  cases.push(newCase);

  localStorage.setItem('egovern_cases', JSON.stringify(cases));

  alert('Case Registered in Government Database');

  renderCases();

  showTab('list');

});

function renderCases() {

  const tbody = document.getElementById('case-list-body');

  tbody.innerHTML = cases.map(c => `

    <tr>

      <td>${c.id}</td>

      <td>${c.title}</td>

      <td><span style="color: ${c.status === 'Closed' ? 'green' : 'orange'}">${c.status}</span></td>

      <td><button onclick="alert('Viewing Secure File...')">View</button></td>

    </tr>

  `).join('');

}

