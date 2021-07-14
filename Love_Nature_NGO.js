// default behaviour
let otherMembberDetailsId = document.getElementById('otherMembberDetailsId');

let HomeMain = document.getElementById('HomeMain');
let TeamMain = document.getElementById('TeamMain');
let AchievementsMain = document.getElementById('AchievementsMain');

let navbarHomeMain = document.getElementById('navbarHomeMain');
let navbarTeamMain = document.getElementById('navbarTeamMain');
let navbarAchievementsMain = document.getElementById('navbarAchievementsMain');

TeamMain.style.display = 'none';
AchievementsMain.style.display = 'none';

let homeTopRide = document.getElementById('homeTopRide');
homeTopRide.style.display = 'none';
let teamTopRide = document.getElementById('teamTopRide');
teamTopRide.style.display = 'none';
let achievementsTopRide = document.getElementById('achievementsTopRide');
achievementsTopRide.style.display = 'none';

// home click
function homeClick(){
    homeTopRide.style.display = 'block';
    HomeMain.style.display = 'block';
    TeamMain.style.display = 'none';
    AchievementsMain.style.display = 'none';
    homeTopRide.click();
    homeTopRide.style.display = 'none';

    navbarHomeMain.classList.add('navbarHome');
    navbarHomeMain.classList.remove('navbarTeam');
    navbarHomeMain.classList.remove('navbarAchievement');
    
    navbarTeamMain.classList.remove('navbarHome');
    navbarTeamMain.classList.add('navbarTeam');
    
    navbarAchievementsMain.classList.remove('navbarHomeAchievement');
    navbarAchievementsMain.classList.add('navbarAchievement');

    otherMembberDetailsId.innerText = ``;
}

// team click
function teamClick(){
    teamTopRide.style.display = 'block';
    HomeMain.style.display = 'none';
    TeamMain.style.display = 'block';
    AchievementsMain.style.display = 'none';
    teamTopRide.click();
    teamTopRide.style.display = 'none';

    navbarTeamMain.classList.add('navbarHome');
    navbarTeamMain.classList.remove('navbarTeam');
    navbarTeamMain.classList.remove('navbarAchievement');
    
    navbarHomeMain.classList.remove('navbarHome');
    navbarHomeMain.classList.add('navbarTeam');
    
    navbarAchievementsMain.classList.remove('navbarHomeAchievement');
    navbarAchievementsMain.classList.add('navbarAchievement');

    otherMembberDetailsId.innerText = ``;
}

// Achievements click
function achievementsClick(){
    achievementsTopRide.style.display = 'block';
    HomeMain.style.display = 'none';
    TeamMain.style.display = 'none';
    AchievementsMain.style.display = 'block';
    achievementsTopRide.click();
    achievementsTopRide.style.display = 'none';
    
    navbarAchievementsMain.classList.add('navbarHomeAchievement');
    navbarAchievementsMain.classList.remove('navbarTeam');
    navbarAchievementsMain.classList.remove('navbarAchievement');
    
    navbarHomeMain.classList.remove('navbarHome');
    navbarHomeMain.classList.add('navbarTeam');
    
    navbarTeamMain.classList.remove('navbarHome');
    navbarTeamMain.classList.add('navbarTeam');

    otherMembberDetailsId.innerText = ``;
}

// other member details

function generteDetail(id){
    document.getElementById('11').style.boxShadow = 'none';
    document.getElementById('22').style.boxShadow = 'none';
    document.getElementById('33').style.boxShadow = 'none';
    document.getElementById('44').style.boxShadow = 'none';
    document.getElementById('55').style.boxShadow = 'none';
    document.getElementById('66').style.boxShadow = 'none';

    if(id == 1){
        otherMembberDetailsId.innerText = `As a CEO of this NGO i am responsible for Leading the development of the company's short- and long-term strategy. Creating and implementing the company or organization's vision and mission.`;
        document.getElementById(id+id).style.boxShadow = '10px 10px 20px black';
    }
    else if(id == 2){
        otherMembberDetailsId.innerText = `As a Manager As a manager, my job is to plan and promote the daily schedule of employees and the business, interview, hire, and coordinate employees.`;
        document.getElementById(id+id).style.boxShadow = '10px 10px 20px black';
    }
    else if(id == 3){
        otherMembberDetailsId.innerText = `As a President my job is to Overseeing budgets, staff, and executives and evaluating the success of the company. Meeting with board members and other executives`;
        document.getElementById(id+id).style.boxShadow = '10px 10px 20px black';
    }
    else if(id == 4){
        otherMembberDetailsId.innerText = `As a Vise President my job is to Overseeing budgets, staff, and executives and evaluating the success of the company. Meeting with board members and other executives`;
        document.getElementById(id+id).style.boxShadow = '10px 10px 20px black';
    }
    else if(id == 5){
        otherMembberDetailsId.innerText = `As a Executive Assistant my job is to Overseeing budgets, staff, and executives and evaluating the success of the company. Meeting with board members and other executives`;
        document.getElementById(id+id).style.boxShadow = '10px 10px 20px black';
    }
    else if(id == 6){
        otherMembberDetailsId.innerText = `As a Supervisor my job is to Overseeing budgets, staff, and executives and evaluating the success of the company. Meeting with board members and other executives`;
        document.getElementById(id+id).style.boxShadow = '10px 10px 20px black';
    }
}

