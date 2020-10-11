# Insertion Sort
<hr>

## Sondos Matahen
<hr>


## intro:
Selection Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.


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



## Procedure:
* we'll keep track of changes in each iteration by following the psuedocode line by line, excuting and reflecting the changes on the array.
* we'll trace the values in tables.
* in each iteration, we compare an element with its previous.

we assume the first value it's the lowest value we compare it with second value and found the second it's lower than first ,then swap up the two values.
and update the array.


## Iteration 1:
- ` i= 0`
- ` j=1`
- ` min= 8`

![img]('challenges/Data-Structures/insertionSort/assest/iteration1.jpg')


## Iteration 2:
- ` i= 1`
- ` j=2`
- ` min= 8`

![img]('challenges/Data-Structures/insertionSort/assest/iteration2.jpg')


## Iteration 3:
- ` i= 2`
- ` j=3`
- ` min= 23`

![img]('challenges/Data-Structures/insertionSort/assest/iterartion3.jpg')


## Iteration 4:
- ` i= 3`
- ` j=4`
- ` min= 42`

![img]('challenges/Data-Structures/insertionSort/assest/iteration4.jpg')




