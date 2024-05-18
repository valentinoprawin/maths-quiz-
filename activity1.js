score=0;
function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "Score" + score;
}
function saveItem()
{
    localStorage.setItem("score" , score);
}
function nextPage() {
    window.location = "activity_2.html";
}