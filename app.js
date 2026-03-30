// ============================================================
// SALARY DATA — Embedded directly (no external file loading)
// Figures are approximate ranges based on publicly available
// salary reports, community surveys, and government statistics.
// Units: millions of JPY (万円 / 10,000 yen)
// e.g. 3.5 = 350万円 = ¥3,500,000
// ============================================================
var SALARY_DATA = [
  // Software Engineer
  {role:"Software Engineer",city:"Tokyo",experience:"0-2",min:3.0,median:4.0,max:5.5},
  {role:"Software Engineer",city:"Tokyo",experience:"3-5",min:4.5,median:6.5,max:9.0},
  {role:"Software Engineer",city:"Tokyo",experience:"6-10",min:6.0,median:8.5,max:12.0},
  {role:"Software Engineer",city:"Tokyo",experience:"11-15",min:7.5,median:10.5,max:15.0},
  {role:"Software Engineer",city:"Tokyo",experience:"16+",min:9.0,median:12.5,max:18.0},
  {role:"Software Engineer",city:"Osaka",experience:"0-2",min:2.8,median:3.6,max:5.0},
  {role:"Software Engineer",city:"Osaka",experience:"3-5",min:4.0,median:5.8,max:8.0},
  {role:"Software Engineer",city:"Osaka",experience:"6-10",min:5.5,median:7.5,max:10.5},
  {role:"Software Engineer",city:"Osaka",experience:"11-15",min:6.5,median:9.0,max:13.0},
  {role:"Software Engineer",city:"Osaka",experience:"16+",min:8.0,median:11.0,max:15.5},
  {role:"Software Engineer",city:"Fukuoka",experience:"0-2",min:2.5,median:3.3,max:4.5},
  {role:"Software Engineer",city:"Fukuoka",experience:"3-5",min:3.5,median:5.2,max:7.0},
  {role:"Software Engineer",city:"Fukuoka",experience:"6-10",min:5.0,median:6.8,max:9.5},
  {role:"Software Engineer",city:"Fukuoka",experience:"11-15",min:6.0,median:8.2,max:11.5},
  {role:"Software Engineer",city:"Fukuoka",experience:"16+",min:7.0,median:9.5,max:13.5},
  {role:"Software Engineer",city:"Nagoya",experience:"0-2",min:2.7,median:3.5,max:4.8},
  {role:"Software Engineer",city:"Nagoya",experience:"3-5",min:3.8,median:5.5,max:7.5},
  {role:"Software Engineer",city:"Nagoya",experience:"6-10",min:5.2,median:7.2,max:10.0},
  {role:"Software Engineer",city:"Nagoya",experience:"11-15",min:6.2,median:8.5,max:12.0},
  {role:"Software Engineer",city:"Nagoya",experience:"16+",min:7.5,median:10.0,max:14.5},
  {role:"Software Engineer",city:"Remote",experience:"0-2",min:3.0,median:4.0,max:5.5},
  {role:"Software Engineer",city:"Remote",experience:"3-5",min:4.5,median:6.8,max:10.0},
  {role:"Software Engineer",city:"Remote",experience:"6-10",min:6.5,median:9.0,max:13.0},
  {role:"Software Engineer",city:"Remote",experience:"11-15",min:8.0,median:11.0,max:16.0},
  {role:"Software Engineer",city:"Remote",experience:"16+",min:9.5,median:13.0,max:20.0},

  // Data Scientist
  {role:"Data Scientist",city:"Tokyo",experience:"0-2",min:3.5,median:4.5,max:6.0},
  {role:"Data Scientist",city:"Tokyo",experience:"3-5",min:5.0,median:7.0,max:10.0},
  {role:"Data Scientist",city:"Tokyo",experience:"6-10",min:7.0,median:9.5,max:13.0},
  {role:"Data Scientist",city:"Tokyo",experience:"11-15",min:8.5,median:11.5,max:16.0},
  {role:"Data Scientist",city:"Tokyo",experience:"16+",min:10.0,median:13.5,max:20.0},
  {role:"Data Scientist",city:"Osaka",experience:"0-2",min:3.0,median:4.0,max:5.5},
  {role:"Data Scientist",city:"Osaka",experience:"3-5",min:4.5,median:6.2,max:8.5},
  {role:"Data Scientist",city:"Osaka",experience:"6-10",min:6.0,median:8.5,max:11.5},
  {role:"Data Scientist",city:"Osaka",experience:"11-15",min:7.5,median:10.0,max:14.0},
  {role:"Data Scientist",city:"Osaka",experience:"16+",min:9.0,median:12.0,max:17.0},
  {role:"Data Scientist",city:"Fukuoka",experience:"0-2",min:2.8,median:3.7,max:5.0},
  {role:"Data Scientist",city:"Fukuoka",experience:"3-5",min:4.0,median:5.8,max:7.8},
  {role:"Data Scientist",city:"Fukuoka",experience:"6-10",min:5.5,median:7.8,max:10.5},
  {role:"Data Scientist",city:"Fukuoka",experience:"11-15",min:7.0,median:9.2,max:12.5},
  {role:"Data Scientist",city:"Fukuoka",experience:"16+",min:8.0,median:10.5,max:15.0},
  {role:"Data Scientist",city:"Nagoya",experience:"0-2",min:3.0,median:3.8,max:5.2},
  {role:"Data Scientist",city:"Nagoya",experience:"3-5",min:4.2,median:6.0,max:8.2},
  {role:"Data Scientist",city:"Nagoya",experience:"6-10",min:5.8,median:8.0,max:11.0},
  {role:"Data Scientist",city:"Nagoya",experience:"11-15",min:7.2,median:9.5,max:13.0},
  {role:"Data Scientist",city:"Nagoya",experience:"16+",min:8.5,median:11.0,max:15.5},
  {role:"Data Scientist",city:"Remote",experience:"0-2",min:3.5,median:4.5,max:6.5},
  {role:"Data Scientist",city:"Remote",experience:"3-5",min:5.0,median:7.5,max:11.0},
  {role:"Data Scientist",city:"Remote",experience:"6-10",min:7.0,median:10.0,max:14.0},
  {role:"Data Scientist",city:"Remote",experience:"11-15",min:9.0,median:12.0,max:17.0},
  {role:"Data Scientist",city:"Remote",experience:"16+",min:10.5,median:14.0,max:22.0},

  // Product Manager
  {role:"Product Manager",city:"Tokyo",experience:"0-2",min:3.5,median:4.5,max:6.0},
  {role:"Product Manager",city:"Tokyo",experience:"3-5",min:5.0,median:7.0,max:9.5},
  {role:"Product Manager",city:"Tokyo",experience:"6-10",min:7.0,median:9.5,max:13.0},
  {role:"Product Manager",city:"Tokyo",experience:"11-15",min:9.0,median:12.0,max:16.0},
  {role:"Product Manager",city:"Tokyo",experience:"16+",min:10.5,median:14.0,max:20.0},
  {role:"Product Manager",city:"Osaka",experience:"0-2",min:3.0,median:4.0,max:5.5},
  {role:"Product Manager",city:"Osaka",experience:"3-5",min:4.5,median:6.2,max:8.5},
  {role:"Product Manager",city:"Osaka",experience:"6-10",min:6.0,median:8.5,max:11.5},
  {role:"Product Manager",city:"Osaka",experience:"11-15",min:7.5,median:10.0,max:14.0},
  {role:"Product Manager",city:"Osaka",experience:"16+",min:9.0,median:12.0,max:17.0},
  {role:"Product Manager",city:"Fukuoka",experience:"0-2",min:2.8,median:3.7,max:5.0},
  {role:"Product Manager",city:"Fukuoka",experience:"3-5",min:4.0,median:5.5,max:7.5},
  {role:"Product Manager",city:"Fukuoka",experience:"6-10",min:5.5,median:7.5,max:10.5},
  {role:"Product Manager",city:"Fukuoka",experience:"11-15",min:6.5,median:9.0,max:12.5},
  {role:"Product Manager",city:"Fukuoka",experience:"16+",min:8.0,median:10.5,max:15.0},
  {role:"Product Manager",city:"Nagoya",experience:"0-2",min:3.0,median:3.8,max:5.2},
  {role:"Product Manager",city:"Nagoya",experience:"3-5",min:4.2,median:6.0,max:8.0},
  {role:"Product Manager",city:"Nagoya",experience:"6-10",min:5.8,median:8.0,max:11.0},
  {role:"Product Manager",city:"Nagoya",experience:"11-15",min:7.0,median:9.5,max:13.0},
  {role:"Product Manager",city:"Nagoya",experience:"16+",min:8.5,median:11.0,max:15.5},
  {role:"Product Manager",city:"Remote",experience:"0-2",min:3.5,median:4.5,max:6.5},
  {role:"Product Manager",city:"Remote",experience:"3-5",min:5.5,median:7.5,max:10.5},
  {role:"Product Manager",city:"Remote",experience:"6-10",min:7.5,median:10.0,max:14.0},
  {role:"Product Manager",city:"Remote",experience:"11-15",min:9.5,median:12.5,max:17.0},
  {role:"Product Manager",city:"Remote",experience:"16+",min:11.0,median:14.5,max:22.0},

  // Designer
  {role:"Designer",city:"Tokyo",experience:"0-2",min:2.8,median:3.5,max:5.0},
  {role:"Designer",city:"Tokyo",experience:"3-5",min:4.0,median:5.5,max:7.5},
  {role:"Designer",city:"Tokyo",experience:"6-10",min:5.5,median:7.5,max:10.5},
  {role:"Designer",city:"Tokyo",experience:"11-15",min:7.0,median:9.0,max:13.0},
  {role:"Designer",city:"Tokyo",experience:"16+",min:8.0,median:10.5,max:15.0},
  {role:"Designer",city:"Osaka",experience:"0-2",min:2.5,median:3.2,max:4.5},
  {role:"Designer",city:"Osaka",experience:"3-5",min:3.5,median:5.0,max:6.8},
  {role:"Designer",city:"Osaka",experience:"6-10",min:5.0,median:6.8,max:9.5},
  {role:"Designer",city:"Osaka",experience:"11-15",min:6.0,median:8.0,max:11.0},
  {role:"Designer",city:"Osaka",experience:"16+",min:7.0,median:9.5,max:13.0},
  {role:"Designer",city:"Fukuoka",experience:"0-2",min:2.3,median:3.0,max:4.0},
  {role:"Designer",city:"Fukuoka",experience:"3-5",min:3.2,median:4.5,max:6.2},
  {role:"Designer",city:"Fukuoka",experience:"6-10",min:4.5,median:6.2,max:8.5},
  {role:"Designer",city:"Fukuoka",experience:"11-15",min:5.5,median:7.5,max:10.0},
  {role:"Designer",city:"Fukuoka",experience:"16+",min:6.5,median:8.5,max:12.0},
  {role:"Designer",city:"Nagoya",experience:"0-2",min:2.5,median:3.1,max:4.2},
  {role:"Designer",city:"Nagoya",experience:"3-5",min:3.3,median:4.8,max:6.5},
  {role:"Designer",city:"Nagoya",experience:"6-10",min:4.8,median:6.5,max:9.0},
  {role:"Designer",city:"Nagoya",experience:"11-15",min:5.8,median:7.8,max:10.5},
  {role:"Designer",city:"Nagoya",experience:"16+",min:6.8,median:9.0,max:12.5},
  {role:"Designer",city:"Remote",experience:"0-2",min:2.8,median:3.8,max:5.5},
  {role:"Designer",city:"Remote",experience:"3-5",min:4.0,median:6.0,max:8.5},
  {role:"Designer",city:"Remote",experience:"6-10",min:5.5,median:8.0,max:11.0},
  {role:"Designer",city:"Remote",experience:"11-15",min:7.0,median:9.5,max:14.0},
  {role:"Designer",city:"Remote",experience:"16+",min:8.5,median:11.0,max:16.0},

  // DevOps
  {role:"DevOps",city:"Tokyo",experience:"0-2",min:3.2,median:4.2,max:5.5},
  {role:"DevOps",city:"Tokyo",experience:"3-5",min:5.0,median:7.0,max:9.5},
  {role:"DevOps",city:"Tokyo",experience:"6-10",min:7.0,median:9.5,max:13.0},
  {role:"DevOps",city:"Tokyo",experience:"11-15",min:8.5,median:11.5,max:15.5},
  {role:"DevOps",city:"Tokyo",experience:"16+",min:10.0,median:13.0,max:18.0},
  {role:"DevOps",city:"Osaka",experience:"0-2",min:2.8,median:3.8,max:5.0},
  {role:"DevOps",city:"Osaka",experience:"3-5",min:4.5,median:6.2,max:8.5},
  {role:"DevOps",city:"Osaka",experience:"6-10",min:6.0,median:8.5,max:11.5},
  {role:"DevOps",city:"Osaka",experience:"11-15",min:7.5,median:10.0,max:13.5},
  {role:"DevOps",city:"Osaka",experience:"16+",min:8.5,median:11.5,max:16.0},
  {role:"DevOps",city:"Fukuoka",experience:"0-2",min:2.5,median:3.5,max:4.5},
  {role:"DevOps",city:"Fukuoka",experience:"3-5",min:4.0,median:5.5,max:7.5},
  {role:"DevOps",city:"Fukuoka",experience:"6-10",min:5.5,median:7.5,max:10.5},
  {role:"DevOps",city:"Fukuoka",experience:"11-15",min:6.5,median:9.0,max:12.0},
  {role:"DevOps",city:"Fukuoka",experience:"16+",min:7.5,median:10.0,max:14.0},
  {role:"DevOps",city:"Nagoya",experience:"0-2",min:2.8,median:3.6,max:4.8},
  {role:"DevOps",city:"Nagoya",experience:"3-5",min:4.2,median:5.8,max:8.0},
  {role:"DevOps",city:"Nagoya",experience:"6-10",min:5.8,median:8.0,max:11.0},
  {role:"DevOps",city:"Nagoya",experience:"11-15",min:7.0,median:9.5,max:13.0},
  {role:"DevOps",city:"Nagoya",experience:"16+",min:8.0,median:10.5,max:15.0},
  {role:"DevOps",city:"Remote",experience:"0-2",min:3.5,median:4.5,max:6.0},
  {role:"DevOps",city:"Remote",experience:"3-5",min:5.5,median:7.5,max:10.5},
  {role:"DevOps",city:"Remote",experience:"6-10",min:7.5,median:10.0,max:14.0},
  {role:"DevOps",city:"Remote",experience:"11-15",min:9.0,median:12.0,max:17.0},
  {role:"DevOps",city:"Remote",experience:"16+",min:10.5,median:14.0,max:20.0},

  // QA Engineer
  {role:"QA Engineer",city:"Tokyo",experience:"0-2",min:2.8,median:3.5,max:4.5},
  {role:"QA Engineer",city:"Tokyo",experience:"3-5",min:3.8,median:5.2,max:7.0},
  {role:"QA Engineer",city:"Tokyo",experience:"6-10",min:5.0,median:7.0,max:9.5},
  {role:"QA Engineer",city:"Tokyo",experience:"11-15",min:6.5,median:8.5,max:11.5},
  {role:"QA Engineer",city:"Tokyo",experience:"16+",min:7.5,median:10.0,max:13.5},
  {role:"QA Engineer",city:"Osaka",experience:"0-2",min:2.5,median:3.2,max:4.0},
  {role:"QA Engineer",city:"Osaka",experience:"3-5",min:3.5,median:4.8,max:6.5},
  {role:"QA Engineer",city:"Osaka",experience:"6-10",min:4.5,median:6.2,max:8.5},
  {role:"QA Engineer",city:"Osaka",experience:"11-15",min:5.5,median:7.5,max:10.0},
  {role:"QA Engineer",city:"Osaka",experience:"16+",min:6.5,median:8.5,max:12.0},
  {role:"QA Engineer",city:"Fukuoka",experience:"0-2",min:2.3,median:3.0,max:3.8},
  {role:"QA Engineer",city:"Fukuoka",experience:"3-5",min:3.0,median:4.2,max:5.8},
  {role:"QA Engineer",city:"Fukuoka",experience:"6-10",min:4.0,median:5.5,max:7.5},
  {role:"QA Engineer",city:"Fukuoka",experience:"11-15",min:5.0,median:6.8,max:9.0},
  {role:"QA Engineer",city:"Fukuoka",experience:"16+",min:6.0,median:7.8,max:10.5},
  {role:"QA Engineer",city:"Nagoya",experience:"0-2",min:2.5,median:3.1,max:4.0},
  {role:"QA Engineer",city:"Nagoya",experience:"3-5",min:3.3,median:4.5,max:6.2},
  {role:"QA Engineer",city:"Nagoya",experience:"6-10",min:4.3,median:6.0,max:8.0},
  {role:"QA Engineer",city:"Nagoya",experience:"11-15",min:5.3,median:7.2,max:9.5},
  {role:"QA Engineer",city:"Nagoya",experience:"16+",min:6.2,median:8.2,max:11.0},
  {role:"QA Engineer",city:"Remote",experience:"0-2",min:2.8,median:3.8,max:5.0},
  {role:"QA Engineer",city:"Remote",experience:"3-5",min:4.0,median:5.5,max:7.5},
  {role:"QA Engineer",city:"Remote",experience:"6-10",min:5.5,median:7.5,max:10.0},
  {role:"QA Engineer",city:"Remote",experience:"11-15",min:6.5,median:9.0,max:12.0},
  {role:"QA Engineer",city:"Remote",experience:"16+",min:7.5,median:10.5,max:14.5},

  // Engineering Manager
  {role:"Engineering Manager",city:"Tokyo",experience:"0-2",min:5.0,median:6.5,max:8.5},
  {role:"Engineering Manager",city:"Tokyo",experience:"3-5",min:7.0,median:9.0,max:12.0},
  {role:"Engineering Manager",city:"Tokyo",experience:"6-10",min:9.0,median:12.0,max:16.0},
  {role:"Engineering Manager",city:"Tokyo",experience:"11-15",min:11.0,median:14.5,max:20.0},
  {role:"Engineering Manager",city:"Tokyo",experience:"16+",min:13.0,median:17.0,max:25.0},
  {role:"Engineering Manager",city:"Osaka",experience:"0-2",min:4.5,median:5.8,max:7.5},
  {role:"Engineering Manager",city:"Osaka",experience:"3-5",min:6.0,median:8.0,max:10.5},
  {role:"Engineering Manager",city:"Osaka",experience:"6-10",min:8.0,median:10.5,max:14.0},
  {role:"Engineering Manager",city:"Osaka",experience:"11-15",min:9.5,median:12.5,max:17.0},
  {role:"Engineering Manager",city:"Osaka",experience:"16+",min:11.0,median:14.5,max:21.0},
  {role:"Engineering Manager",city:"Fukuoka",experience:"0-2",min:4.0,median:5.2,max:7.0},
  {role:"Engineering Manager",city:"Fukuoka",experience:"3-5",min:5.5,median:7.2,max:9.5},
  {role:"Engineering Manager",city:"Fukuoka",experience:"6-10",min:7.0,median:9.5,max:13.0},
  {role:"Engineering Manager",city:"Fukuoka",experience:"11-15",min:8.5,median:11.5,max:15.5},
  {role:"Engineering Manager",city:"Fukuoka",experience:"16+",min:10.0,median:13.0,max:18.5},
  {role:"Engineering Manager",city:"Nagoya",experience:"0-2",min:4.2,median:5.5,max:7.2},
  {role:"Engineering Manager",city:"Nagoya",experience:"3-5",min:5.8,median:7.5,max:10.0},
  {role:"Engineering Manager",city:"Nagoya",experience:"6-10",min:7.5,median:10.0,max:13.5},
  {role:"Engineering Manager",city:"Nagoya",experience:"11-15",min:9.0,median:12.0,max:16.0},
  {role:"Engineering Manager",city:"Nagoya",experience:"16+",min:10.5,median:14.0,max:19.5},
  {role:"Engineering Manager",city:"Remote",experience:"0-2",min:5.5,median:7.0,max:9.0},
  {role:"Engineering Manager",city:"Remote",experience:"3-5",min:7.5,median:10.0,max:13.0},
  {role:"Engineering Manager",city:"Remote",experience:"6-10",min:10.0,median:13.0,max:17.0},
  {role:"Engineering Manager",city:"Remote",experience:"11-15",min:12.0,median:15.5,max:22.0},
  {role:"Engineering Manager",city:"Remote",experience:"16+",min:14.0,median:18.0,max:28.0}
];

// ============================================================
// APP STATE & LOGIC
// ============================================================
var expOrder = {"0-2":0,"3-5":1,"6-10":2,"11-15":3,"16+":4};
var currentSort = {col:"median", asc:false};
var filtered = SALARY_DATA.slice();

// Populate filter dropdowns
function initFilters(){
  var roles = [];
  var cities = [];
  var exps = [];
  var seenR = {}, seenC = {}, seenE = {};
  for(var i=0;i<SALARY_DATA.length;i++){
    var d=SALARY_DATA[i];
    if(!seenR[d.role]){seenR[d.role]=1;roles.push(d.role)}
    if(!seenC[d.city]){seenC[d.city]=1;cities.push(d.city)}
    if(!seenE[d.experience]){seenE[d.experience]=1;exps.push(d.experience)}
  }
  roles.sort();
  cities.sort();
  exps.sort(function(a,b){return expOrder[a]-expOrder[b]});

  var rSel = document.getElementById('filter-role');
  var cSel = document.getElementById('filter-city');
  var eSel = document.getElementById('filter-exp');

  for(var i=0;i<roles.length;i++){var o=document.createElement('option');o.value=roles[i];o.textContent=roles[i];rSel.appendChild(o)}
  for(var i=0;i<cities.length;i++){var o=document.createElement('option');o.value=cities[i];o.textContent=cities[i];cSel.appendChild(o)}
  for(var i=0;i<exps.length;i++){var o=document.createElement('option');o.value=exps[i];o.textContent=exps[i]+" years";eSel.appendChild(o)}

  rSel.addEventListener('change',applyFilters);
  cSel.addEventListener('change',applyFilters);
  eSel.addEventListener('change',applyFilters);
}

function resetFilters(){
  document.getElementById('filter-role').value='all';
  document.getElementById('filter-city').value='all';
  document.getElementById('filter-exp').value='all';
  applyFilters();
}

function applyFilters(){
  var role = document.getElementById('filter-role').value;
  var city = document.getElementById('filter-city').value;
  var exp = document.getElementById('filter-exp').value;

  filtered = [];
  for(var i=0;i<SALARY_DATA.length;i++){
    var d=SALARY_DATA[i];
    if(role!=='all' && d.role!==role) continue;
    if(city!=='all' && d.city!==city) continue;
    if(exp!=='all' && d.experience!==exp) continue;
    filtered.push(d);
  }

  sortData();
  render();
  var role = document.getElementById("filter-role").value;var city = document.getElementById("filter-city").value;var exp = document.getElementById("filter-exp").value;gtag("event", "salary_filtered", {filter_type: role !== "all" ? "role" : city !== "all" ? "city" : exp !== "all" ? "experience" : "reset", role: role, city: city, experience: exp});
}

function sortBy(col){
  if(currentSort.col===col){currentSort.asc=!currentSort.asc}
  else{currentSort.col=col;currentSort.asc=true}
  sortData();
  render();
  // Update sort icons
  var ths = document.querySelectorAll('th');
  for(var i=0;i<ths.length;i++){
    ths[i].classList.remove('sorted');
    var icon = ths[i].querySelector('.sort-icon');
    if(icon) icon.textContent='\u25B2';
  }
  var activeTh = document.querySelector('th[data-col="'+col+'"]');
  if(activeTh){
    activeTh.classList.add('sorted');
    activeTh.querySelector('.sort-icon').textContent = currentSort.asc ? '\u25B2' : '\u25BC';
  }
}

function sortData(){
  var col = currentSort.col;
  var asc = currentSort.asc;
  filtered.sort(function(a,b){
    var va=a[col], vb=b[col];
    if(col==='experience'){va=expOrder[va];vb=expOrder[vb]}
    if(typeof va==='string'){va=va.toLowerCase();vb=vb.toLowerCase()}
    if(va<vb) return asc?-1:1;
    if(va>vb) return asc?1:-1;
    return 0;
  });
}

function fmt(v){return '\u00A5'+v.toFixed(1)+'M'}

function render(){
  var tbody = document.getElementById('table-body');
  var maxSalary = 0;
  for(var i=0;i<SALARY_DATA.length;i++){if(SALARY_DATA[i].max>maxSalary) maxSalary=SALARY_DATA[i].max}

  if(filtered.length===0){
    tbody.innerHTML='<tr><td colspan="7" class="no-results">No results match your filters. Try adjusting your criteria.</td></tr>';
    document.getElementById('stat-count').textContent='0';
    document.getElementById('stat-median').textContent='-';
    document.getElementById('stat-range').textContent='-';
    return;
  }

  // Stats
  var medians = [];
  var minAll = Infinity, maxAll = 0;
  for(var i=0;i<filtered.length;i++){
    medians.push(filtered[i].median);
    if(filtered[i].min<minAll) minAll=filtered[i].min;
    if(filtered[i].max>maxAll) maxAll=filtered[i].max;
  }
  medians.sort(function(a,b){return a-b});
  var overallMedian = medians[Math.floor(medians.length/2)];

  document.getElementById('stat-count').textContent=filtered.length;
  document.getElementById('stat-median').textContent=fmt(overallMedian);
  document.getElementById('stat-range').textContent=fmt(minAll)+' \u2013 '+fmt(maxAll);

  // Table rows
  var html = '';
  for(var i=0;i<filtered.length;i++){
    var d=filtered[i];
    var barW = Math.round((d.max/maxSalary)*80);
    html+='<tr>'+
      '<td>'+d.role+'</td>'+
      '<td>'+d.city+'</td>'+
      '<td>'+d.experience+' yrs</td>'+
      '<td class="salary">'+fmt(d.min)+'</td>'+
      '<td class="salary">'+fmt(d.median)+'</td>'+
      '<td class="salary">'+fmt(d.max)+' <span class="salary-bar" style="width:'+barW+'px"></span></td>'+
      '<td class="salary">'+fmt(d.max-d.min)+'</td>'+
    '</tr>';
  }
  tbody.innerHTML = html;
}

// Init
initFilters();
currentSort = {col:'median', asc:false};
sortData();
render();
// Set initial sort indicator
var initTh = document.querySelector('th[data-col="median"]');
if(initTh){initTh.classList.add('sorted');initTh.querySelector('.sort-icon').textContent='\u25BC'}
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js')}