function players_ready() {
    player_1_name = document.getElementById("player_1").value;

    player_2_name = document.getElementById("player_2").value;

    localStorage.setItem("player1_name", player_1_name);

    localStorage.setItem("player2_name", player_2_name);

    window.location.replace("game_page.html");

    localStorage.getItem("player1_name").innerHTML =player_1_name + " : ";
    localStorage.getItem("player2_name").innerHTML =player_2_name + " : ";
    
    document.getElementById("player1_score").innerHTML = player_1_score;

    document.getElementById("player2_score").innerHTML = player_2_score;

}
