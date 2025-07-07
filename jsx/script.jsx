function handleTextFile(text) {
    $.writeln("SmartScribe received text:");
    $.writeln(text);
    alert("SmartScribe received your file. Content length: " + text.length);
    return true;
}
