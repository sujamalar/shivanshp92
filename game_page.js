

player_1_score = 0;
player_2_score = 0;

player_1_name = localStorage.getItem("player1_name");
player_2_name = localStorage.getItem("player2_name");

document.getElementById("player_question").innerHTML = "It's " + player_1_name + "'s Turn to Ask!";
document.getElementById("player_answer").innerHTML = "It's " + player_2_name + "'s Turn to Answer!";
document.getElementById("player1_name").innerHTML = player_1_name + "score: ";
document.getElementById("player1_score").innerHTML = player_1_score ;
document.getElementById("player2_name").innerHTML = player_2_name + "score: ";
document.getElementById("player2_score").innerHTML = player_2_score ;

function send(){

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";

    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}


question_turn = "player_1";

answer_turn = "player_2";

function check(){

    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == actual_answer){

        if(answer_turn == "player_1)"){

        player_1_score = player_1_score + 1;

        document.getElementById("player1_score").innerHTML = player_1_score;

        }
        else{

        player_2_score = player_2_score + 1;

        document.getElementById("player2_score").innerHTML = player_2_score;

        }
    }

        if(get_answer != actual_answer){

            if(answer_turn == "player_1"){

            player_1_score = player_1_score - 1;

            document.getElementById("player1_score").innerHTML = player_1_score;

            }

            else{

            player_2_score = player_2_score - 1;

            document.getElementById("player2_score").innerHTML = player_2_score;

            }
    }

    if(question_turn == "player_1"){

        question_turn = "player_2";

        document.getElementById("player_question").innerHTML = "It's " + player_2_name + "'s Turn to Ask!";
        document.getElementById("player_answer").innerHTML = "It's " + player_1_name + "'s Turn to Answer!";


    }
    else{

        question_turn = "player_1";

        document.getElementById("player_question").innerHTML = "It's " + player_1_name + "'s Turn to Ask!";
        document.getElementById("player_answer").innerHTML = "It's " + player_2_name + "'s Turn to Answer!";

    }
}