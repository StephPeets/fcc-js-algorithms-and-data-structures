/* 

Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

*/

// TODO: !!! Solve without binString and alphaString !!!

let binString = `00100000
00100001
00100010
00100011
00100100
00100101
00100110
00100111
00101000
00101001
00101010
00101011
00101100
00101101
00101110
00101111
00110000
00110001
00110010
00110011
00110100
00110101
00110110
00110111
00111000
00111001
00111010
00111011
00111100
00111101
00111110
00111111
01000000
01000001
01000010
01000011
01000100
01000101
01000110
01000111
01001000
01001001
01001010
01001011
01001100
01001101
01001110
01001111
01010000
01010001
01010010
01010011
01010100
01010101
01010110
01010111
01011000
01011001
01011010
01011011
01011100
01011101
01011110
01011111
01100001
01100010
01100011
01100100
01100101
01100110
01100111
01101000
01101001
01101010
01101011
01101100
01101101
01101110
01101111
01110000
01110001
01110010
01110011
01110100
01110101
01110110
01110111
01111000
01111001
01111010
01111011
01111100
01111101
01111110
`;

let alphaString = ` 
!
"
#
\$
%
&
'
(
)
*
+
,
-
.
/
0
1
2
3
4
5
6
7
8
9
:
;
<
=
>
?
@
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z
[
\\
]
^
_
a
b
c
d
e
f
g
h
i
j
k
l
m
n
o
p
q
r
s
t
u
v
w
x
y
z
{
|
}
~`;

function binaryToAlphabet(bin, alpha) {
  bin = bin.split("\n");
  alpha = alpha.split("\n");
  let mapBinKeysAlphaValues = new Map();
  for (let i = 0; i < alpha.length; i++) {
    mapBinKeysAlphaValues.set(bin[i], alpha[i]);
  }

  return mapBinKeysAlphaValues;
}

function binaryAgent(str) {
  str = str.split(" ");
  let output = [];
  let conversion = binaryToAlphabet(binString, alphaString);
  for (let letter of str) {
    output.push(conversion.get(letter));
  }
  output = output.join("");
  return output;
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);

console.log(binaryToAlphabet(binString, alphaString))
