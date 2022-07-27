# master-TDD-vegetable-garden

1.  Create a repository just with README.md
2.  clone this repository in the file where I will storage the project.
3.  Add packet json files with Command promp, using the tool (Git)
4.  Console.log everything to check if I" am dealing with a array, onject or HTML collection.
5.  "module.export does not work with inspect in google so it needs to be commented (//) in order to try console.log
6.  To work with an object example:
    const arrayItems = Object.values(items); //to convert an object to an array

        const arraySelect = arrayItems[0].filter(item => item.crop.name === item1);

7.  Create variable with empty value in order to grab the value inside the functions. Ex:
    let amount = '';  
     let itemYield = '';
    arraySelect.forEach((item) => {
    amount = item.numCrops;
    itemYield = item.crop.yield;
    });

8.  To provide more than one value as response, it is necessary to create an array. By pure fortune I found that I could create and array-object that I used afterwards. Ex:
    totalYield = [{ yieldAvocado, yieldBanana, yieldCorn, }]
    \*Ver function getTotalYieldEFs

9.  Add changes to repository. Type this in the terminal:
    git status
    git add -A
    git commit -m "message" (the mesage should describe the new changes)
    git push origin main

10. I was working in this for a week. I couldnt fig out that I was dealing with an object instead of an array at beginning. Then I didnt know how to grab the value inside the functions and the for each method, empty variable solve that issue.
