# Javascript Algorithm Solutions

This repository holds a collections of solutions to algorithm problems done in javascript

## Algorithms

- [Duplicate Encode](#duplicate-encoder)
- [Get Middle](#getMiddle)
- [Digital Root](#digitalRoot)
  <br><br>

## Details

<div id="duplicate-encoder">

1.  [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript) (6kyu) <br><br> 
#### Description
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.<br><br> 
    
#### Examples
`` 
    "din" => "(((" "recede" => "()()()" "Success" => ")())())" "(( @" => "))((" 
``
<br>

### Notes <br>
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
<br> <br>

</div>

<div id="getMiddle">

2.  [Get Middle](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript) (6kyu) #### Description
    You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.<br><br> #### Examples
    ` getMiddle("test") should return "es" getMiddle("testing") should return "t" getMiddle("middle") should return "dd" getMiddle("A") should return "A" `
    <br>

    ### Input <br>
    A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.<br><br>
    ### Output <br>
    The middle character(s) of the word represented as a string.

    </div>

<div id="digitalRoot">

3.  [Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript) (6kyu)<br> 

    #### Description
    Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.<br><br>

    #### Examples
        ```
            16  -->  1 + 6 = 7
            942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
            132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
            493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
        ```
    <br>

    </div>
