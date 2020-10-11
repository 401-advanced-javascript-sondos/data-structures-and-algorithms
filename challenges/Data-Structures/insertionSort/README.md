

## Challenge (problrm Domain)
   
Create a function to sort the array from smaller to larger.


## Approach & Efficiency
* Provide a visual step through for each of the sample arrays based on the provided pseudo code
* Convert the pseudo-code into working code Javascript
* Present a complete set of working tests

## Big O :
- nested loop 
    - space --> O(1) :No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).
    - time --> O(n^2) :The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.



## Pseudocode
`SelectionSort(int[] arr)
    DECLARE n <-- arr.Length;
    FOR i = 0; i to n - 1  
        DECLARE min <-- i;
        FOR j = i + 1 to n
            if (arr[j] < arr[min])
                min <-- j;

        DECLARE temp <-- arr[min];
        arr[min] <-- arr[i];
        arr[i] <-- temp; `

* Input Array: [8,4,23,42,16,15]
* Output Array: [4,8,15,16,23,42]


## Algorthim:
* we'll keep track of changes in each iteration by following the psuedocode line by line, excuting and reflecting the changes on the array.
* we'll trace the values in tables.
* in each iteration, we compare an element with its previous.

we assume the first value it's the lowest value we compare it with second value and found the second it's lower than first ,then swap up the two values.
and update the array.



## board:

![img]('assest/iteration1.jpg')

![img]('challenges/Data-Structures/insertionSort/assest/iteration2.jpg')

![img]('challenges/Data-Structures/insertionSort/assest/iterartion3.jpg')

![img]('challenges/Data-Structures/insertionSort/assest/iteration4.jpg')
