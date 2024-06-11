// for

let element; // Declaring the variable outside the loop to access it later

for (let i = 0; i <= 10; i++) {
    element = i; // Assigning the value of i to element
    if (element === 5) {
        console.log("5 IS THE BEST NUMBER");
    }
}

console.log(element); // Now element can be accessed here

for (let i = 0; i <= 10; i++)
    {
        for(let j = 0; j<= 10; j++)
            {
                //console.log(`Inner loop value ${j} and inner loop ${i}`);
                console.log(i + '*' + j + ' = ' + i*j);
            }
    }
    // let myArray = ["flash", "batman", "superman"]

    // for(let index = 0; index <= myArray.length; index++)
    // {
    //     const element = myArray[index];
    //     console.log(element);
    // }

    // break and continue

    // for(let index = 0; index<= 20; index++)
    //     {
    //         if(index == 5)
    //             {
    //                 console.log(`Detected 5`);
    //                 break;
    //             }
    //         console.log(`Value of i is ${index}`);

    //     }
    for(let index = 0; index<= 20; index++)
        {
            if(index == 5)
                {
                    console.log(`Detected 5`);
                    continue; //skip for once
                }
            console.log(`Value of i is ${index}`);

        }

