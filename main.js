var NumberOfWins = 0;
function WinDDO() {
NumberOfWins = NumberOfWins + 1;
document.getElementById("numberofclicks").innerHTML = NumberOfWins;
}
function LoseDDO() {
	NumberOfWins = NumberOfWins - 1;
	document.getElementById("numberofclicks").innerHTML = NumberOfWins;
}
function NoDDO() {
	NumberOfWins = NumberOfWins = 0
	document.getElementById("numberofclicks").innerHTML = NumberOfWins;
}