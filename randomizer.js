function Randomize()
{
    document.getElementById("text").textContent = ""
    for(let i = 0; i < 100; i++)
    {
        RandomNumber = Math.ceil(Math.random() * 2999)
        document.getElementById("text").textContent = document.getElementById("text").textContent + " " + wordList[RandomNumber]
    }
}