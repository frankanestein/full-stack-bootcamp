var n = Math.random();
n = Math.floor(n*100 + 1);

if (n > 70) {
    alert("Your love score is " + n + "%. You love each other like Kanye loves Kanye.");
} 

if (n > 30 && n <= 70) {
    alert("Your love score is " + n + "%.");
} 

if (n <= 30) {
    alert("Your love score is " + n + "%. You go together like oil and water.");
}