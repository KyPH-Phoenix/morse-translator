const codes = new Map();
codes.set('a', '·-/');
codes.set('b', '-···/');
codes.set('c', '-·-·/');
codes.set('d', '-··/');
codes.set('e', '·/');
codes.set('f', '··-·/');
codes.set('g', '--·/');
codes.set('h', '····/');
codes.set('i', '··/');
codes.set('j', '·---/');
codes.set('k', '-·-/');
codes.set('l', '·-··/');
codes.set('m', '--/');
codes.set('n', '-·/');
codes.set('o', '---/');
codes.set('p', '·--·/');
codes.set('q', '--·-/');
codes.set('r', '·-·/');
codes.set('s', '···/');
codes.set('t', '-/');
codes.set('u', '··-/');
codes.set('v', '···-/');
codes.set('w', '·--/');
codes.set('x', '-··-/');
codes.set('y', '-·--/');
codes.set('z', '--··/');
codes.set(' ', '/');
codes.set('\n', '/\n');
codes.set("'", '');
codes.set('.', '');
codes.set(',', '');

function trigger() {
    let input = document.getElementById("input").value;

    translate(input);
}

function translate(input) {
    let output = "";

    for (const c of input.toLowerCase().trim()) {
        output += codes.get(c);
    }
    output += "//";

    console.log(output);
    document.getElementById("output").innerHTML = output;
}
