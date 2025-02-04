/*
  dashboard_alt.js
  - Demonstrates:
    1) Basic chart rendering with Chart.js (now includes all 6 charts)
    2) Simulated metric updates (Energy, Tilt, Status)
    3) Log table usage
    4) Quick action button handlers
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. METRICS SIMULATION
    const energyOutput = document.getElementById('energyOutput');
    const tiltAngle    = document.getElementById('tiltAngle');
    const systemStatus = document.getElementById('systemStatus');
    const logsBody     = document.getElementById('logsTable').querySelector('tbody');
  
    function updateMetrics() {
      const energy = (Math.random() * 10 + 5).toFixed(2) + ' kWh';
      const tilt   = Math.floor(Math.random() * 41) + 10 + '°';
      const statuses = ['Online', 'Optimizing', 'Maintenance', 'Error'];
      const status   = statuses[Math.floor(Math.random() * statuses.length)];
  
      energyOutput.textContent = energy;
      tiltAngle.textContent    = tilt;
      systemStatus.textContent = status;
  
      addLogEntry(`Metrics updated: Energy=${energy}, Tilt=${tilt}, Status=${status}`);
    }
  
    function addLogEntry(msg) {
      const row   = document.createElement('tr');
      const time  = document.createElement('td');
      const event = document.createElement('td');
      const now   = new Date().toLocaleTimeString();
  
      time.textContent  = now;
      event.textContent = msg;
  
      row.appendChild(time);
      row.appendChild(event);
  
      // Insert new log at the top
      if (logsBody.firstChild) {
        logsBody.insertBefore(row, logsBody.firstChild);
      } else {
        logsBody.appendChild(row);
      }
    }
  
    // Initial metrics + updates every 4 seconds
    updateMetrics();
    setInterval(updateMetrics, 4000);
  
  
    // 2. CHART INITIALIZATIONS (Chart.js)
    // ---------------------------------------------------
    // (A) ENERGY OUTPUT OVER TIME (Line Chart)
    // ---------------------------------------------------
    const energyCtx = document.getElementById('energyChart').getContext('2d');
    new Chart(energyCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Energy (kWh)',
            data: [10, 13, 9, 15, 22, 18, 25],
            borderColor: '#2D9CDB',
            backgroundColor: 'rgba(45,156,219,0.2)',
            fill: true,
            tension: 0.2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // fits container
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // ---------------------------------------------------
    // (B) EFFICIENCY LOSS DUE TO DUST (Bar Chart)
    // ---------------------------------------------------
    const efficiencyCtx = document.getElementById('efficiencyChart').getContext('2d');
    new Chart(efficiencyCtx, {
      type: 'bar',
      data: {
        labels: ['Panel A', 'Panel B', 'Panel C', 'Panel D'],
        datasets: [
          {
            label: 'Efficiency (%)',
            data: [78, 82, 75, 88],
            backgroundColor: '#27AE60'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  
    // ---------------------------------------------------
    // (C) SUNLIGHT INTENSITY OVER TIME (Line Chart)
    // ---------------------------------------------------
    const sunlightCtx = document.getElementById('sunlightChart').getContext('2d');
    new Chart(sunlightCtx, {
      type: 'line',
      data: {
        // Example: hours of the day
        labels: ['6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'],
        datasets: [
          {
            label: 'Sunlight Intensity (W/m²)',
            data: [200, 550, 800, 950, 1000, 700, 300],
            borderColor: '#f39c12',
            backgroundColor: 'rgba(243,156,18,0.2)',
            fill: true,
            tension: 0.2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // ---------------------------------------------------
    // (D) WIND SPEED TRENDS (Line Chart)
    // ---------------------------------------------------
    const windCtx = document.getElementById('windSpeedChart').getContext('2d');
    new Chart(windCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Wind Speed (m/s)',
            data: [5, 7, 3, 9, 6, 4, 8],
            borderColor: '#9b59b6',
            backgroundColor: 'rgba(155,89,182,0.2)',
            fill: true,
            tension: 0.2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // ---------------------------------------------------
    // (E) DUST ACCUMULATION OVER TIME (Line or Bar)
    // ---------------------------------------------------
    const dustCtx = document.getElementById('dustChart').getContext('2d');
    new Chart(dustCtx, {
      type: 'line', // or 'bar', if you prefer
      data: {
        // Example: weekly dust accumulation (grams)
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Dust Accumulation (g)',
            data: [5, 12, 25, 40],
            borderColor: '#e67e22',
            backgroundColor: 'rgba(230,126,34,0.2)',
            fill: true,
            tension: 0.2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    // ---------------------------------------------------
    // (F) CLEANING ACTIVATIONS (Bar Chart)
    // ---------------------------------------------------
    const cleaningCtx = document.getElementById('cleaningChart').getContext('2d');
    new Chart(cleaningCtx, {
      type: 'bar',
      data: {
        // Example: times cleaned each day
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: '# of Cleanings',
            data: [1, 0, 2, 1, 3, 0, 2],
            backgroundColor: '#3498db'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    
    // 3. QUICK ACTIONS
    document.getElementById('startCleaningBtn').addEventListener('click', () => {
      alert('Cleaning process started. This may take a while...');
      addLogEntry('User triggered cleaning.');
    });
  
    document.getElementById('resetSystemBtn').addEventListener('click', () => {
      const confirmReset = confirm('Confirm system reset?');
      if (confirmReset) {
        alert('System reset in progress...');
        addLogEntry('System reset initiated by user.');
      }
    });
  });
  