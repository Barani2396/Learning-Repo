// Learn to Program in Javascript: Beginner to Pro (https://www.udemy.com/share/101tHuAEIdcV1QQXkD/) 

// Assignment 1

/* Q1. Write a javascript function named is_integer which checks if the passed argument is an integer. 
You can use any mathematical operator or functions defined in the Math object. */

function is_integer(num) {
    if (num == Math.floor(num)) {
        console.log(num + " is a integer");
    } else {
        console.log(num + " isn't a integer");
    }
}

// test cases

is_integer(-5);
is_integer(-5.5);
is_integer(5);
is_integer(5.5);

/* Q2. Using the forEach function defined for an array, find the sum of the array of numbers. [function add_all(arr) {...}] */

function add_all(arr) {
    let sum = 0;
    arr.forEach(ele => { sum = ele + sum; });
    return sum;
}

// test cases

add_all([1, 2, 3])
add_all([2, 5, 3])

/* Q3. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. 
[ Use the formula : c = 5*(f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit] */

function temperatureConverter(mode, temp) {
    if (mode == 'C' || mode == 'c') {
        temp = ((temp * 9) / 5) + 32
        return 'Fahrenheit: ' + temp;
    } else if (mode == 'F' || mode == 'f') {
        temp = ((temp - 32) * 5) / 9;
        return 'Celsius: ' + temp;
    } else {
        console.log('Please, select either "F/f" or "C/c" of these modes to perform the conversion!');
    }
}

// test cases

temperatureConverter('C', 0);
temperatureConverter('F', 32);

/* Q4. Write a factorial function that returns the factorial of a given number, n. 
Make sure you return the calculated value and not just print it. [function factorial(n){...}] */

function factorial(val) {
    let t = 1;
    if (val == 0) {
        return 1;
    } else if (typeof(val) == "number") {
        for (var i = 1; i < val; i++) {
            t = (val - i) * t;
        }
        val = val * t;
        return val;
    } else {
        return 'Please pass numbers to perform factorial';
    }
}

// test cases

factorial(1);
factorial(9);

/* Q5. Write a javascript function that converts a given amount of money into coins of denominations (1, 2, 5, 10 and 25). 
[function convert_to_coins(amount) {...}]. 
You may choose to print the coin denominations used on the console. E.g. convert_to_coins(87) should print 25 25 25 10 2. */

function convert_to_coins(amount, abs_coins) {
    if (abs_coins == undefined) {
        let coins = [25, 10, 5, 2, 1];
        abs_coins = coins;
    }
    if (amount === 0) {
        return [];
    } else {
        if (amount >= abs_coins[0]) {
            left = (amount - abs_coins[0]);
            return [abs_coins[0]].concat(convert_to_coins(left, abs_coins));
        } else {
            abs_coins.shift();
            return convert_to_coins(amount, abs_coins);
        }
    }
}

// test cases

convert_to_coins(87);
convert_to_coins(8);

// Assignment 2

/* Q1. Write a javascript function named reverse which takes a string argument and returns the reversed string. */

function reverse(str) {
    var str_r = [];
    var j = str.length - 1;
    for (var i = 0; i < str.length; i++) {
        str_r[i] = str[j];
        j--;
    }
    return str_r.join("");
}

// i/o

var str = reverse("void");
str;

/* Q2. Given a javascript array of objects having a radius property as shown [{radius: 5}, {radius: 9}, {radius: 2}], 
write a comparator function to sort it. */

function comparator(x, y) {
    return (x.radius - y.radius);
}

// i/o

var rads = [{ radius: 5 }, { radius: 9 }, { radius: 2 }];
rads.sort(comparator);

/* Q3. Write a javascript function named length_of_array, which takes an array as argument and returns the number of elements 
in that array (as opposed to what is given by the length property of the array). 
Remember undefined can also be an element if it is explicitly set at some index, e.g. x[5] = undefined;. 
This undefined should be counted, but elements which are not present in the array (as arrays can be sparse), 
should not be counted. */

function length_of_array(arr) {
    var num_of_ele = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != null) {
            num_of_ele++
        }
    }
    return num_of_ele;
}

// i/o

var arr = [1, 2, 3];
arr[10] = "9";
length_of_array(arr);

// Assignment 3

/* Q1. Write a function to find the largest string in an array of strings making use of the reduce function. 
You can, of course, do it using a loop, but see how short your code can be if you make use of the filter function. */

function largest_string(arr) {
    return arr.reduce(function(prev, curr) {
        if (curr.lenght > prev.length) {
            return curr;
        } else {
            return prev;
        }
    }, "");
}

// i/o

var arr = ["Barani", "Deepak", "Kolangi"];
largest_string(arr);

/* Q2. Write a function that takes an array of numbers and returns the sum of squares of those numbers. 
E.g. if the array passed is [1, 2, 3] then the function should return 14. */

function sum_of_squares(arr_of_nums) {
    return arr_of_nums.map(function(ele) { return ele * ele; }).reduce(function(prev, curr) { return prev + curr; }, 0);
}

// i/o

var arr = [1, 2, 3];
sum_of_squares(arr);

/* Q3. Write a function that takes an array of numbers as an argument and filters and returns the even numbers in them. */

function is_even_num(arr_of_num) {
    return arr_of_num.filter(function(ele) { return ele % 2 == 0; });
}

// i/o

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
is_even_num(arr);

/* Q4. Write a function that takes an array and a criteria function(for filtering) and 
returns the array of those elements which do not fulfill the criteria. 
The criteria function should take any element as argument and return a boolean value. */

function is_prime(num) {
    var f = 0;
    for (var v = 2; v <= Math.round(num / 2); v++) {
        if (num % v == 0) {
            f = 1;
            break;
        }
    }
    if (f == 0 && num != 1) {
        return true;
    } else {
        return false;
    }
}

function prime_printer(arr_num, filtering) {
    var p_arr = [];
    var j = 0;
    for (var i = 0; i < arr_num.length; i++) {
        if (filtering(arr_num[i])) {
            p_arr[j] = arr_num[i];
            j++;
        }
    }
    return p_arr;
}

// i/o

var arr = [];
for (var n = 1; n <= 1000; n++) {
    arr[n - 1] = n;
}
prime_printer(arr, is_prime);

// Assignment 4

/* Q1. Write a constructor function to represent a Rectangle, which can calculate its area and perimeter. */

function Rectangle(height, width) {
    this.area = function() { return width * height; };
    this.perimeter = function() { return 2 * (height + width); };
}

// i/o

var r = new Rectangle(5, 10);
r.area();
r.perimeter();

/* Q2. Write a Point function which takes x and y coordinates as arguments to define it. 
It should also be able to evaluate the distance from another point. 
We may make use of this exercise in a later assignment problem when dealing with the Document Object Model. */

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.distance_btw_2pts = function(another) {
        return Math.sqrt((this.x - another.x) * (this.x - another.x) + (this.y - another.y) * (this.y - another.y));
    }
}

// i/o

var p1 = new Point(50, 75);
var p2 = new Point(10, 15);
p1.distance_btw_2pts(p2);

/* Q3. Write javascript code so that we can check if a string object is a palindrome. 
E.g. "xyx".isPalindrome() should return true. */

String.prototype.isPalindrome = function() {
    return this.split('').reverse().join('') == this;
}

// i/o

"xyx".isPalindrome();
"xy".isPalindrome();

// Assignment 5

/* Q1. We have used the setTimeout function recursively to run our slideshow. Javascript provides 
a setInterval(function() {console.log("Hi");}, 3000), which executes the callback function every 
n seconds. In the example shown, n is 3 seconds. Can you change the slideshow example (as we did in the lectures) 
to make use of the setInterval function instead of setTimeout? */

var pics = ["https://images.unsplash.com/photo-1511745235279-2f7276d5ba65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80", "https://images.unsplash.com/photo-1481811036917-05b4b9f27bf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80", "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"];
var count = 0;

function load() {
    imgChanger(0);
}

function imgChanger(i) {
    document.getElementById("image_canvas").getElementsByTagName("img")[0].src = pics[i % pics.length];
    setInterval(function() {
        imgChanger(i + 1);
    }, 5000);
}

window.addEventListener("load", load);

// Try the below html file 

/*
<!DOCTYPE html>
<html>

<head>
    <title>NY Slides</title>
    <script>
        var pics = ["https://images.unsplash.com/photo-1511745235279-2f7276d5ba65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80", "https://images.unsplash.com/photo-1481811036917-05b4b9f27bf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80", "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"];
        var count = 0;

        function load() {
            imgChanger(0);
        }

        function imgChanger(i) {
            document.getElementById("image_canvas").getElementsByTagName("img")[0].src = pics[i % pics.length];
            setInterval(function() {
                imgChanger(i + 1);
            }, 5000);
        }

        window.addEventListener("load", load);
    </script>
</head>

<body style="text-align: center;background-color:snow">
    <h1 id="h1">NY</h1>
    <div id="image_canvas" style="width: 1000px; height: 650px;margin: 0 auto">
        <img style="height: 100%; width: 100%">
    </div>
</body>

</html>
*/

/* Q2. The DOM API offers many methods to create new DOM elements. In the browser console, 
type in document.body.innerHTML = "<input type="text">"; and see a textbox appear on the page. 
The API offers some other interesting methods like appendChild, insertBefore etc. Nowadays, 
we use a JS library(like JQuery etc.) to do the DOM manipulation because of incompatibility of 
the DOM API among the major browsers. Still, you may want to play around with some of the methods 
to get a feel. */

function add_items() {
    if (document.getElementById("items").value == "") {
        alert("Please enter atleast single char");
    } else {
        var new_item = document.createTextNode(document.getElementById("items").value);
        var new_list = document.createElement("li");
        new_list.appendChild(new_item);
        var list = document.getElementById("ulists");
        list.insertBefore(new_list, list.childNodes[0]);
        document.getElementById("items").value = "";
    }
}

function clear_lists() {
    document.getElementById("ulists").innerHTML = "";
}

// Try the below html file 

/*
<!DOCTYPE html>
<html>

<head>
    <style>
        .parent {
            text-align: center;
        }
        
        .parent>ul {
            display: inline-block;
        }
    </style>
    <title>DOM manipulation</title>
</head>

<body style="text-align: center;">
    <h1>DOM manipulation with JS Objects</h1>
    <br>
    <div class="parent">
        <h2>Grocery Lists</h2>
        <ul id="ulists">
        </ul>
    </div>
    <br>
    <input id="items" type="text" />
    <br>
    <br>
    <button onclick="add_items()">Add Items</button>
    <button onclick="clear_lists()">Clear Lists</button>
</body>

<script>
    function add_items() {
        if (document.getElementById("items").value == "") {
            alert("Please enter atleast single char");
        } else {
            var new_item = document.createTextNode(document.getElementById("items").value);
            var new_list = document.createElement("li");
            new_list.appendChild(new_item);
            var list = document.getElementById("ulists");
            list.insertBefore(new_list, list.childNodes[0]);
            document.getElementById("items").value = "";
        }
    }

    function clear_lists() {
        document.getElementById("ulists").innerHTML = "";
    }
</script>

</html>
*/

/* Q3. In the slideshow example that we did during the lectures, make changes to be 
able to add the fadeIn transition effect. That is, instead of the pictures changing 
suddenly, let them slowly faded on over a period of 1 second or so. */