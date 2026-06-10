let mark = 95;

if(mark >=90)
{
    console.log("Grade : A");
}
else if(mark >=80)
{
    console.log("Grade: B");
}
else if(mark >= 70)
{
    comsole.log("Grade : C");
}
else if(mark >=60)
{
    console.log("Grade :D");
}
else {
    console.log("Grade : F");
}

//task 2
//Take marks (0-100) and print the grade based on these rules:
//1. 90 and above --> A
//2. 80 -89 --> B
//3. 70-79 --> C
//4. 60-69 --> D
//5. Below 60 --> Fail 

let marks = 76;

if(marks >=90)
{
    console.log(" A Grade");
}
else if(marks >=80 && marks <=89)
{
    console.log("B Grade");
}
else if(marks >=70 && marks <=79 )
{
    console.log(" C Grade");
}else if(marks >=60 && marks <=69)
{
    console.log(" D Grade");
}else if(marks <60)
{
    console.log(" Fail ");
}else
{
    console.log("Please enter the marks");
}

